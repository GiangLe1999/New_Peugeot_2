import FirstBanner from "@/components/FirstBanner";
import NewsCard from "@/components/newsPage/NewsCard";
import { getAllNewsPostsData } from "@/lib/fetchData";
import { NextPage } from "next";
import { frontType } from "./[postSlug]/page";

interface Props {}

const page: NextPage<Props> = async () => {
  const data = (await getAllNewsPostsData()) as frontType[];

  return (
    <div>
      <FirstBanner
        heading="TIN TỨC & ƯU ĐÃI"
        subHeading="Thông tin mới nhất về các dòng xe của Mazda"
        bgImg="/images/tin-tuc/first-banner.jpg"
      />

      <div className="container my-16">
        <div className="grid grid-cols-3 gap-4">
          {data.map((item, index) => (
            <NewsCard item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
