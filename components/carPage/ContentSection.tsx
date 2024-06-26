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
        const width = Number(domNode.attribs.width);
        const height = Number(domNode.attribs.height);
        const aspectRatio = width / height;

        return (
          <div className="w-full relative" style={{ aspectRatio }}>
            <NextImage src={domNode.attribs.src} alt={domNode.attribs.alt} />
          </div>
        );
      }
    },
  };

  return (
    <div id="car-content" className="prose postContent overflow-hidden">
      {parse(content || "", options)}
    </div>
  );
};

export default ContentSection;
