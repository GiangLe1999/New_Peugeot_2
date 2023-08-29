import { FC } from "react";
import ContainNextImage from "../ContainNextImage";

interface Props {
  title: string;
}

const SectionTitle: FC<Props> = ({ title }): JSX.Element => {
  return (
    <div className="text-center">
      <h3 className="font-bold text-primary text-[26px] uppercase mb-1">
        {title}
      </h3>
      <div className="w-full h-[7px] relative text-center">
        <ContainNextImage src="/images/home/divider.png" alt="Divider line" />
      </div>
    </div>
  );
};

export default SectionTitle;
