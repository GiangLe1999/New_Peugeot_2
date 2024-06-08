"use client";

import { FC } from "react";
import { BsHeadset, BsFillEnvelopeCheckFill } from "react-icons/bs";
import Link from "next/link";
import NextImage from "../NextImage";
import { linkConstants } from "@/data/constants";
import { FaFacebookF } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

interface Props {}

const common =
  "relative w-10 h-10 rounded-full grid place-items-center group relative";
const tooltipCommon =
  "absolute left-0 top-1 px-2 py-1 min-w-[80px] text-center rounded-r-md invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:left-[76%] transition-fadeIn text-white z-20";

const ContactBtns: FC<Props> = (props): JSX.Element => {
  return (
    <div className="fixed bottom-3 left-4 flex flex-col gap-2 z-50">
      <div className={`${common} bg-[#4267f4]`}>
        <a
          href="https://zalo.me/0333122512"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-[42px] h-[42px] z-50 grid place-items-center group"
        >
          <NextImage
            src="/images/home/zalo-icon.jpg"
            alt="Zalo icon"
            className="animate-wiggle"
          />
          <span className={`${tooltipCommon} bg-[#4267f4]`}>LH Zalo</span>
        </a>
      </div>

      <a
        href="mailto:hualong02072000@gmail.com"
        className={`${common} bg-[#714497]`}
      >
        <IoIosMail color="white" size={22} className="animate-wiggle" />
        <span className={`${tooltipCommon} bg-[#714497]`}>
          hualong02072000@gmail.com
        </span>
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=100086421081221&locale=vi_VN"
        target="_blank"
        rel="noopener noreferrer"
        className={`${common} bg-[#395693]`}
      >
        <FaFacebookF color="white" size={20} className="animate-wiggle z-30" />
        <span className={`${tooltipCommon} bg-[#395693]`}>Facebook</span>
      </a>

      <a href="tel:0333122512" className={`${common} bg-red-700`}>
        <BsHeadset color="white" size={22} className="animate-wiggle z-30" />
        <span className={`${tooltipCommon} bg-red-700`}>0333122512</span>
      </a>

      <Link
        href={linkConstants.quote}
        className={`${common} bg-pink-700 cursor-pointer`}
      >
        <BsFillEnvelopeCheckFill
          color="white"
          size={19}
          className="animate-wiggle"
        />
        <span className={`${tooltipCommon} bg-pink-700`}>Báo giá</span>
      </Link>
    </div>
  );
};

export default ContactBtns;
