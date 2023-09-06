import FirstBanner from "@/components/FirstBanner";
import TestDriveForm from "@/components/testDrivePage/TestDriveForm";
import { getAllCarsLinesData } from "@/lib/fetchData";
import { CarLineType } from "@/types";
import { NextPage } from "next";

type DataType = {
  name: string;
  carLines: CarLineType[];
};

interface Props {}

const page: NextPage<Props> = async () => {
  const carLines = (await getAllCarsLinesData()) as DataType[];

  return (
    <div>
      <FirstBanner
        heading="ĐĂNG KÝ LÁI THỬ"
        subHeading="Đăng ký và đặt lịch lái thử dòng xe bạn mong muốn tại đại lý gần nhất."
        bgImg="/images/test-drive/first-banner.jpg"
      />

      <div className="container my-12">
        <TestDriveForm carLines={carLines} />
      </div>
    </div>
  );
};

export default page;
