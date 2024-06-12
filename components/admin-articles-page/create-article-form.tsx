"use client";

import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import { TiArrowBack } from "react-icons/ti";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { blobToBase64 } from "@/lib/blobToBase64";
import toast from "react-hot-toast";
import { ISelectOption } from "@/dtos/common.dto";
import axiosInstance from "@/lib/axios";
import { MdFileUpload } from "react-icons/md";
import NextImage from "../NextImage";
import TextEditor from "../text-editor";
import AdminBtnWithLoading from "../admin-btn-with-loading";
import { articleCategory } from "@/model/Article";
import FormOptimizedSelect from "../form-optimized-select";
import { articleCategories } from "@/data/menu";
import AdminFormInput from "../admin-form-input";
import AdminBtnWithIcon from "../admin-btn-with-icon";
import { linkConstants } from "@/data/constants";

const schema: any = Yup.object({
  name: Yup.string().required("Vui lòng nhập tên bài viết"),
  description: Yup.string().required("Vui lòng nhập đoạn mô tả bài viết"),
  slug: Yup.string().required("Vui lòng nhập đường dẫn cho bài viết"),
});

interface FormValues {
  name: string;
  description: string;
  slug: string;
  thumbnail: string;
}

interface Props {
  author: string | undefined;
}

interface ISelectCategory {
  value: articleCategory;
  label: articleCategory;
}

const CreateArticleForm: FC<Props> = ({ author }): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const [content, setContent] = useState("");

  const [selectedCategory, setSelectedCategory] = useState<ISelectCategory>({
    value: articleCategory.none,
    label: articleCategory.none,
  });

  const form: any = useForm<FormValues>({
    defaultValues: {
      name: "",
      description: "",
      slug: "",
      thumbnail: "",
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState, watch, setValue } = form;

  const { errors } = formState;

  const uploadThumbnailHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files?.length) {
      return;
    }

    const file = files[0];

    if (file.size > 1024 * 1024 * 3) {
      setValue("thumbnail", "");
      return toast.error("Ảnh phải dưới 3MB");
    }

    const base64: any = await blobToBase64(file);
    setValue("thumbnail", base64);
  };

  const onSubmit = async (formData: FormValues) => {
    setIsLoading(true);
    try {
      await axiosInstance.post("/api/admin/article", {
        ...formData,
        content,
        category: selectedCategory.value,
        author: author as string,
      });

      toast.success(`Tạo bài viết thành công`);
      router.push(linkConstants.admin_articles);
      return router.refresh();
    } catch (error: any) {
      toast.error(error.message);
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className="admin-card-body relative !pb-24">
        <div className="text-right mb-6">
          <AdminBtnWithIcon
            content="Trở về trang trước"
            icon={TiArrowBack}
            iconSize={22}
            onClick={() => router.back()}
            customClasses="md:w-fit w-full"
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <label
              htmlFor="thumbnail"
              className="mt-2 relative w-full aspect-video rounded-md flex flex-col justify-center items-center border border-dashed border-admin_primary cursor-pointer"
            >
              {watch("thumbnail") ? (
                <NextImage
                  src={watch("thumbnail")}
                  alt="Thumbnail cho bài viết"
                  className="rounded-md overflow-hidden w-full h-full"
                />
              ) : (
                <>
                  <MdFileUpload size={50} className="text-admin_primary" />
                  <span className="text-admin_primary font-semibold">
                    Chọn thumbnail cho bài viết
                  </span>
                  <span className="mt-1 text-slate-700">
                    ( Tỷ lệ ảnh: 16/9 )
                  </span>
                </>
              )}

              <input
                type="file"
                name="thumbnail"
                id="thumbnail"
                hidden
                onChange={uploadThumbnailHandler}
              />
            </label>

            <div className="">
              <AdminFormInput
                id="name"
                label="Tiêu đề"
                register={register("name")}
                errorMsg={errors.name?.message}
                placeholder="Nhập tiêu đề bài viết"
              />

              <AdminFormInput
                id="slug"
                label="Đường dẫn"
                register={register("slug")}
                errorMsg={errors.slug?.message}
                placeholder="Nhập đường dẫn bài viết"
              />

              <FormOptimizedSelect
                id="category"
                label="Chọn danh mục"
                onChange={
                  setSelectedCategory as Dispatch<SetStateAction<ISelectOption>>
                }
                options={articleCategories}
                value={selectedCategory}
              />
            </div>
          </div>

          <AdminFormInput
            textarea
            id="description"
            rows={4}
            label="Mô tả"
            register={register("description")}
            errorMsg={errors.description?.message}
            placeholder="Nhập description (mô tả) cho bài viết"
          />

          <label className="form-input-label !mb-1 block">
            Nội dung bài viết
          </label>
          <TextEditor content={content} setContent={setContent} />

          <AdminBtnWithLoading
            content="Tạo bài viết"
            isLoading={isLoading}
            type="submit"
            customClasses="!absolute bottom-7 right-5"
          />
        </form>
      </div>
    </>
  );
};

export default CreateArticleForm;
