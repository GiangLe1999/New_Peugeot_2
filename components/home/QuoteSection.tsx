import { FC } from "react";
import BtnWithIcon from "../BtnWithIcon";
import { linkConstants } from "@/data/constants";

interface Props {}

const QuoteSection: FC<Props> = (props): JSX.Element => {
  return (
    <section className="bg-[#e7e7e7]">
      <div className="mazda-bg">
        <div className="container">
          <div className="grid grid-cols-2 gap-3 max-[932px]:grid-cols-1">
            <div className="py-8 text-textColor space-y-6">
              <p className="text-center font-bold text-2xl">
                BẢNG TÍNH GIÁ LĂN BÁNH
              </p>
              <p className="text-justify">
                Xin chào Quý Khách, đây là bảng dự toán chi phí giá xe lăn bánh
                tại các tỉnh thành cũng như tại Tp. Hồ Chí Minh. Hiện tại, nếu
                biết giá lăn bánh cụ thể, đi kèm khuyến mãi hiện hành ở thời
                điểm quý khách đang xem như thể nào, xin mời quý khách liên hệ
                0333122512 ( Ghi chú: Giá xe Lăn Bánh có thể thay đổi tùy vào
                khu vực, tất cả chi phí trên chưa bao gồm phí dịch vụ làm biển
                số liên hệ để biết giá xe lăn bánh tại từng khu vực ).
              </p>

              <div className="grid grid-cols-2 gap-x-10 gap-y-2 text-white max-[457px]:grid-cols-1">
                <BtnWithIcon
                  to={linkConstants.finalPrice}
                  content="TÍNH GIÁ LĂN BÁNH"
                  customClasses="bg-primary"
                />
                <BtnWithIcon
                  to={linkConstants.installment}
                  content="THỦ TỤC TRẢ GÓP"
                  customClasses="!bg-secondary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
