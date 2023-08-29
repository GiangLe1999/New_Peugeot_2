import { FC } from "react";
import SectionTitle from "./SectionTitle";
import { promotionItems } from "@/data";

interface Props {}

const PromotionSection: FC<Props> = (props): JSX.Element => {
  return (
    <section className="py-10 container">
      <SectionTitle title="KHUYẾN MÃI MAZDA" />

      <div className="grid grid-cols-2 gap-12 py-8">
        {promotionItems.map((item, index) => (
          <div key={index}>
            <p className="text-primary text-base font-bold mb-1 flex items-center gap-1">
              {item.icon({
                size: 20,
                color: "#C4161C",
              })}
              {item.title}
            </p>
            <p className="text-sm mb-1 text-textColor leading-7">
              {item.subtitle}
            </p>
            <p
              className="text-sm text-textColor leading-7"
              dangerouslySetInnerHTML={{ __html: item.desc }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromotionSection;
