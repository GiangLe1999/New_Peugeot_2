"use client";

import { FC } from "react";
import parse, { Element, HTMLReactParserOptions } from "html-react-parser";
import NextImage from "../NextImage";

interface Props {
  content: string;
}

const ContentSection: FC<Props> = ({ content }): JSX.Element => {
  const options: HTMLReactParserOptions = {
    replace(domNode) {
      if (domNode instanceof Element && domNode.name === "img") {
        return (
          <div className="w-full aspect-[3/2] relative">
            <NextImage src={domNode.attribs.src} alt={domNode.attribs.alt} />
          </div>
        );
      }
    },
  };

  return (
    <div className="prose postContent overflow-hidden">
      {parse(content || "", options)}
    </div>
  );
};

export default ContentSection;
