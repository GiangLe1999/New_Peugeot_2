import { carFees } from "@/data";
import { formatPrice } from "@/lib/formatData";
import { CarLineType } from "@/types";
import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  lines?: CarLineType[];
  choseCarLine: string;
  setChoseCarLine: Dispatch<SetStateAction<string>>;
  registration: number;
  currentListPrice: number;
  currentLine: CarLineType;
  carNameArr?: string[];
  isInstallmentPage?: boolean;
  choseCarName: string;
  setChoseCarName: Dispatch<SetStateAction<string>>;
}

const FinalPriceFrom: FC<Props> = ({
  lines,
  choseCarLine,
  setChoseCarLine,
  registration,
  currentListPrice,
  currentLine,
  carNameArr,
  isInstallmentPage,
  choseCarName,
  setChoseCarName,
}): JSX.Element => {
  const currentRegistrationFee = (registration * currentListPrice) / 100;

  const { phiDkyBienso, phiDuongbo, phiDkiem, bhTNDS } = carFees;

  const currentTotal =
    currentListPrice +
    currentRegistrationFee +
    phiDkiem +
    phiDkyBienso +
    phiDuongbo +
    bhTNDS;

  return (
    <div className="cal-price-wrapper h-fit">
      <h4 className="cal-price-title">TÍNH PHÍ LĂN BÁNH</h4>

      <form className="pt-4 pb-2 text-textColor">
        {/* Place */}
        <div className="cal-price-form-input">
          <label htmlFor="place">Chọn nơi :</label>
          <select id="place" value="hcm">
            <option value="hcm">Hồ Chí Minh</option>
          </select>
        </div>

        {/* Car name */}
        {isInstallmentPage && (
          <div className="cal-price-form-input">
            <label htmlFor="carName">Dòng xe :</label>
            <select
              className="flex-1"
              id="carName"
              value={choseCarName}
              onChange={(e) => setChoseCarName(e.target.value)}
            >
              <option value="">Chọn dòng xe</option>
              {carNameArr?.map((name, index) => (
                <option value={name} key={index}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Car line */}
        <div className="cal-price-form-input">
          <label htmlFor="carLine">Phiên bản :</label>
          <select
            id="carLine"
            value={choseCarLine}
            onChange={(e) => setChoseCarLine(e.target.value)}
            disabled={carNameArr?.length === 0}
            className="disabled:opacity-50"
          >
            <option value="">Chọn phiên bản</option>
            {lines?.map((line, index) => (
              <option value={line.name} key={index}>
                {line.name}
              </option>
            ))}
          </select>
        </div>
      </form>

      {choseCarLine ? (
        <>
          <ul className="space-y-2 text-sm pb-3 border-b border-[#eee] components-price-list">
            <li>
              Giá niêm yết :<span>{formatPrice(currentListPrice)} VNĐ</span>
            </li>

            <li>
              Phí trước bạ :
              <span>{formatPrice(currentRegistrationFee)} VNĐ</span>
            </li>

            <li>
              Phí đăng ký biển số xe :
              <span>{formatPrice(phiDkyBienso)} VNĐ</span>
            </li>

            <li>
              Phí sử dụng đường bộ :<span>{formatPrice(phiDuongbo)} VNĐ</span>
            </li>

            <li>
              Phí cấp giấy chứng nhận đăng kiểm :
              <span>{formatPrice(phiDkiem)} VNĐ</span>
            </li>

            <li>
              Bảo hiểm TNDS (1 năm) :<span>{formatPrice(bhTNDS)} VNĐ</span>
            </li>
          </ul>

          <p className="flex-space-between my-3">
            Tổng dự toán
            <span className="text-xl font-bold text-tertiary block text-right">
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
