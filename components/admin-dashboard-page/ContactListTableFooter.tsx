import { Dispatch, FC, SetStateAction } from "react";
import {
  FaChevronLeft,
  FaAnglesLeft,
  FaAnglesRight,
  FaChevronRight,
} from "react-icons/fa6";

interface Props {
  limit: number;
  setLimit: Dispatch<SetStateAction<number>>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalDocuments: number;
  totalPages: number;
}

const ContactListTableFooter: FC<Props> = ({
  limit,
  setLimit,
  currentPage,
  setCurrentPage,
  totalDocuments,
  totalPages,
}): JSX.Element => {
  const backOnePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const moveForwardOnePage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  let maximumNumber = 0;
  if (limit == 0) {
    maximumNumber = totalDocuments;
  } else {
    if (totalDocuments >= currentPage * limit) {
      maximumNumber = currentPage * limit;
    } else {
      maximumNumber = totalDocuments;
    }
  }

  return (
    <div className="admin-card-body mt-6 flex justify-end text-sm">
      <div className="flex items-center gap-8 flex-wrap">
        <div className="flex items-center gap-2">
          Số hàng mỗi trang
          <select
            className="border rounded-md h-9 px-3"
            name="page-rows"
            id="page-rows"
            value={limit}
            onChange={(e) => {
              setLimit(e.target.value as unknown as number);
              setCurrentPage(1);
            }}
          >
            <option value={15}>15</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
            <option value={0}>All</option>
          </select>
        </div>

        <div className="">
          {(currentPage - 1) * limit + 1}-{maximumNumber} of {totalDocuments}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setCurrentPage(1)}
            className={`h-9 aspect-square grid place-items-center rounded-md border ${
              currentPage === 1 ? "opacity-60" : ""
            }`}
            disabled={currentPage === 1}
          >
            <FaAnglesLeft size={16} color="#5c606a" />
          </button>

          <button
            onClick={backOnePage}
            disabled={currentPage === 1}
            className={`h-9 aspect-square grid place-items-center rounded-md border ${
              currentPage === 1 ? "opacity-60" : ""
            }`}
          >
            <FaChevronLeft size={13} color="#5c606a" />
          </button>

          <button
            onClick={moveForwardOnePage}
            disabled={currentPage === totalPages}
            className={`h-9 aspect-square grid place-items-center rounded-md border ${
              currentPage === totalPages ? "opacity-60" : ""
            }`}
          >
            <FaChevronRight size={13} color="#5c606a" />
          </button>

          <button
            className={`h-9 aspect-square grid place-items-center rounded-md border ${
              currentPage === totalPages ? "opacity-60" : ""
            }`}
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(totalPages)}
          >
            <FaAnglesRight size={16} color="#5c606a" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactListTableFooter;
