"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { FC } from "react";
import Image from "next/image";

interface Props {
  content: MDXRemoteSerializeResult;
}

const components = { Image };

const NewsContent: FC<Props> = ({ content }): JSX.Element => {
  return (
    <div className="prose postContent overflow-hidden">
      <MDXRemote {...content} components={components} />
    </div>
  );
};

export default NewsContent;
