"use client";

import { linkConstants } from "@/data/constants";
import Link from "next/link";
import { FC } from "react";

interface Props {
  showBuyMenu: boolean;
}

const buyCarMenu: { title: string; link: string }[] = [
  { title: "Thủ tục trả góp", link: "/thu-tuc-tra-gop" },
  { title: "Đăng ký lái thử", link: linkConstants.testDrive },
  { title: "Đăng ký báo giá", link: linkConstants.requireQuotation },
  { title: "Tính phí lăn bánh", link: linkConstants.finalPrice },
];

const BuyCarMenu: FC<Props> = ({ showBuyMenu }): JSX.Element => {
  return (
    <ul
      className={`absolute w-[141px] top-[calc(100%+2px)] left-0 z-50 bg-white px-2 py-1 transition rounded-sm shadow-md origin-top text-primary ${
        showBuyMenu ? "scale-3d-1" : "scale-3d-0"
      }`}
    >
      {buyCarMenu.map((item, index) => (
        <li key={index}>
          <Link
            href={item.link}
            className={`block text-left py-3 px-2 capitalize font-lg hover:text-white hover:bg-primary rounded-sm ${
              index !== 0 && "border-t"
            }`}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BuyCarMenu;
