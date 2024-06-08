import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { ImSearch } from "react-icons/im";
import { MdEditCalendar } from "react-icons/md";
import { TiFilter } from "react-icons/ti";
import { FaFileCsv } from "react-icons/fa6";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import CustomModal from "../custom-modal";
import {
  initialDateRange,
  initialFilter,
  initialFilterObj,
} from "./ContactListTable";
import { exportToExcel } from "@/utils/exportExcelFile";
import FilterQuickConsultForm from "./FilterQuickConsultForm";

const debounce = <F extends (...args: any[]) => any>(
  func: F,
  delay: number
): ((...args: Parameters<F>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<F>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay) as ReturnType<typeof setTimeout>;
  };
};

interface Props {
  keyword: string;
  setKeyword: (keyword: string) => void;
  dateRange: {
    startDate: Date;
    endDate: Date;
    key: string;
  }[];
  setDateRange: Dispatch<
    SetStateAction<
      {
        startDate: Date;
        endDate: Date;
        key: string;
      }[]
    >
  >;
  data: any;
  filter: initialFilterObj;
  setFilter: Dispatch<SetStateAction<initialFilterObj>>;
}

const QuickConsultListTableHeader: FC<Props> = ({
  keyword,
  setKeyword,
  dateRange,
  setDateRange,
  data,
  filter,
  setFilter,
}): JSX.Element => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const datePickerRef = useRef(null);
  const [inputValue, setInputValue] = useState(keyword);
  const debouncedSetKeyword = useRef(debounce(setKeyword, 500)).current;

  const carNamesRef = useRef(null);
  const statusesRef = useRef(null);

  useEffect(() => {
    if (data.length) {
      if (carNamesRef.current == null)
        carNamesRef.current = [
          ...new Set(data.map((quickConsult: any) => quickConsult.carName)),
        ] as any;

      if (statusesRef.current == null)
        statusesRef.current = [
          ...new Set(data.map((quickConsult: any) => quickConsult.status)),
        ] as any;
    }
  }, [data.length]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    debouncedSetKeyword(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        datePickerRef.current &&
        !(datePickerRef.current as any).contains(event.target)
      ) {
        setShowDatePicker(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [datePickerRef]);

  const resetHandler = () => {
    setFilter(initialFilter);
    setKeyword("");
    setInputValue("");
    setDateRange(initialDateRange);
  };

  const exportExcelReportHandler = async () => {
    try {
      exportToExcel(data, "KhachHangCanBaoGia");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="admin-card-body mt-2 flex justify-between gap-4 flex-wrap text-sm">
        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex items-center bg-white w-full md:w-[400px] rounded-md border h-11">
            <button className="h-11 aspect-square grid place-items-center">
              <ImSearch size={20} color="#5c606a" />
            </button>
            <input
              onChange={handleInputChange}
              value={inputValue}
              type="text"
              className="flex-1 placeholder:text-neutral-400 h-10 inline-block pr-2 outline-none"
              placeholder="Tìm kiếm theo tên, hoặc SĐT..."
            />
          </div>

          <div
            className={`relative h-11 aspect-square grid place-items-center rounded-md border transition ${
              showDatePicker ? "bg-[#5c606a]" : ""
            }`}
          >
            <MdEditCalendar
              size={22}
              color={showDatePicker ? "#fff" : "#5c606a"}
              onClick={() => {
                setShowDatePicker(!showDatePicker);
              }}
              className="cursor-pointer"
            />
            <div
              ref={datePickerRef}
              className={`absolute z-50 top-[110%] shadow-md border ${
                showDatePicker ? "inline-flex" : "!hidden"
              }`}
            >
              <DateRangePicker
                onChange={(item: any) => {
                  setDateRange([item.selection]);
                }}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={dateRange}
                direction="horizontal"
              />
            </div>
          </div>

          <button
            className="h-11 aspect-square grid place-items-center rounded-md border"
            onClick={() => setShowFilter(true)}
          >
            <TiFilter size={28} color="#5c606a" />
          </button>

          <button
            onClick={resetHandler}
            className="admin-main-gradient gap-1 h-11 rounded-md border px-3 w-fit shrink-0 text-white font-bold"
          >
            Reset bộ lọc
          </button>
        </div>

        <button
          onClick={exportExcelReportHandler}
          className="admin-main-gradient flex items-center gap-2 h-11 rounded-md border px-3 w-fit shrink-0 text-white"
        >
          <FaFileCsv size={18} />
          Export
        </button>
      </div>
      <CustomModal
        heading="Bộ lọc"
        onClose={() => setShowFilter(false)}
        open={showFilter}
      >
        <FilterQuickConsultForm
          carNames={carNamesRef.current}
          statuses={statusesRef.current}
          filter={filter}
          setFilter={setFilter}
        />
      </CustomModal>
    </>
  );
};

export default QuickConsultListTableHeader;
