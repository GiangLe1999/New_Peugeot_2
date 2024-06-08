import React, { FC } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

interface PaginationProps {
  currentPage: any;
  pageMaxSize: any;
  setCurrentPage: any;
}

const ArticleListPagination: FC<PaginationProps> = ({
  currentPage,
  pageMaxSize,
  setCurrentPage,
}) => {
  return (
    <div className="w-fit max-[500px]:max-w-full pagination py-12 max-[500px]:pt-8 mx-auto">
      <ResponsivePagination
        current={currentPage}
        total={pageMaxSize}
        onPageChange={setCurrentPage}
        previousLabel="Trước"
        nextLabel="Sau"
      />
    </div>
  );
};

export default ArticleListPagination;
