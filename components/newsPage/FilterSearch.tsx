import React, { FC, useEffect, useRef, useState } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import SearchResults from "./SearchResults";
import { useQuery } from "@tanstack/react-query";
import { getArticlesByKeyword } from "@/service/article.service";

interface Props {
  showSearchBar: any;
  setShowSearchBar: any;
}

const FilterSearch: FC<Props> = ({ showSearchBar, setShowSearchBar }) => {
  const searchRef = useRef<any>();
  const timeoutRef = useRef<any>();

  const [query, setQuery] = useState("");
  const { data, isPending } = useQuery({
    queryKey: ["get-articles-by-keyword", query],
    queryFn: () => getArticlesByKeyword(query),
  });

  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        showSearchBar
      ) {
        setShowSearchBar(false);
      }
    };

    timeoutRef.current = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 100);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      clearTimeout(timeoutRef as any);
    };
  }, []);

  return (
    <div
      ref={searchRef}
      className="dark:bg-white relative w-full flex items-center justify-between gap-1 rounded-full px-4 py-[15px] border-[2px] border-gray-500 transition"
    >
      <div className="">
        <HiMiniMagnifyingGlass className="w-6 h-6 mr-4" fill="black" />
      </div>
      <input
        type="search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        placeholder={"Tìm kiếm tin tức..."}
        className="flex-1 outline-none"
        autoFocus
        onBlur={() => setShowSearchResults(false)}
        onFocus={() => setShowSearchResults(true)}
      />
      <SearchResults
        results={data}
        showSearchResults={showSearchResults}
        query={query}
        loading={isPending}
      />
    </div>
  );
};

export default FilterSearch;
