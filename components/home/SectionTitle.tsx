import { FC } from "react";

interface Props {
  title: string;
}

const SectionTitle: FC<Props> = ({ title }): JSX.Element => {
  return (
    <div className="text-center">
      <h3 className="font-bold text-primary text-xl uppercase">{title}</h3>
      <div className="homeSectionTitle w-44 h-[6px] mx-auto"></div>
    </div>
  );
};

export default SectionTitle;
