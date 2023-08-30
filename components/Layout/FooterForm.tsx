import { footerCol2 } from "@/data";
import { FC } from "react";
import BtnWithIcon from "../BtnWithIcon";

interface Props {}

const FooterForm: FC<Props> = (props): JSX.Element => {
  return (
    <form className="w-full bg-primary py-3 pb-5 px-5 rounded-md space-y-3">
      <div className="form-input-wrapper">
        <label htmlFor="name" className="form-input-label">
          Họ tên *
        </label>
        <input
          type="text"
          id="name"
          placeholder="Nguyễn Văn A"
          className="form-input"
        />
      </div>

      <div className="form-input-wrapper">
        <label htmlFor="phone" className="form-input-label">
          Số điện thoại *
        </label>
        <input
          type="number"
          id="phone"
          placeholder="0962334807"
          className="form-input"
        />
      </div>

      <div className="form-input-wrapper">
        <label htmlFor="car" className="form-input-label">
          Dòng xe quan tâm
        </label>
        <select id="car" className="form-input">
          {footerCol2.map((car, index) => (
            <option value={car.title} key={index}>
              {car.title}
            </option>
          ))}
        </select>
      </div>

      <BtnWithIcon
        type="submit"
        customClasses="bg-secondary w-full text-white uppercase"
        content="Đăng ký"
      />
    </form>
  );
};

export default FooterForm;
