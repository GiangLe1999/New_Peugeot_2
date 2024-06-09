import { FC } from "react";
import NextImage from "../NextImage";
import BtnWithIcon from "../BtnWithIcon";

import { MdMail, MdPhone } from "react-icons/md";
import { linkConstants } from "@/data/constants";

interface Props {}

const SalerCard: FC<Props> = (props): JSX.Element => {
  return (
    <div className="w-[20%] sticky top-14 max-h-screen max-[1100px]:w-0">
      <div className="bg-secondary rounded-md overflow-hidden">
        <div className="w-full aspect-square relative">
          <NextImage
            src="/images/gioi-thieu/phong-kinh-doanh-mazda-sai-gon.png"
            alt="Phòng kinh doanh Mazda"
          />
        </div>

        <div className="text-white pt-3 pb-8 px-6">
          <p className="text-center font-bold text-base my-3">
            PHÒNG KINH DOANH
          </p>

          <BtnWithIcon
            href="tel:0333122512"
            customClasses="bg-primary w-full mb-4 font-bold text-sm"
            content="0333122512"
            icon={MdPhone}
            iconSize={16}
          />

          <BtnWithIcon
            customClasses="bg-tertiary w-full font-bold text-sm"
            content="BÁO GIÁ NHANH"
            icon={MdMail}
            iconSize={16}
            to={linkConstants.requireQuotation}
          />
        </div>
      </div>
    </div>
  );
};

export default SalerCard;
