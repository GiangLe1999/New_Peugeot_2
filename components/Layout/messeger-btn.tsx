/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";

interface Props {}

const MessengerBtn: FC<Props> = (props): JSX.Element => {
  return (
    <div className="fixed bottom-3 right-4 flex flex-col gap-2 z-50">
      <a
        href="https://m.me/110601635163071"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Messenger contact button"
      >
        <img
          className="w-16 h-16"
          src="/images/home/messenger.png"
          alt="Messenger icon"
          aria-label="Messenger button"
        />
      </a>
    </div>
  );
};

export default MessengerBtn;
