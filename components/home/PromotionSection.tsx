import { FC } from "react";
import SectionTitle from "./SectionTitle";
import { HiReceiptTax } from "react-icons/hi";
import { FaUsersCog } from "react-icons/fa";

interface Props {}

const PromotionSection: FC<Props> = (props): JSX.Element => {
  return (
    <section className="py-10 container">
      <SectionTitle title="KHUYẾN MÃI PEUGEOT" />

      <div className="grid grid-cols-2 gap-x-12 gap-y-6 py-8 max-[738px]:grid-cols-1">
        <div>
          <p className="text-secondary text-base font-bold mb-1 flex items-center gap-1">
            <HiReceiptTax size={20} color="#494d65" />
            ƯU ĐÃI KÉP CỰC LỚN THÁNG {new Date().getMonth() + 1}
          </p>
          <p className="text-sm mb-1 text-textColor leading-7">
            Bên cạnh chương trình ưu đãi đến từ thương hiệu, khách hàng còn được
            hưởng chính sách <b>giảm 50% lệ phí trước bạ</b>. Peugeot là thương
            hiệu châu Âu duy nhất áp dụng{" "}
            <b>chính sách bảo hành chính hãng 5 năm</b> tiêu chuẩn.
          </p>
          <p className="text-sm mb-1 text-textColor leading-7">
            Với nhiều ưu đãi hấp dẫn và dịch vụ hậu mãi chất lượng, đây chính cơ
            hội vàng trong năm để khách hàng sở hữu các mẫu xe châu Âu đẳng cấp
            với mức giá tốt nhất tại thị trường Việt Nam. Để biết thêm thông tin
            chi tiết, xin vui lòng liên hệ:
          </p>

          <ul className="text-sm mb-1 text-textColor leading-7 list-disc ml-4">
            <li>
              Hotline:{" "}
              <a href="tel:0961379001" className="underline">
                <b>0961379001</b>
              </a>
            </li>
            <li>
              Email:{" "}
              <a href="mailto:vucuong1710@gmail.com" className="underline">
                <b>vucuong1710@gmail.com</b>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-secondary text-base font-bold mb-1 flex items-center gap-1">
            <FaUsersCog size={20} color="#494d65" />
            TƯ VẤN TRỰC TUYẾN – LÁI THỬ TẠI NHÀ
          </p>
          <p className="text-sm mb-1 text-textColor leading-7">
            Quý khách hàng sẽ được tư vấn đầy đủ các thông tin về giá bán, phiên
            bản và tính năng của từng sản phẩm Peugeot thế hệ mới phù hợp với
            nhu cầu sử dụng thực tế.
          </p>
          <p className="text-sm mb-1 text-textColor leading-7">
            Song song với các chương trình ưu đãi hấp dẫn, Peugeot Thủ Đức luôn
            đảm bảo đặt ưu tiên sự nhanh chóng và tiện lợi của khách hàng lên
            hàng đầu với chương trình{" "}
            <b className="text-primary">
              “Tư vấn trực tuyến – Lái thử tại nhà”
            </b>
            . Thông qua các ứng dụng trực tuyến trên <b>Facebook, Zalo</b> … Quý
            khách hàng sẽ được tư vấn đầy đủ các thông tin về giá bán, phiên bản
            và tính năng của từng sản phẩm Peugeot thế hệ mới phù hợp với nhu
            cầu sử dụng thực tế kể cả khi không trực tiếp đến đại lý Peugeot Thủ
            Đức.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
