import FirstBanner from "@/components/FirstBanner";
import { NextPage } from "next";
import FilterList from "@/components/newsPage/FilterList";

interface Props {}

const AllNewsPage: NextPage<Props> = () => {
  return (
    <div>
      <FirstBanner
        heading="TIN TỨC & ƯU ĐÃI"
        subHeading="Thông tin mới nhất về các dòng xe của Mazda"
        bgImg="/images/bao-gia/first-banner.jpg"
        bgClasses="!bg-cover"
      />

      <div className="container mx-auto px-8 xl:px-0 pt-7">
        <FilterList />
      </div>
    </div>
  );
};

export default AllNewsPage;
