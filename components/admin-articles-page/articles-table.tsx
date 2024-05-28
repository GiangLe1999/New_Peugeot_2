"use client";

import { FC, useState } from "react";
import { MdEditSquare } from "react-icons/md";
import { BiPlusCircle } from "react-icons/bi";
import CustomModal from "../custom-modal";
import { AiFillDelete } from "react-icons/ai";
import { ArticleEntity } from "@/entities/article.entity";
import { linkConstants } from "@/data/constants";
import DeleteArticleForm from "./delete-article-form";
import { useRouter } from "next/navigation";
import { articleCategory } from "@/model/Article";
import AdminBtnWithIcon from "../admin-btn-with-icon";
import { formatShortDate } from "@/lib/formatData";

interface Props {
  articles: ArticleEntity[] | undefined;
}

const ArticlesTable: FC<Props> = ({ articles }): JSX.Element => {
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [deletedArticle, setDeletedArticle] = useState<ArticleEntity>();
  const router = useRouter();
  const category = articles?.[0]?.category;
  const categorySlug =
    category === articleCategory.uudai
      ? linkConstants.uudai
      : category === articleCategory.sukien
      ? linkConstants.sukien
      : linkConstants.thongtinxe;

  return (
    <>
      <div className="admin-card-body">
        <div className="text-right">
          <AdminBtnWithIcon
            content="Thêm bài viết"
            icon={BiPlusCircle}
            iconSize={18}
            to={linkConstants.create_article}
            customClasses="block ml-auto w-fit"
          />
        </div>

        <table className="w-full admin-table mt-4">
          <thead>
            <tr>
              <th>Tiêu đề</th>
              <th>Đường dẫn</th>
              <th>Lượt xem</th>
              <th>Ngày sửa</th>
              <th>Sửa / Xóa</th>
              <th>Demo</th>
            </tr>
          </thead>

          <tbody>
            {articles?.map((article) => (
              <tr key={article?.name}>
                <td className="text-center max-w-[300px]">{article?.name}</td>
                <td className="text-center max-w-[300px]">{article?.slug}</td>
                <td className="text-center">{article?.views}</td>
                <td className="text-center">
                  {formatShortDate(article?.updatedAt)}
                </td>
                <td className="flex items-center justify-center gap-4">
                  <MdEditSquare
                    className="mt-1 cursor-pointer text-blue-900"
                    size={18}
                    onClick={() => {
                      const url = `${linkConstants.edit_article}?slug=${article.slug}`;
                      router.push(url);
                      router.refresh();
                    }}
                  />
                  <AiFillDelete
                    className="mt-1 cursor-pointer text-red-700"
                    size={18}
                    onClick={() => {
                      setShowDeleteForm(true);
                      setDeletedArticle(article);
                    }}
                  />
                </td>
                <td className="text-center">
                  <a
                    href={`${categorySlug}/${article.slug}`}
                    target="_blank"
                    className="underline text-sm font-bold text-blue-600"
                  >
                    Xem
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CustomModal
        heading="Cảnh báo"
        onClose={() => setShowDeleteForm(false)}
        open={showDeleteForm}
      >
        <DeleteArticleForm
          setShowDeleteForm={setShowDeleteForm}
          deletedArticle={deletedArticle as ArticleEntity}
        />
      </CustomModal>
    </>
  );
};

export default ArticlesTable;
