"use client";

import { navItems } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface Props {}

const MobileBottomNav: FC<Props> = (props): JSX.Element => {
  const path = usePathname();

  return (
    <div className="hidden max-[844px]:block max-[844px]:fixed max-[844px]:bottom-0 max-[844px]:left-0 max-[844px]:right-0 z-50">
      <nav>
        <div className="grid grid-cols-4 gap-1 bg-white border-t text-secondary font-bold">
          {navItems.map((item, index) => {
            if (!item.isParent)
              return (
                <Link
                  href={item.link}
                  key={index}
                  className={`capitalize flex flex-col items-center justify-center py-2 text-sm max-[350px]:text-xs ${
                    path === item.link && "bg-primary text-white"
                  }`}
                >
                  {item.icon && item.icon({ size: 18 })} {item.title}
                </Link>
              );
          })}
        </div>
      </nav>
    </div>
  );
};

export default MobileBottomNav;
