import React, { FC, useEffect, useState } from "react";
import { FaFacebookSquare, FaRssSquare } from "react-icons/fa";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import FilterSearch from "./FilterSearch";

interface Props {
  selectedCate: any;
  setSelectedCate: any;
  setCurrentPage: any;
}

const categories = [
  { title: "Tất cả", id: "all" },
  {
    title: "Ưu đãi",
    id: "Ưu đãi",
  },
  {
    title: "Sự kiện",
    id: "Sự kiện",
  },
  {
    title: "Thông tin xe",
    id: "Thông tin xe",
  },
];

const FilterBar: FC<Props> = ({
  selectedCate,
  setSelectedCate,
  setCurrentPage,
}) => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const [coloredBlockInfo, setColoredBlockInfo] = useState({
    width: 0,
    left: 0,
  });

  useEffect(() => {
    const parent = document.getElementById("parent");
    const element = document.getElementById(selectedCate);

    if (element && parent) {
      setColoredBlockInfo({
        width: element.getBoundingClientRect().width,
        left:
          element.getBoundingClientRect().left -
          parent.getBoundingClientRect().left,
      });
    }
  }, [selectedCate]);

  return (
    <>
      {showSearchBar ? (
        <FilterSearch
          showSearchBar={showSearchBar}
          setShowSearchBar={setShowSearchBar}
        />
      ) : (
        <div className="lg:flex justify-between items-center w-full">
          <ul
            id="parent"
            className="relative lg:flex grid grid-cols-4 p-2.5 border rounded-full shadow-[0_7px_20px_0_hsla(240,5%,41%,0.2)]"
          >
            <div
              className={`z-10 absolute top-2 bottom-2 bg-primary  rounded-full transition-left duration-300`}
              style={{
                width: coloredBlockInfo.width + "px",
                left: coloredBlockInfo.left + "px",
              }}
            ></div>
            {categories.map((cate) => (
              <li id={cate.id} key={cate.id}>
                <button
                  className={`transition lg:w-fit w-full relative z-20 py-2 px-4 rounded-full font-semibold lg:text-sm text-xs ${
                    selectedCate === cate.id ? "text-white" : "text-gray-900"
                  }`}
                  onClick={() => {
                    setSelectedCate(cate.id);
                    setCurrentPage(1);
                  }}
                >
                  <span className="line-clamp-1">{cate.title}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="lg:mt-0 mt-6">
            <div className="flex items-center gap-x-5">
              <span className="text-gray-600 hidden sm:block text-sm font-bold">
                Theo dõi để cập nhật liên tục:
              </span>

              <a
                href="https://twitter.com/gmajorglobal"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <FaFacebookSquare className="w-[22px] h-[22px] text-gray-600 transition-color duration-200 hover:text-primary" />
              </a>

              <a
                href="https://gmajor.biz/rss.xml"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaRssSquare className="w-[22px] h-[22px] text-gray-600 transition-color duration-200 hover:text-primary" />
              </a>

              <div className="h-[18px] bg-gray-400 w-[1px] mx-2"></div>

              <button
                onClick={() => setShowSearchBar(true)}
                className="py-2.5 px-4 flex flex-1 xs:flex-grow-0 items-center gap-x-2 text-xs sm:text-sm text-white bg-primary rounded-full"
              >
                <HiMiniMagnifyingGlass className="w-5 h-5 text-white" />
                <span className="font-bold">Tìm kiếm</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterBar;
