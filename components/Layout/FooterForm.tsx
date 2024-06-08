"use client";

import { getAllCarsNameVsSlug } from "@/service/car.service";
import { useQuery } from "@tanstack/react-query";
import { FC, FormEvent, useState } from "react";
import { ImSpinner3 } from "react-icons/im";
import Swal from "sweetalert2";

interface Props {}

const FooterForm: FC<Props> = (props): JSX.Element => {
  const { data: cars, isPending } = useQuery({
    queryKey: ["get-car-names-for-modal"],
    queryFn: getAllCarsNameVsSlug,
  });

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [choseCar, setChoseCar] = useState("");
  const [loading, setLoading] = useState(false);

  const resetFormHandler = () => {
    setName("");
    setPhone("");
    setChoseCar("");
    setLoading(false);
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    if (!name || !name.trim() || !phone || !phone.trim() || !choseCar) {
      Swal.fire({
        icon: "error",
        title: "Không hợp lệ!",
        text: "Vui lòng kiểm tra lại thông tin trước khi gửi form.",
        confirmButtonColor: "#C4161C",
      });
      return;
    }

    setLoading(true);

    try {
      const data = JSON.stringify({ name, phone, choseCar });
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/quick-consult`,
        {
          method: "POST",
          body: data,
        }
      );

      if (!res.ok) {
        throw new Error();
      }

      Swal.fire({
        icon: "success",
        title: "Thành công!",
        text: "Chúng tôi sẽ liên hê đến Anh (Chị) trong thời gian sớm nhất.",
        confirmButtonColor: "green",
      });
      resetFormHandler();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Không hợp lệ!",
        text: "Vui lòng kiểm tra lại thông tin trước khi gửi form.",
        confirmButtonColor: "#C4161C",
      });
      resetFormHandler();
    }
  };

  return (
    <form
      className="w-full bg-primary py-3 pb-5 px-5 rounded-md space-y-3"
      onSubmit={submitHandler}
    >
      <div className="form-input-wrapper">
        <label htmlFor="name" className="form-input-label">
          Họ tên *
        </label>
        <input
          type="text"
          id="name"
          placeholder="Nguyễn Văn A"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-input-wrapper">
        <label htmlFor="phone" className="form-input-label">
          Số điện thoại *
        </label>
        <input
          type="number"
          id="phone"
          placeholder="0333122512"
          className="form-input"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className="form-input-wrapper">
        <label htmlFor="car" className="form-input-label">
          Dòng xe quan tâm
        </label>
        <select
          id="car"
          className="form-input"
          value={choseCar}
          onChange={(e) => setChoseCar(e.target.value)}
          disabled={isPending}
        >
          <option value="">-- Chọn dòng xe --</option>
          {cars?.map((car: any, index: number) => (
            <option value={car.name} key={index}>
              {car.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="bg-secondary w-full text-white uppercase py-2 rounded-sm flex items-center justify-center gap-1 hover:scale-[1.01]"
      >
        {loading ? (
          <>
            <ImSpinner3 size={20} className="animate-spin" />
            Đang gửi
          </>
        ) : (
          "Đăng ký"
        )}
      </button>
    </form>
  );
};

export default FooterForm;
