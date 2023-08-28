import { FC } from "react";
import SectionTitle from "./SectionTitle";
import { promotionItems } from "@/data";

interface Props {}

const PromtionSection: FC<Props> = (props): JSX.Element => {
  return (
    <section className="py-6">
      <SectionTitle title="KHUYẾN MÃI MAZDA" />

      <div className="grid grid-cols-2 gap-8 py-5">
        {promotionItems.map((item, index) => (
          <div key={index}>
            <p className="text-primary text-xs font-bold mb-1 flex items-center gap-1">
              {item.icon({
                size: 20,
                color: "#C4161C",
              })}
              {item.title}
            </p>
            <p className="text-[10px] mb-1">{item.subtitle}</p>
            <p
              className="text-[10px]"
              dangerouslySetInnerHTML={{ __html: item.desc }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromtionSection;
