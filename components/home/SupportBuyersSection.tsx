import { FC } from "react";
import BtnWithIcon from "../BtnWithIcon";
import { FaPhoneAlt } from "react-icons/fa";

interface Props {}

const SupportBuyersSection: FC<Props> = (props): JSX.Element => {
  return (
    <section
      id="support-buyers"
      className="md:h-[160px] h-auto bg-primary flex items-center py-8"
    >
      <div className="flex items-center text-white container justify-between gap-4 flex-wrap">
        <div>
          <h3 className="font-bold sm:text-3xl text-2xl">
            HỖ TRỢ MUA XE PEUGEOT TRẢ GÓP
          </h3>
          <h4 className="sm:text-lg text-base mt-1">
            LÃI SUẤT THẤP - THỦ TỤC NHANH CHÓNG
          </h4>
        </div>
        <a
          href="tel:0961379001"
          className="flex items-center gap-x-2 py-2 px-4 bg-white text-primary sm:text-2xl text-lg font-bold !gap-2 !rounded-md sm:w-fit w-full"
        >
          <FaPhoneAlt />
          0961379001
        </a>
      </div>
    </section>
  );
};

export default SupportBuyersSection;
