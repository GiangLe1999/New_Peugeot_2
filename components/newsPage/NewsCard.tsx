import { frontType } from "@/app/tin-tuc/[postSlug]/page";
import { FC } from "react";
import NextImage from "../NextImage";
import Link from "next/link";

interface Props {
  item: frontType;
}

const NewsCard: FC<Props> = ({ item }): JSX.Element => {
  return (
    <div className="shadow-md group rounded-md overflow-hidden border">
      <Link
        href={`/tin-tuc/${item.slug}`}
        className="block relative w-full aspect-video overflow-hidden"
      >
        <NextImage
          src={item.avt}
          alt={item.title}
          className="group-hover:scale-[1.05] duration-200"
        />
      </Link>

      <Link href={`/tin-tuc/${item.slug}`} className="p-4 text-textColor block">
        <h2 className="text-center uppercase font-semibold mb-4 leading-8">
          {item.title}
        </h2>

        <div className="pt-4 mb-6 border-t border-[#d5d5d5] text-justify leading-8 line-clamp-3">
          {item.description}
        </div>

        <div className="w-fit mx-auto uppercase tracking-widest font-bold pb-6 relative after:w-full after:h-[2px] after:left-0 after:bg-textColor after:absolute after:bottom-0 group-hover:after:-translate-y-4 after:opacity-0 group-hover:after:opacity-100 after:transition">
          Xem chi tiết
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
