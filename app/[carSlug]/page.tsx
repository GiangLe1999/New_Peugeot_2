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

export const generateMetadata = async ({
  params,
}: {
  params: { carSlug: string };
}) => {
  try {
    const carData = await getCarData(params.carSlug);

    return {
      title: carData?.name.toUpperCase(),
      description: `${carData?.name.toUpperCase()} có giá từ ${
        carData?.priceFrom
      } VNĐ. Xem thêm thông số kỹ thuật, và chương trình ưu đãi đặc biệt của ${carData?.name.toUpperCase()}.`,
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
  const car = (await getCarData(params.carSlug)) as CarType;

  const mdContent = (await getCarPostData(params.carSlug)) as {
    content: string;
    data: { promotion: string };
  } as any;

  const promotionContent = mdContent.data.promotion as any;

  const serializedContent = (await serialize(
    mdContent.content
  )) as MDXRemoteSerializeResult;

  return (
    <div className="py-10">
      <div className="container">
        <div className="flex gap-10 max-[1100px]:gap-0">
          <div className="flex-1 space-y-14">
            <div className="grid grid-cols-2 gap-8 max-[725px]:grid-cols-1">
              <div className="grid place-items-center">
                <CarImageGallery
                  colors={car.colors}
                  price={car.priceFromText}
                />
              </div>
              <CarPromotionSection content={promotionContent} name={car.name} />
            </div>

            <CarPriceSection
              name={car.name}
              lines={car.carLines}
              registration={car.registration}
            />

            <ContentSection content={serializedContent} />
          </div>

          <SalerCard />
        </div>
      </div>
    </div>
  );
};

export default page;
