import { homeOptions } from "@/data";
import Link from "next/link";
import { FC } from "react";

interface Props {}

const MainOptions: FC<Props> = (props): JSX.Element => {
  return (
    <div className="grid grid-cols-4 gap-7">
      {homeOptions.map((option, index) => {
        return (
          <Link
            key={index}
            href={option.link}
            className="bg-primary w-full flex flex-col items-center justify-center gap-2 rounded-sm text-white py-2 hover:bg-red-600 hover:scale-105 transition"
          >
            {option.icon({ size: 30 })}
            <p className="uppercase text-xs font-bold">{option.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default MainOptions;
