"use client";

import { FC } from "react";
import { MDXRemoteSerializeResult, MDXRemote } from "next-mdx-remote";

interface Props {
  content: MDXRemoteSerializeResult;
}

const ContentSection: FC<Props> = ({ content }): JSX.Element => {
  return (
    <div className="prose">
      <MDXRemote {...content} />
    </div>
  );
};

export default ContentSection;
