import { FC } from "react";
import SectionTitle from "./SectionTitle";
import { reasonsToBuy } from "@/data";
import NextImage from "../NextImage";
import CustomerSwiper from "./CustomerSwiper";

interface Props {}

const ReasonsSection: FC<Props> = (props): JSX.Element => {
  return (
    <section className="container py-10">
      <p className="text-textColor text-center font-bold text-sm">
        TẠI SAO NÊN MUA XE TẠI
      </p>
      <SectionTitle title="MAZDA THỦ ĐỨC" />

      <div className="grid grid-cols-2 mt-8 gap-6 max-[1100px]:grid-cols-1">
        <ul className="space-y-5">
          {reasonsToBuy.map((reason, index) => (
            <li key={index}>
              <p className="flex items-center gap-2 text-primary font-bold text-lg">
                {reason.icon({ size: 17 })} {reason.title}
              </p>
              <p>{reason.desc}</p>
            </li>
          ))}
        </ul>

        <div className="relative w-full aspect-[739/493] rounded-sm overflow-hidden">
          <NextImage
            src="/images/home/mazda-tai-sao-nen-mua.jpg"
            alt="Tại sao nên mua xe Mazda?"
          />
        </div>
      </div>

      <CustomerSwiper />
    </section>
  );
};

export default ReasonsSection;
