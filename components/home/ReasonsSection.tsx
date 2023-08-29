import { FC } from "react";
import SectionTitle from "./SectionTitle";
import { reasonsToBuy } from "@/data";

interface Props {}

const ReasonsSection: FC<Props> = (props): JSX.Element => {
  return (
    <section className="container py-10">
      <p className="text-textColor text-center font-bold text-sm">
        TẠI SAO NÊN MUA XE TẠI
      </p>
      <SectionTitle title="MAZDA SÀI GÒN" />

      <div className="grid grid-cols-2 mt-8">
        <ul className="space-y-8">
          {reasonsToBuy.map((reason, index) => (
            <li key={index}>
              <p className="flex items-center gap-2 text-primary font-bold text-lg">
                {reason.icon({ size: 17 })} {reason.title}
              </p>
              <p>{reason.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ReasonsSection;
