"use client";

import { navCarMenu } from "@/data";
import { FC, SetStateAction, Dispatch } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiFillCloseSquare } from "react-icons/ai";

interface Props {
  showCarMenu: boolean;
  setShowCarMenu: Dispatch<SetStateAction<boolean>>;
  parentUnHoverHandler: () => void;
}

const NavCarMenu: FC<Props> = ({
  showCarMenu,
  parentUnHoverHandler,
  setShowCarMenu,
}): JSX.Element => {
  return (
    <div
      className={`absolute w-full top-full left-0 z-50 bg-white p-5 grid grid-cols-5 gap-3 rounded-sm shadow-md transition origin-top max-[822px]:grid-cols-4 max-[638px]:grid-cols-3 ${
        showCarMenu ? "scale-3d-1" : "scale-3d-0"
      }`}
    >
      {navCarMenu.map((car, index) => (
        <Link
          href={"/" + car.link}
          key={index}
          className="text-center hover:scale-[1.04] transition"
          onClick={parentUnHoverHandler}
        >
          <div className="relative w-full aspect-video">
            <Image
              style={{ objectFit: "contain" }}
              fill={true}
              src={car.img}
              alt={car.name}
            />
          </div>

          <p className="font-bold text-sm text-textColor">{car.name}</p>
          <p className="font-bold text-primary">Giá: Từ {car.price} triệu</p>
        </Link>
      ))}

      <button
        onClick={() => setShowCarMenu(false)}
        className="text-primary absolute top-2 right-2 flex items-center gap-1 hover:scale-[1.1] transition"
      >
        <span className="underline font-bold">Đóng</span>
        <AiFillCloseSquare size={25} />
      </button>
    </div>
  );
};

export default NavCarMenu;
