import { getCarData, getCarPostData } from "@/lib/fetchData";
import { NextPage } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import ContentSection from "@/components/carPage/ContentSection";
import CarPromotionSection from "@/components/carPage/CarPromotionSection";
import SalerCard from "@/components/carPage/SalerCard";
import CarImageGallery from "@/components/carPage/CarImageGallery";
import { CarType } from "@/types";
import CarPriceSection from "@/components/carPage/CarPriceSection";
import { getCarBySlug } from "@/service/car.service";
import { CarEntity } from "@/entities/car.entity";
import { ICarColor } from "@/model/Car2";

// export async function generateStaticParams() {
//   const viProjects = await getViProjectsSlugVsId();
//   const enProjects = await getEnProjectsSlugVsId();

//   const viProjectsSlug = viProjects.map((project: VI_Project) => ({
//     locale: "vi",
//     projectSlug: project.vi_slug,
//   }));
//   const enProjectsSlug = enProjects.map((project: EN_Project) => ({
//     locale: "en",
//     projectSlug: project.en_slug,
//   }));

//   return [...viProjectsSlug, ...enProjectsSlug];
// }

export const generateMetadata = async ({
  params,
}: {
  params: { carSlug: string };
}) => {
  try {
    const carData = (await getCarBySlug(params.carSlug)) as CarEntity;

    return {
      title: carData?.name,
      description: `${carData?.name} có giá từ ${carData?.priceFrom} VNĐ. Xem thêm thông số kỹ thuật, và chương trình ưu đãi đặc biệt của ${carData?.name}.`,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/${params.carSlug}`,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

interface Props {
  params: { carSlug: string };
}

const page: NextPage<Props> = async ({ params }) => {
  const car = (await getCarBySlug(params.carSlug)) as CarEntity;

  return (
    <div className="py-10">
      <div className="container">
        <div className="flex gap-10 max-[1100px]:gap-0">
          <div className="flex-1 space-y-14">
            <div className="grid grid-cols-2 gap-8 max-[725px]:grid-cols-1">
              <div className="grid place-items-center">
                <CarImageGallery
                  colors={car?.colors as ICarColor[]}
                  price={car.priceFrom}
                />
              </div>
              <CarPromotionSection
                content={car.saleContent}
                name={car.name}
              />
            </div>

            <CarPriceSection
              name={car.name}
              lines={car.carLines}
              registration={car.registration}
            />

            <ContentSection content={car.content} />
          </div>

          <SalerCard />
        </div>
      </div>
    </div>
  );
};

export default page;
