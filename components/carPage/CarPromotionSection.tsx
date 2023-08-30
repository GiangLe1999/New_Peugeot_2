import { FC } from "react";
import BtnWithIcon from "../BtnWithIcon";

import { FaEdit } from "react-icons/fa";

interface Props {
  content: string;
  name: string;
}

const PromotionSection: FC<Props> = ({ content, name }): JSX.Element => {
  return (
    <div className="text-textColor bg-[#f7fafc] rounded-md p-6 wrapper-shadow">
      <p className="font-bold text-center">KHUYẾN MÃI MUA XE</p>
      <h1 className="text-center text-primary font-bold text-2xl uppercase mt-1 mb-3">
        {name}
      </h1>

      <div dangerouslySetInnerHTML={{ __html: content }}></div>

      <div>
        <BtnWithIcon
          customClasses="bg-tertiary w-full font-bold text-sm text-white mt-4"
          content="NHẬN BÁO GIÁ NGAY"
          icon={FaEdit}
          iconSize={16}
        />
      </div>
    </div>
  );
};

export default PromotionSection;
