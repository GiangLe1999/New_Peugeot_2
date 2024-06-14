import { FC } from "react";
import SearchResultItem from "./SearchResultItem";

interface Props {
  results: any;
  showSearchResults: any;
  query: any;
  loading: any;
}

const SearchResults: FC<Props> = ({
  results,
  showSearchResults,
  query,
  loading,
}) => {
  return (
    <div
      className="absolute w-[101%] bg-white top-[60px] -left-[6px] shadow-[0_2px_6px_rgba(23,26,28,0.1),0_5px_15px_rgba(23,26,28,0.15)] z-[9999] rounded-md origin-top"
      style={{
        transform:
          results?.length >= 0 && showSearchResults
            ? "scale3d(1,1,1)"
            : "scale3d(1,0,1)",
        transition: "all 0.2s",
      }}
    >
      {!loading && (
        <>
          <div className="rounded p-4 text-xs text-[#73808C] border-b">
            {results.length} kết quả cho <b>&quot;{query}&quot;</b>
          </div>

          <div className="max-h-[30vh] overflow-y-auto">
            {results?.length > 0 &&
              results.map((result: any, index: any) => (
                <SearchResultItem key={index} result={result} query={query} />
              ))}
          </div>

          <div className="p-4 rounded-b-md border-t text-right text-xs text-[#73808C] font-bold">
            Search By Peugeot Thủ Đức
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResults;
