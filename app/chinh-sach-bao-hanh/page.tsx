import FirstBanner from "@/components/FirstBanner";
import StyledAccordion from "@/components/StyledAccordion";
import { warrantyData } from "@/data/warranty";
import { NextPage } from "next";

interface Props {}

const page: NextPage<Props> = () => {
  return (
    <div>
      <FirstBanner
        heading="CHÍNH SÁCH BẢO HÀNH"
        subHeading="Tất cả các xe Mazda mua mới đều sẽ có chế độ bảo hành trong khoản thời gian nhất định bên cạnh các dịch vụ sửa chửa xe khi cần thiết. Thông tin chi tiết về chế độ bảo hành được hiển thị bên dưới."
        bgImg="/images/chinh-sach-bao-hanh/first-banner.jpg"
        bgClasses="!bg-cover"
      />

      <div className="container my-12">
        <h2 className="text-center font-bold text-primary text-3xl pb-8">
          CHI TIẾT CHÍNH SÁCH BẢO HÀNH XE MỚI
        </h2>
        <StyledAccordion data={warrantyData} initialOpened={1} />
      </div>
    </div>
  );
};

export default page;
