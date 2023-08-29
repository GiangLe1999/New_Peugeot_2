import { FC } from "react";
import SectionTitle from "./SectionTitle";

interface Props {}

const PostsSection: FC<Props> = (props): JSX.Element => {
  return (
    <section className="py-10 container">
      <SectionTitle title="Tin Tức & Sự Kiện" />
    </section>
  );
};

export default PostsSection;
