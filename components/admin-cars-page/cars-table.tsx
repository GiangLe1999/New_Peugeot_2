"use client";

import { FC, useState } from "react";
import { MdEditSquare } from "react-icons/md";
import AdminBtnWithIcon from "../admin-btn-with-icon";
import { BiPlusCircle } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { linkConstants } from "@/data/constants";
import CustomModal from "../custom-modal";
import { CarEntity } from "@/entities/car.entity";
import { useRouter } from "next/navigation";
import DeleteCarForm from "./delete-car-form";

interface Props {
  cars: CarEntity[] | undefined;
}

const CarsTable: FC<Props> = ({ cars }): JSX.Element => {
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [deletedCar, setDeletedCar] = useState<CarEntity>();
  const router = useRouter();

  return (
    <>
      <div className="admin-card-body">
        <div className="text-right">
          <AdminBtnWithIcon
            content="Thêm xe mới"
            icon={BiPlusCircle}
            iconSize={18}
            to={linkConstants.create_car}
            customClasses="block ml-auto w-fit"
          />
        </div>

        <table className="w-full admin-table mt-4">
          <thead>
            <tr>
              <th>Tên xe</th>
              <th>Đường dẫn</th>
              <th>Giá từ</th>
              <th>Sửa / Xóa</th>
              <th>Demo</th>
            </tr>
          </thead>

          <tbody>
            {cars?.map((car) => (
              <tr key={car._id.toString()}>
                <td className="text-center">{car.name}</td>
                <td className="text-center">{car.slug}</td>
                <td className="text-center">{car.priceFrom}</td>
                <td className="flex items-center justify-center gap-4">
                  <MdEditSquare
                    className="mt-1 cursor-pointer text-blue-900"
                    size={18}
                    onClick={() => {
                      const url = `${linkConstants.edit_car}?slug=${car.slug}`;
                      router.push(url);
                      router.refresh();
                    }}
                  />
                  <AiFillDelete
                    className="mt-1 cursor-pointer text-red-700"
                    size={18}
                    onClick={() => {
                      setShowDeleteForm(true);
                      setDeletedCar(car);
                    }}
                  />
                </td>
                <td className="text-center">
                  <a
                    href={`/${car.slug}`}
                    target="_blank"
                    className="underline text-sm font-bold text-blue-600"
                  >
                    Xem
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CustomModal
        heading="Cảnh báo"
        onClose={() => setShowDeleteForm(false)}
        open={showDeleteForm}
      >
        <DeleteCarForm
          setShowDeleteForm={setShowDeleteForm}
          deletedCar={deletedCar as CarEntity}
        />
      </CustomModal>
    </>
  );
};

export default CarsTable;
