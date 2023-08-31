"use client";

import { FC } from "react";
import { MDXRemoteSerializeResult, MDXRemote } from "next-mdx-remote";
import Image from "next/image";

interface Props {
  content: MDXRemoteSerializeResult;
}

const components = { Image };

const ContentSection: FC<Props> = ({ content }): JSX.Element => {
  return (
    <div className="prose postContent overflow-hidden">
      <MDXRemote {...content} components={components} />
    </div>
  );
};

export default ContentSection;
