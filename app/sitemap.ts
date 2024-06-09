import { linkConstants } from "@/data/constants";
import dbConnect from "@/lib/db";
import Article from "@/model/Article";
import Car from "@/model/Car2";
import { MetadataRoute } from "next";
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL as string;

  dbConnect();
  const cars = await Car.find().select("slug updatedAt");

  const carLinks = cars?.map((car) => ({
    url: `${baseURL}/${car.slug}`,
    lastModified: new Date(car.updatedAt),
  }));

  const articles = await Article.find().select("slug updatedAt");

  const articleLinks = articles.map((article: any) => ({
    url: `${baseURL}/tin-tuc/${article.slug}`,
    lastModified: new Date(article.date),
  }));

  return [
    {
      url: baseURL,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.introduce}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.quote}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.news}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.contact}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.testDrive}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.warranty}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.installment}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.requireQuotation}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.finalPrice}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.deliveryPolicy}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.paymentPolicy}`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}${linkConstants.privacyPolicy}`,
      lastModified: new Date(),
    },
    ...carLinks,
    ...articleLinks,
  ];
}
