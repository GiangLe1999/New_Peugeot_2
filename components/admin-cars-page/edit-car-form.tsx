"use client";

import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import AdminBtnWithIcon from "../admin-btn-with-icon";
import { TiArrowBack } from "react-icons/ti";
import { useRouter } from "next/navigation";
import FormOptimizedSelect from "../form-optimized-select";
import * as Yup from "yup";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { blobToBase64 } from "@/lib/blobToBase64";
import toast from "react-hot-toast";
import { ISelectOption } from "@/dtos/common.dto";
import axiosInstance from "@/lib/axios";
import AdminFormInput from "../admin-form-input";
import { MdFileUpload } from "react-icons/md";
import NextImage from "../NextImage";
import AdminBtnWithLoading from "../admin-btn-with-loading";
import { CreateCarInput, CreateCarOutput } from "@/dtos/car/create-car.dto";
import TextEditor from "../text-editor";
import { ICarLine, carCategory, carTier } from "@/model/Car2";
import { carCategories, carTiers } from "@/data/menu";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { linkConstants } from "@/data/constants";
import { CarEntity } from "@/entities/car.entity";
import { useQueryClient } from "@tanstack/react-query";

const schema: any = Yup.object({
  name: Yup.string().required("Vui lòng nhập tên xe"),
  avatar: Yup.string().required("Vui lòng chọn ảnh đại diện cho xe"),
  slug: Yup.string().required("Vui lòng nhập đường dẫn của xe"),
  priceFrom: Yup.string().required("Vui lòng nhập giá thấp nhất của xe"),
  registration: Yup.string().required("Vui lòng nhập registration của xe"),
  seats: Yup.string().required("Vui lòng nhập số ghế của xe"),
  gear: Yup.string().required("Vui lòng nhập loại hộp số của xe"),
  fuel: Yup.string().required("Vui lòng nhập loại nhiên liệu của xe"),
  engine: Yup.string().required("Vui lòng nhập loại động cơ của xe"),
});

interface FormValues {
  name: string;
  avatar: string;
  slug: string;
  priceFrom: number;
  registration: number;
  seats: number;
  gear: string;
  fuel: string;
  engine: string;
  brochure: string;
  colors: { color: string; colorImg: string }[];
  carLines: ICarLine[];
}

interface Props {
  car: CarEntity | undefined;
}

interface ISelectCategory {
  value: carCategory;
  label: carCategory;
}

interface ISelectTier {
  value: carTier;
  label: carTier;
}

const EditCarFrom: FC<Props> = ({ car }): JSX.Element => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [content, setContent] = useState(car?.content || "");
  const [saleContent, setSaleContent] = useState(car?.saleContent || "");

  const [selectedCategory, setSelectedCategory] = useState<ISelectCategory>({
    value: car?.category || carCategory.none,
    label: car?.category || carCategory.none,
  });

  const [selectedTier, setSelectedTier] = useState<ISelectTier>({
    value: car?.tier || carTier.none,
    label: car?.tier || carTier.none,
  });

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    defaultValues: {
      name: car?.name || "",
      avatar: car?.avatar?.url || "",
      slug: car?.slug || "",
      priceFrom: car?.priceFrom || 0,
      registration: car?.registration || 0,
      seats: car?.seats || 0,
      gear: car?.gear || "",
      fuel: car?.fuel || "",
      engine: car?.engine || "",
      brochure: car?.brochure || "",
      colors: car?.colors?.map((color) => ({
        ...color,
        colorImg: color?.colorImg?.url || "",
      })),
      carLines: car?.carLines || [],
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState, setValue, control, watch } = form;

  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "carLines",
    control,
  });

  const {
    fields: fields_colors,
    append: append_color,
    remove: remove_color,
  } = useFieldArray({
    name: "colors",
    control,
  });

  const uploadAvatarHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files?.length) {
      return;
    }

    const file = files[0];

    if (file.size > 1024 * 1024 * 3) {
      setValue("avatar", "");
      return toast.error("Ảnh phải dưới 3MB");
    }

    const base64: any = await blobToBase64(file);
    setValue("avatar", base64);
  };

  const uploadColorAvatarHandler = async (
    e: ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const files = e.target.files;
    if (!files?.length) {
      return;
    }

    const file = files[0];

    if (file.size > 1024 * 1024 * 3) {
      setValue(`colors.${id}.colorImg`, "");
      return toast.error("Ảnh phải dưới 3MB");
    }

    const base64: any = await blobToBase64(file);
    setValue(`colors.${id}.colorImg`, base64);
  };

  const onSubmit = async (formData: FormValues) => {
    try {
      setIsLoading(true);

      if (!selectedCategory.value) {
        setIsLoading(false);
        return toast.error("Vui lòng chọn loại xe");
      }

      if (!selectedTier.value) {
        setIsLoading(false);
        return toast.error("Vui lòng chọn hạng xe");
      }

      if (!content) {
        setIsLoading(false);
        return toast.error("Vui lòng nhập thông tin chi tiết về xe");
      }

      const bodyRequest: CreateCarInput = {
        ...formData,
        category: selectedCategory.value,
        tier: selectedTier.value,
        content,
        saleContent,
      };

      const { data }: { data: CreateCarOutput } = await axiosInstance.put(
        `/api/admin/car`,
        bodyRequest,
        { params: { id: car?._id } }
      );

      if (data.error) {
        setIsLoading(false);
        return toast.error(data.msg);
      } else {
        setIsLoading(false);
        toast.success(`Cập nhật ${data?.data?.name} thành công`);
        queryClient.invalidateQueries(["get-admin-cars"] as any);
        return router.push(linkConstants.admin_cars);
        // router.refresh();
      }
    } catch (error: any) {
      setIsLoading(false);
      return toast.error(error.message);
    }
  };

  return (
    <>
      <div className="admin-card-body relative !pb-24">
        <div className="text-right mb-4">
          <AdminBtnWithIcon
            content="Trở về trang trước"
            icon={TiArrowBack}
            iconSize={22}
            onClick={() => router.push(linkConstants.admin_cars)}
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
          <div className="grid grid-cols-2 gap-10 items-center mb-6">
            <label
              htmlFor="avatar"
              className="w-full mt-2 relative aspect-video rounded-md flex flex-col justify-center items-center border border-dashed border-admin_primary cursor-pointer"
            >
              {watch("avatar") ? (
                <NextImage
                  src={watch("avatar")}
                  alt="Ảnh đại diện xe"
                  className="rounded-md overflow-hidden w-full h-full"
                />
              ) : (
                <>
                  <MdFileUpload size={50} className="text-admin_primary" />
                  <span className="text-admin_primary font-semibold">
                    Chọn ảnh đại diện cho xe
                  </span>
                  <span className="mt-1 text-slate-700">
                    ( Tỷ lệ ảnh: 16/9 )
                  </span>
                </>
              )}

              <input
                type="file"
                id="avatar"
                hidden
                {...register("avatar", { onChange: uploadAvatarHandler })}
              />
            </label>

            <div>
              <AdminFormInput
                id="name"
                label="Tên xe"
                register={register("name")}
                errorMsg={errors.name?.message}
                placeholder="VD: Morning, Seltos, Soluto, ..."
              />

              <AdminFormInput
                id="slug"
                label="Đường dẫn"
                register={register("slug")}
                errorMsg={errors.slug?.message}
                placeholder="VD: morning, seltos, soluto, ..."
              />

              <AdminFormInput
                id="priceFrom"
                type="number"
                label="Giá thấp nhất"
                register={register("priceFrom", { valueAsNumber: true })}
                errorMsg={errors.priceFrom?.message}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-1 mb-4">
            <FormOptimizedSelect
              id="tier"
              label="Chọn loại xe"
              onChange={
                setSelectedCategory as Dispatch<SetStateAction<ISelectOption>>
              }
              options={carCategories}
              value={selectedCategory}
            />

            <FormOptimizedSelect
              id="SubCategory"
              label="Chọn hạng xe"
              onChange={
                setSelectedTier as Dispatch<SetStateAction<ISelectOption>>
              }
              options={carTiers}
              value={selectedTier}
            />

            <AdminFormInput
              id="registration"
              label="Registration"
              register={register("registration", { valueAsNumber: true })}
              errorMsg={errors.registration?.message}
            />

            <AdminFormInput
              id="brochure"
              label="Link brochure"
              register={register("brochure")}
              errorMsg={errors.brochure?.message}
              placeholder="VD: https://res.cloudinary.com"
            />

            <AdminFormInput
              id="seats"
              label="Số ghế"
              register={register("seats", { valueAsNumber: true })}
              errorMsg={errors.seats?.message}
            />

            <AdminFormInput
              id="gear"
              label="Loại hộp số"
              register={register("gear")}
              errorMsg={errors.gear?.message}
              placeholder="VD: Hộp số sàn 5 cấp (5MT)"
            />

            <AdminFormInput
              id="fuel"
              label="Nhiên liệu"
              register={register("fuel")}
              errorMsg={errors.fuel?.message}
              placeholder="VD: Xăng, Dầu, ..."
            />

            <AdminFormInput
              id="engine"
              label="Động cơ"
              register={register("engine")}
              errorMsg={errors.engine?.message}
              placeholder="VD: Kappa 1.25L"
            />

            <div>
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="relative rounded-lg border shadow-md mb-4"
                >
                  <div className="flex items-center justify-between font-bold rounded-t-lg admin-main-gradient text-white py-2 px-4">
                    <span>Dòng xe {index + 1}</span>

                    <button
                      type="button"
                      className="font-bold flex items-center gap-1 text-xs text-white"
                      onClick={() => remove(index)}
                    >
                      <BiMinusCircle />
                      Xóa dòng xe {index + 1}
                    </button>
                  </div>

                  <div className="flex flex-col p-4">
                    <AdminFormInput
                      id={`carLine_${index}_name`}
                      label={`Tên dòng xe ${index + 1}`}
                      register={register(`carLines.${index}.name` as const)}
                      placeholder={`VD: New Morning MT, New Morning Premium, ...`}
                    />

                    <AdminFormInput
                      id={`carLine_${index}_price`}
                      label={`Giá dòng xe ${index + 1}`}
                      register={register(`carLines.${index}.price` as const, {
                        valueAsNumber: true,
                      })}
                      placeholder={`VD: 349, 399, ...`}
                    />

                    <AdminFormInput
                      id={`carLine_${index}_tax`}
                      label={`Thuế dòng xe ${index + 1}`}
                      register={register(`carLines.${index}.tax` as const, {
                        valueAsNumber: true,
                      })}
                      placeholder={`VD: 35.9, 40.9, ...`}
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                className="font-bold flex items-center gap-1 mb-4 text-xs admin-main-gradient text-white rounded-md shadow-md w-fit p-2 mt-4"
                onClick={() => append({ name: "", price: 0, tax: "" })}
              >
                <BiPlusCircle /> Thêm dòng xe
              </button>
            </div>

            <div>
              {fields_colors.map((field, index) => (
                <div
                  key={field.id}
                  className="relative rounded-lg border shadow-md mb-4"
                >
                  <div className="flex items-center justify-between font-bold rounded-t-lg admin-main-gradient text-white py-2 px-4">
                    <span>Màu xe {index + 1}</span>

                    <button
                      type="button"
                      className="font-bold flex items-center gap-1 text-xs text-white"
                      onClick={() => remove_color(index)}
                    >
                      <BiMinusCircle />
                      Xóa màu xe {index + 1}
                    </button>
                  </div>

                  <div className="flex flex-col p-4">
                    <AdminFormInput
                      id={`color_${index}_color`}
                      label={`Mã màu xe ${index + 1}`}
                      register={register(`colors.${index}.color` as const)}
                      placeholder={`VD: #2b3c7f, #8d1018, ...`}
                    />

                    <label
                      htmlFor={`color_avatar_${index}`}
                      className="w-full mt-2 relative aspect-video rounded-md flex flex-col justify-center items-center border border-dashed border-admin_primary cursor-pointer"
                    >
                      {watch(`colors.${index}.colorImg`) ? (
                        <NextImage
                          src={watch(`colors.${index}.colorImg`)}
                          alt="Ảnh đại diện cho màu xe"
                          className="rounded-md overflow-hidden w-full h-full"
                        />
                      ) : (
                        <>
                          <MdFileUpload
                            size={50}
                            className="text-admin_primary"
                          />
                          <span className="text-admin_primary font-semibold">
                            Chọn ảnh đại diện cho xe
                          </span>
                          <span className="mt-1 text-slate-700">
                            ( Tỷ lệ ảnh: 16/9 )
                          </span>
                        </>
                      )}

                      <input
                        type="file"
                        id={`color_avatar_${index}`}
                        hidden
                        {...register(`colors.${index}.colorImg`, {
                          onChange: (e) => uploadColorAvatarHandler(e, index),
                        })}
                      />
                    </label>
                  </div>
                </div>
              ))}
              <button
                type="button"
                className="font-bold flex items-center gap-1 mb-4 text-xs admin-main-gradient text-white rounded-md shadow-md w-fit p-2 mt-4"
                onClick={() => append_color({ color: "", colorImg: "" })}
              >
                <BiPlusCircle /> Thêm màu xe
              </button>
            </div>
          </div>

          <label className="admin-form-input-label !mb-1 block">
            Thông tin khuyến mãi
          </label>
          <div className="small-text-editor mb-6">
            <TextEditor content={saleContent} setContent={setSaleContent} />
          </div>

          <label className="admin-form-input-label !mb-1 block">
            Thông tin chi tiết xe
          </label>
          <TextEditor content={content} setContent={setContent} />

          <AdminBtnWithLoading
            content="Cập nhật"
            isLoading={isLoading}
            type="submit"
            customClasses="!absolute bottom-7 right-5"
          />
        </form>
      </div>
    </>
  );
};

export default EditCarFrom;
