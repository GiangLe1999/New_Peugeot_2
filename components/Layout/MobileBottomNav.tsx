"use client";

import { navItems } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface Props {}

const MobileBottomNav: FC<Props> = (props): JSX.Element => {
  const path = usePathname();

  return (
    <div className="hidden max-[827px]:block max-[827px]:fixed max-[827px]:bottom-0 max-[827px]:left-0 max-[827px]:right-0 z-50">
      <nav>
        <div className="grid grid-cols-4 gap-1 bg-white border-y text-secondary font-bold">
          {navItems.map((item, index) => {
            if (!item.isParent)
              return (
                <Link
                  href={item.link}
                  key={index}
                  className={`capitalize flex flex-col items-center justify-center py-2 ${
                    path === item.link && "bg-primary text-white"
                  }`}
                >
                  {item.icon && item.icon({ size: 20 })} {item.title}
                </Link>
              );
          })}
        </div>
      </nav>
    </div>
  );
};

export default MobileBottomNav;
