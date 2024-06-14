import FirstBanner from "@/components/FirstBanner";
import NextImage from "@/components/NextImage";
import { NextPage } from "next";
export const dynamic = "force-dynamic";

export const generateMetadata = () => {
  return {
    title: "Về chúng tôi",
    description:
      "Thông tin về PEUGEOT Thủ Đức, về cơ sở vật chất, đội ngũ nhận viên. Tham khảo tại website chính thức của Peugeot Thủ Đức.",
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/gioi-thieu`,
  };
};

interface Props {}

const page: NextPage<Props> = () => {
  return (
    <div>
      <FirstBanner
        heading="VỀ CHÚNG TÔI"
        subHeading="Peogeot Thủ Đức"
        bgImg="/images/thu-tuc-tra-gop/first-banner.jpg"
        bgClasses="!bg-cover !bg-[50%_50%]"
      />

      <div className="container my-12 space-y-12">
        <div className="introduce-section">
          <div>
            <p>Chào mừng đến với</p>
            <h2>PEUGEOT Thủ Đức</h2>
            <ul>
              <li>
                Xây dựng trên diện tích gần 2000 m2 với tổng số vốn đầu tư 161
                tỉ đồng, showroom Peugeot Thủ Đức có phong cách thiết kế hiện
                đại, trẻ trung và tiện nghi.
              </li>
              <li>
                Kiến trúc chung gồm các khu: trưng bày xe, xưởng dịch vụ và kho
                cung cấp phụ tùng, sân đường nội bộ và bãi xe; thuận tiện cho
                khách hàng tham quan, lựa chọn các mẫu xe du lịch Peugeot trẻ
                trung, sang trọng cũng như hưởng chế độ dịch vụ, bảo dưỡng tốt
                nhất.
              </li>
              <li>
                Nơi đây quy tụ đầy đủ các dòng xe đang thịnh hành mang thương
                hiệu Peugeot như Peugeot 2, Peugeot 3, Peugeot 6, CX-5, CX-9… và
                dòng bán tải BT-50..
              </li>
              <li>
                Không chỉ có những sản phẩm tối ưu với thiết kế độc đáo,
                showroom Peugeot Thủ Đức còn có đội ngũ bán hàng chuyên nghiệp,
                có kiến thức sâu rộng và thái độ phục vụ ân cần, chu đáo, giúp
                khách hàng chọn được mẫu xe ưng ý nhất.
              </li>
            </ul>
          </div>

          <div className="introduce-section-img">
            <NextImage
              src="/images/gioi-thieu/peugeot-binh-trieu-thu-duc-tphcm.webp"
              alt="Peugeot Thủ Đức"
            />
          </div>
        </div>

        <div className="introduce-section introduce-reverse">
          <div className="introduce-section-img left">
            <NextImage
              src="/images/gioi-thieu/peugeot-binh-trieu-co-so-vat-chat.webp"
              alt="Peugeot Thủ Đức"
            />
          </div>

          <div className="right">
            <p>Tổng quản về</p>
            <h2>Cơ sở vật chất</h2>
            <ul>
              <li>
                Xưởng dịch vụ-sửa chữa quy mô 900 m2 được trang bị máy móc,
                thiết bị công nghệ hiện đại đáp ứng các như cầu bảo hành, bảo
                dưỡng, sửa chữa và dịch vụ đồng-sơn xe mới…
              </li>
              <li>
                Công suất phục vụ sửa chữa tối đa của xưởng lên đến 30 lượt xe
                mỗi ngày. Bên cạnh đó, đội ngũ kỹ thuật viên showroom giàu kinh
                nghiệm, trình độ chuyên môn cao và phong cách chuyên nghiệp, đủ
                năng lực đáp ứng các yêu cầu khó khăn nhất của Quý khách hàng.
              </li>
              <li>
                Với những ưu thế sẵn có, Peugeot Thủ Đức luôn được nhiều khách
                hàng tín nhiệm, là một trong những showroom có nhiều khách hàng
                thân thiết trong hệ thống, đồng thời thuộc nhóm các showroom có
                doanh số dẫn đầu trong hệ thống showroom Peugeot cả nước.
              </li>
            </ul>
          </div>
        </div>
        <div className="introduce-section">
          <div>
            <p>Những lợi ích mà</p>
            <h2>Peugeot Thủ Đức mang lại</h2>
            <ul>
              <li>
                <span>Công nghệ hiện đại: </span>
                Xưởng dịch vụ-sửa chữa của Peugeot Thủ Đức được trang bị máy
                móc, thiết bị công nghệ hiện đại đáp ứng các như cầu bảo hành,
                bảo dưỡng, sửa chữa và dịch vụ đồng-sơn xe mới… Công suất phục
                vụ sửa chữa tối đa của xưởng lên đến hàng trăm lượt xe mỗi ngày.
              </li>

              <li>
                <span>Đội ngũ giàu kinh nghiệm: </span> Đội ngũ kỹ thuật viên
                showroom giàu kinh nghiệm, trình độ chuyên môn cao và phong cách
                chuyên nghiệp, đủ năng lực đáp ứng các yêu cầu khó khăn nhất của
                Quý khách hàng.
              </li>
              <li>
                <span>Đầy đủ các dòng xe: </span>Quy tụ đầy đủ các dòng xe đang
                thịnh hành mang thương hiệu Peugeot như Peugeot 2008, Peugeot
                3008, Peugeot 5008, Peugeot 408, Peugeot Django 125 và dòng MPV
                Peugeot Traveller. Quý khách hàng sẽ được tư vấn trải nghiệm
                thực tế các dòng xe đang được Peugeot phân phối chính hãng tại
                Việt Nam.
              </li>
              <li>
                <span>Hết lòng vì khách hàng: </span>
                Không chỉ có những sản phẩm tối ưu với thiết kế độc đáo,
                showroom Peugeot Thủ Đức còn có đội ngũ bán hàng chuyên nghiệp,
                có kiến thức sâu rộng và thái độ phục vụ ân cần, chu đáo, giúp
                khách hàng chọn được mẫu xe ưng ý nhất.
              </li>
            </ul>
          </div>

          <div className="introduce-section-img">
            <NextImage
              src="/images/gioi-thieu/phong-kinh-doanh-peugeot-binh-trieu.jpg"
              alt="Peugeot Thủ Đức"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
