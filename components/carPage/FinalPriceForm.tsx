import { carFees } from "@/data";
import { formatPrice } from "@/lib/formatData";
import { CarLineType } from "@/types";
import { FC, SetStateAction } from "react";

const rowClasses = "flex justify-between items-center";

interface Props {
  lines: CarLineType[];
  choseCarLine: string;
  setChoseCarLine: React.Dispatch<SetStateAction<string>>;
  registration: number;
  currentListPrice: number;
  currentLine: CarLineType;
}

const FinalPriceFrom: FC<Props> = ({
  lines,
  choseCarLine,
  setChoseCarLine,
  registration,
  currentListPrice,
  currentLine,
}): JSX.Element => {
  const currentTax = Number(currentLine?.tax);
  const currentRegistrationFee =
    (registration * 1000000 * currentTax * 10) / 100 || 0;

  const { phiDkyBienso, phiDuongbo, phiDkiem, phiDvu, thuchiho, bhTNDS } =
    carFees;

  const currentTotal =
    currentListPrice +
    currentRegistrationFee +
    phiDkiem +
    phiDkyBienso +
    phiDuongbo +
    phiDvu +
    thuchiho +
    bhTNDS;

  return (
    <div className="cal-price-wrapper h-fit">
      <h4 className="cal-price-title">TÍNH PHÍ LĂN BÁNH</h4>

      <form className="pt-4 pb-2 text-textColor">
        {/* Place */}
        <div className="cal-price-form-input">
          <label htmlFor="place" className="w-1/3">
            Chọn nơi :
          </label>
          <select id="place" value="hcm">
            <option value="hcm">Hồ Chí Minh</option>
          </select>
        </div>

        {/* Car line */}
        <div className="cal-price-form-input">
          <label htmlFor="carLine" className="w-1/3">
            Phiên bản :
          </label>
          <select
            id="carLine"
            value={choseCarLine}
            onChange={(e) => setChoseCarLine(e.target.value)}
          >
            <option value="">Chọn phiên bản</option>
            {lines.map((line, index) => (
              <option value={line.name} key={index}>
                {line.name}
              </option>
            ))}
          </select>
        </div>
      </form>

      {choseCarLine ? (
        <>
          <ul className="space-y-2 text-sm pb-3 border-b border-[#eee]">
            <li className={rowClasses}>
              Giá niêm yết :<span>{formatPrice(currentListPrice)} VNĐ</span>
            </li>

            <li className={rowClasses}>
              Phí trước bạ :
              <span>{formatPrice(currentRegistrationFee)} VNĐ</span>
            </li>

            <li className={rowClasses}>
              Phí đăng ký biển số xe :
              <span>{formatPrice(phiDkyBienso)} VNĐ</span>
            </li>

            <li className={rowClasses}>
              Phí sử dụng đường bộ :<span>{formatPrice(phiDuongbo)} VNĐ</span>
            </li>

            <li className={rowClasses}>
              Phí cấp giấy chứng nhận đăng kiểm :
              <span>{formatPrice(phiDkiem)} VNĐ</span>
            </li>

            <li className={rowClasses}>
              Khoảng thu, chi hộ khách hàng :
              <span>{formatPrice(thuchiho)} VNĐ</span>
            </li>

            <li className={rowClasses}>
              Phí dịch vụ đăng ký :<span>{formatPrice(phiDvu)} VNĐ</span>
            </li>
          </ul>

          <p className={`${rowClasses} my-3`}>
            Tổng dự toán
            <span className="text-xl font-bold text-tertiary">
              {formatPrice(currentTotal)} VNĐ
            </span>
          </p>
        </>
      ) : (
        <p className="text-sm italic">
          Vui lòng chọn dòng xe và nơi đăng ký để dự toán chi phí.
        </p>
      )}
    </div>
  );
};

export default FinalPriceFrom;
