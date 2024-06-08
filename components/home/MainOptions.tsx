import { homeOptions } from "@/data";
import Link from "next/link";
import { FC } from "react";
import parse from "html-react-parser";
import BtnWithIcon from "../BtnWithIcon";
import { MdArrowForward } from "react-icons/md";

interface Props {}

const MainOptions: FC<Props> = (props): JSX.Element => {
  return (
    <section className="mt-10 container grid grid-cols-4 gap-7 max-[625px]:grid-cols-2 max-[350px]:grid-cols-1">
      {homeOptions.map((option, index) => {
        return (
          <Link
            key={index}
            href={option.link}
            className="bg-white p-4 w-full flex flex-col items-center justify-center gap-2 rounded-sm hover:scale-105 shadow-md hover:shadow-lg border transition"
          >
            {option.icon({ size: 30, color: "#C4161C" })}
            <p className="uppercase text-sm font-bold text-primary mt-2">
              {option.title}
            </p>
            <p className="text-center text-xs leading-6 my-2">
              {parse(option.des)}
            </p>
            <BtnWithIcon
              customClasses="bg-primary text-sm text-white"
              content="Chi tiết"
              icon={MdArrowForward}
            />
          </Link>
        );
      })}
    </section>
  );
};

export default MainOptions;
