import FirstBanner from "@/components/FirstBanner";
import CarPriceSection from "@/components/carPage/CarPriceSection";
import { carNames } from "@/data";
import { NextPage } from "next";
import { ImUserTie } from "react-icons/im";
import { SiAddthis, SiGoogleoptimize } from "react-icons/si";

export const generateMetadata = () => {
  return {
    title: "Thủ tục trả góp",
    description:
      "Tìm hiểu thông tin về thủ tục trả góp đối với sản phẩm xe Mazda một cách chính xác nhất tại Mazda Sài Gòn.",
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/thu-tuc-tra-gop`,
  };
};

interface Props {}

const page: NextPage<Props> = async () => {
  return (
    <div>
      <FirstBanner
        heading="THỦ TỤC TRẢ GÓP"
        subHeading="Bảng tính chỉ mang tính chất tham khảo. Quý khách vui lòng liên hệ Showroom/Đại Lý gần nhất để có Báo Giá chính xác nhất."
        bgImg="/images/thu-tuc-tra-gop/first-banner.jpg"
        bgClasses="!bg-cover"
      />

      <div className="container py-12 space-y-12">
        <div>
          <h2 className="post-heading-2">
            <span>Thủ tục trả góp đối với doanh nghiệp & cá nhân</span>
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="installment-block">
              <h3>I. ĐỐI VỚI CÁ NHÂN</h3>
              <ol>
                <li>Chứng Minh Nhân Dân và Hộ khẩu.</li>
                <li>
                  Giấy chứng nhận độc thân hoặc Giấy chứng nhận đăng ký kết hôn.
                </li>
                <li>
                  Những giấy tờ chứng minh thu nhập:
                  <ul>
                    <li>
                      Giấy xác nhận mức lương và hợp đồng lao động, sổ tiết
                      kiệm, tài khoản cá nhân. <br />
                      Hợp đồng cho thuê nhà, cho thuê xe, cho thuê xưởng, giấy
                      góp vốn, cổ phần, cổ phiếu, trái phiếu.
                    </li>
                    <li>
                      Giấy tờ xác nhận sở hữu tài sản có giá trị: bất động sản,
                      các loại xe ô tô, máy móc, dây chuyền nhà máy, nhà xưởng…
                    </li>
                    <li>
                      Nếu cá nhân có công ty riêng mà thu nhập chủ yếu từ công
                      ty thì cần thêm: giấy phép kinh doanh, báo cáo thuế, báo
                      cáo tài chính, bảng lương, bảng chia lợi nhuận từ công ty.
                    </li>
                  </ul>
                </li>
              </ol>
              <span>
                (Trong trường hợp cá nhân không đủ điều kiện vay Ngân hàng, có
                thể nhờ người thân có khả năng và thu nhập tốt làm giấy bảo lãnh
                cho Ngân hàng thẩm định).
              </span>
            </div>

            <div className="installment-block">
              <h3>II. ĐỐI VỚI DOANH NGHIỆP</h3>
              <ol>
                <li>Giấy phép kinh doanh.</li>
                <li>Mã số thuế.</li>
                <li>Giấy bổ nhiệm Giám đốc, bổ nhiệm Kế toán trưởng.</li>
                <li>Giấy đăng ký sử dụng mẫu dấu.</li>
                <li>Báo cáo thuế một năm (hoặc 6 tháng) gần nhất.</li>
                <li>Báo cáo hóa đơn VAT một năm (hoặc 6 tháng) gần nhất.</li>
                <li>Báo cáo tài chính một năm (hoặc 6 tháng) gần nhất.</li>
                <li>Hợp đồng kinh tế đầu ra, đầu vào.</li>
              </ol>
            </div>
          </div>
        </div>

        <div>
          <h2 className="post-heading-2">
            <span>3 điểm cần lưu ý</span>
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="installment-block-sm">
              <p>
                <SiGoogleoptimize size={30} color="#0298da" />
              </p>
              <h3>Lợi ích khi mua xe trả góp</h3>
              <ol>
                <li>Số tiền vay lên đến 95% giá trị xe.</li>
                <li>Thời gian vay lên đến 7 năm.</li>
                <li>Tài trợ vay mua xe ô tô mới và xe ô tô đã qua sử dụng.</li>
                <li>
                  Thủ tục vay đơn giản, thời gian xử lý hồ sơ nhanh chóng.
                </li>
                <li>
                  Phương thức trả nợ linh hoạt: lãi trả hàng tháng/hàng quý, vốn
                  trả theo phương thức vốn góp đều hoặc vốn góp bậc thang giảm
                  dần.
                </li>
              </ol>
            </div>

            <div className="installment-block-sm">
              <p>
                <SiAddthis size={30} color="#0298da" />
              </p>
              <h3>Điều kiện mua xe trả góp</h3>
              <ol>
                <li>Cá nhân từ 18 tuổi trở lên.</li>
                <li>Doanh nghiệp thành lập trên 6 tháng.</li>
                <li>Có hợp đồng mua bán xe và các giấy tờ có liên quan.</li>
                <li>Có thu nhập đảm bảo cho việc trả nợ cho Ngân hàng.</li>
                <li>
                  Có tài sản đảm bảo: là chính chiếc xe ô tô mà Quý khách mua,
                  bất động sản hoặc tài sản khác.
                </li>
              </ol>
            </div>

            <div className="installment-block-sm">
              <p>
                <ImUserTie size={30} color="#0298da" />
              </p>
              <h3>Đối tượng thích hợp nhất</h3>
              <ol>
                <li>
                  Doanh nhân, doanh nghiệp: những người có khả năng sử dụng tiền
                  để kinh doanh sinh lời nhiều hơn là tỷ lệ lãi suất tiền cho
                  vay của ngân hàng.
                </li>
                <li>
                  Những người rất cần sử dụng xe, sẽ có đủ tiền mua xe trong một
                  tương lai gần nhưng hiện tại chưa tập trung đủ tiền để mua xe
                  trả thẳng.
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div>
          <h2 className="post-heading-2">
            <span>BẢNG TÍNH LÃI VAY MUA XE TRẢ GÓP</span>
          </h2>
          <CarPriceSection
            name={"new mazda 2"}
            carNameArr={carNames}
            isInstallmentPage
          />
        </div>

        <div>
          <h2 className="post-heading-2">
            <span>MINH HỌA CÁCH TÍNH</span>
          </h2>
          <div className="space-y-4">
            <p>
              Trả góp hiểu đơn giản là trả trước một phần tiền mua xe, phần còn
              thiếu sẽ vay ngân hàng rồi hàng tháng trả dần cho ngân hàng cả gốc
              và lãi theo phuơng thức trừ lùi trong suốt thời gian trả góp. Ví
              dụ:
            </p>
            <table className="price-table w-full">
              <tr>
                <td>
                  <strong>Tên xe</strong>
                </td>
                <td>
                  <strong>Mazda 3 Sport 1.5L Luxury 2022</strong>
                </td>
              </tr>
              <tr>
                <td>Giá xe</td>
                <td>739.000.000₫</td>
              </tr>
              <tr>
                <td>Giá lăn bánh tại TP. HCM</td>
                <td>835.330.000₫</td>
              </tr>
              <tr>
                <td>Giá lăn bánh tại Hà Nội</td>
                <td>850.110.000₫</td>
              </tr>
              <tr>
                <td>Giá lăn bánh tại các tỉnh khác</td>
                <td>816.330.000₫</td>
              </tr>
              <tr>
                <td>Thanh toán trước từ 20%</td>
                <td>170.022.000₫</td>
              </tr>
              <tr>
                <td>Số tiền còn lại</td>
                <td>680.088.000₫</td>
              </tr>
              <tr>
                <td>Số tiền trả mỗi tháng (7 năm)</td>
                <td>8.096.286₫</td>
              </tr>
            </table>
            <p>
              Hỗ trợ tư vẫn mua xe Mazda trả góp tới 95% giá trị xe, thời gian
              vay tối đa 7 năm. Thủ tục đơn giản nhanh gọn, thời gian thẩm duyệt
              trong vòng 24h, kể cả khách hàng ở tỉnh, bao đậu hồ sơ khó. Vui
              lòng liên hệ để được tư vấn chính xác.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
