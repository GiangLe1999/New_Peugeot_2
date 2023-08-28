import { FC } from "react";

import ContainNextImage from "@/components/ContainNextImage";
import Link from "next/link";
import { BsHeadset } from "react-icons/bs";
import { navItems } from "@/data";

interface Props {}

const Header: FC<Props> = (props): JSX.Element => {
  return (
    <>
      {/* Top Header */}
      <div className="bg-secondary text-white py-3">
        <div className="container flex items-center justify-between">
          <Link href="/" className="relative w-36 h-8 block">
            <ContainNextImage
              src="/images/mazda-logo-800x500.png"
              alt="Mazda logo"
              priority
            />
          </Link>

          <h2 className="text-lg font-bold">MAZDA SÀI GÒN</h2>

          <a
            href="tel:0962334807"
            className="flex items-center gap-2 font-medium"
          >
            <div className="bg-primary rounded-full w-8 h-8 grid place-items-center">
              <BsHeadset />
            </div>

            <div className="text-xs">
              <p>HOTLINE</p>
              <p>096.2334.807</p>
            </div>
          </a>
        </div>
      </div>

      {/* Sticky Header */}
      <div className="bg-primary text-center sticky top-0">
        <nav className="container flex items-center justify-center h-10">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="uppercase text-[11px] text-white px-4 py-2 hover:bg-secondary rounded-sm transition"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
