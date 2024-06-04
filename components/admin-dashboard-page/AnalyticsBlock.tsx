import { FC } from "react";
import { IconType } from "react-icons";
import { BsFillTagsFill } from "react-icons/bs";

interface Props {
  icon: IconType;
  iconSize: number;
  title: string;
  number: number | string;
  iconBelow: IconType;
  explainText: string;
}

const AnalyticsBlock: FC<Props> = ({
  icon,
  iconSize,
  title,
  number,
  iconBelow,
  explainText,
}): JSX.Element => {
  return (
    <div className="bg-white rounded-md shadow-[0_1px_4px_0_rgba(0,0,0,0.14)] relative p-4">
      <div
        className={`absolute w-[86px] aspect-square -top-9 left-4 text-white px-5 py-4 rounded-md grid place-items-center admin-item-shadow admin-main-gradient`}
      >
        {icon({ size: iconSize })}
      </div>
      <div className="flex flex-col items-end gap-2 pb-5 border-b">
        <p className="text-neutral-400 text-sm">{title}</p>
        <span className="text-2xl font-semibold">{number}</span>
      </div>
      <div className="flex items-center gap-1 pt-4 text-neutral-400 text-xs">
        {iconBelow({ size: 16, className: "-mt-[2px]" })} {explainText}
      </div>
    </div>
  );
};

export default AnalyticsBlock;
