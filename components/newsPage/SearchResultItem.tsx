import { makeBold } from "./MakeBold";
import { FC } from "react";
import Link from "next/link";

interface Props {
  result: any;
  query: any;
}

const SearchResultItem: FC<Props> = ({ result, query }) => {
  return (
    <Link
      href={`/tin-tuc/${result.slug}`}
      className={`p-4 border-b flex flex-col space-y-2 group cursor-pointer hover:bg-[#e9e9e9]`}
    >
      <div className="flex justify-between gap-1">
        <h4
          className="text-sm text-[#171A1C] font-bold group-hover:text-primary"
          dangerouslySetInnerHTML={{
            __html: makeBold(result.name, query),
          }}
        ></h4>
      </div>
      <p
        className="text-xs text-[#73808C]"
        dangerouslySetInnerHTML={{
          __html: makeBold(result.description, query),
        }}
      />
    </Link>
  );
};

export default SearchResultItem;
