import {
  footerCol1,
  footerCol2,
  footerCol3,
  footerCol32,
  footerCol4,
} from "@/data";
import { FC } from "react";
import NextImage from "../NextImage";
import Link from "next/link";
import FooterForm from "./FooterForm";

interface Props {}

const Footer: FC<Props> = (): JSX.Element => {
  return (
    <footer className="bg-secondary border-t">
      <div className="container flex flex-wrap gap-1 py-10">
        {/* Column1 */}
        <div className="w-1/3 pr-3">
          {/* General info */}
          <p className="footer-title">CÔNG TY TNHH PHÂN PHỐI THACO AUTO</p>
          <ul>
            {footerCol1.map((item, index) => (
              <li className="footer-item hover:font-normal" key={index}>
                {item}
              </li>
            ))}
          </ul>

          {/* Social */}
          <p className="footer-title mt-12">Liên hệ với chúng tôi</p>
          <ul>
            {footerCol4.map((item, index) => (
              <li key={index} className="footer-item">
                <a href={item.link} className="flex items-center gap-1">
                  {item.icon({ size: 14 })} {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex item-center gap-2 mt-3">
            <Link href="" target="_blank" rel="noopener noreferrer">
              <div className="footer-icon">
                <NextImage
                  src="/images/home/facebook.jpg"
                  alt="Mazda Facebook"
                />
              </div>
            </Link>

            <Link href="" target="_blank" rel="noopener noreferrer">
              <div className="footer-icon">
                <NextImage src="/images/home/youtube.png" alt="Mazda Youtube" />
              </div>
            </Link>

            <Link href="" target="_blank" rel="noopener noreferrer">
              <div className="footer-icon">
                <NextImage
                  src="/images/home/instagram.png"
                  alt="Mazda Instagram"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Column2 */}
        <div className="w-[18%] px-3">
          <p className="footer-title">Sản phẩm</p>
          <ul>
            {footerCol2.map((car, index) => (
              <li key={index} className="footer-item">
                <Link href={car.link}>{car.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column3 */}
        <div className="w-[20%] px-3">
          <p className="footer-title">Dịch vụ</p>
          <ul>
            {footerCol3.map((item, index) => (
              <li key={index} className="footer-item">
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>

          <p className="footer-title mt-20">Chính sách</p>
          <ul>
            {footerCol32.map((item, index) => (
              <li key={index} className="footer-item">
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div className="flex-1 pl-3">
          <p className="footer-title">Tư vấn nhanh</p>
          <FooterForm />
        </div>
      </div>

      <div className="border-t border-[#999999] py-1">
        <div className="container text-[#999999] text-xs flex items-center justify-between">
          <span className="uppercase my-2 text-center">
            © 2023 Mazda Việt Nam - All rights reserved
          </span>

          <span>
            Được thiết kế & bảo trì bởi&nbsp;
            <a
              href="https://github.com/GiangLe1999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              Giang Le
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
