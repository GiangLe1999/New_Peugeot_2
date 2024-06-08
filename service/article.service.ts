import {
  GetAllArticlesOutput,
  GetAllArticlesWithPagesOutput,
} from "@/dtos/article/get-all-articles.dto";
import { GetArticleBySlugOutput } from "@/dtos/article/get-article-by-slug.dto";
import axiosInstance from "@/lib/axios";

export const getAllArticlesForAdmin = async () => {
  try {
    const { data }: { data: GetAllArticlesOutput } = await axiosInstance(
      "/api/articles"
    );

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllArticlesForUsers = async ({
  selectedCate,
  currentPage,
}: {
  selectedCate: string;
  currentPage: number;
}) => {
  try {
    const { data }: { data: GetAllArticlesOutput } = await axiosInstance(
      `/api/articles/filter-by-category?cate=${selectedCate}&page=${currentPage}`
    );

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getArticlesByKeyword = async (keyword: string) => {
  try {
    const { data } = await axiosInstance(
      `/api/articles/search-by-keyword?keyword=${keyword}`
    );

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getArticleBySlug = async (slug: string) => {
  try {
    const { data }: { data: GetArticleBySlugOutput } = await axiosInstance(
      "/api/article",
      { params: { slug } }
    );

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getArticleBySlugForAdmin = async (slug: string) => {
  try {
    const { data }: { data: GetArticleBySlugOutput } = await axiosInstance(
      "/api/article/for-admin",
      { params: { slug } }
    );

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getArticleBySlugForUser = async (slug: string) => {
  try {
    const { data }: { data: GetArticleBySlugOutput } = await axiosInstance(
      `/api/article/for-user?slug=${slug}`
    );

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getArticlesByCategory = async ({
  cateName,
  currentPage,
}: {
  cateName: string;
  currentPage: number;
}) => {
  try {
    const { data }: { data: GetAllArticlesWithPagesOutput } =
      await axiosInstance("/api/articles/by-category", {
        params: { category: cateName, page: currentPage },
      });

    return data.data;
  } catch (error) {}
};

export const getRelatedArticles = async ({
  cateName,
  postSlug,
}: {
  cateName: string;
  postSlug: string;
}) => {
  try {
    const { data }: { data: GetAllArticlesOutput } = await axiosInstance(
      "/api/articles/related",
      { params: { category: cateName, slug: postSlug } }
    );

    return data.data;
  } catch (error) {}
};
