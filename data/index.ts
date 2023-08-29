import { StaticImageData } from "next/image";

import {
  FaEnvelopeOpenText,
  FaCalculator,
  FaCarAlt,
  FaChartPie,
  FaUsersCog,
} from "react-icons/fa";
import { HiReceiptTax } from "react-icons/hi";
import { BsChatHeartFill, BsTagsFill, BsFillGiftFill } from "react-icons/bs";
import { SiAdguard } from "react-icons/si";

import { IconType } from "react-icons";

import {
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8,
} from "@/public/images/home";

export const navItems: { title: string; link: string }[] = [
  {
    title: "trang chủ",
    link: "",
  },
  {
    title: "giới thiệu",
    link: "gioi-thieu",
  },
  {
    title: "bảng giá xe",
    link: "bang-gia-xe",
  },
  {
    title: "xe mazda",
    link: "bang-gia-xe",
  },
  {
    title: "mua xe",
    link: "#",
  },
  {
    title: "tin tức",
    link: "tin-tuc",
  },
  {
    title: "liên hệ",
    link: "lien-he",
  },
];

export const homeBanners: StaticImageData[] = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
  banner8,
];

type homeOptionType = {
  title: string;
  link: string;
  icon: IconType;
};

export const homeOptions: homeOptionType[] = [
  { title: "yêu cầu báo giá", link: "#baogia", icon: FaEnvelopeOpenText },
  {
    title: "tính phí lăn bánh",
    link: "/tinh-phi-lan-banh",
    icon: FaCalculator,
  },
  {
    title: "mua xe trả góp",
    link: "/thu-tuc-tra-gop",
    icon: FaChartPie,
  },
  {
    title: "đăng ký lái thử",
    link: "/dang-ky-lai-thu",
    icon: FaCarAlt,
  },
];

type promotionItemType = {
  icon: IconType;
  title: string;
  subtitle: string;
  desc: string;
};

export const promotionItems: promotionItemType[] = [
  {
    icon: HiReceiptTax,
    title: "ƯU ĐÃI ĐẾN 100% PHÍ TRƯỚC BẠ",
    subtitle:
      "Mazda Việt Nam triển khai chương trình đặc biệt với gói hỗ trợ tương đương 100% lệ phí trước bạ cho khách hàng mua Mazda2, Mazda3, Mazda CX-5 cùng nhiều ưu đãi lớn dành cho các phiên bản Mazda khác.",
    desc: "Mức hỗ trợ cao nhất của Mazda sẽ nằm ở các mẫu SUV cao cấp như <b>Mazda CX-8</b>, <b>Mazda CX-5</b> và <b>Mazda 6</b>. Theo đó, mẫu xe 5 chỗ thực thụ đến từ thương hiệu Nhật Bản, Mazda 6 được hỗ trợ cao nhất đến <b class='text-primary'>110 triệu đồng</b> cho bản <b>Signature</b>. Mức giá <b>Mazda 6</b> sau khi giảm chỉ còn <b class='text-primary'>849 triệu đồng</b>, cùng ưu đãi vay mua xe hấp dẫn, khách hàng chỉ cần trả trước từ <b>200 triệu đồng.</b>",
  },
  {
    icon: FaUsersCog,
    title: "TƯ VẤN TRỰC TUYẾN – LÁI THỬ TẠI NHÀ",
    subtitle:
      "Quý khách hàng sẽ được tư vấn đầy đủ các thông tin về giá bán, phiên bản và tính năng của từng sản phẩm Mazda thế hệ mới phù hợp với nhu cầu sử dụng thực tế.",
    desc: "Song song với các chương trình ưu đãi hấp dẫn, Mazda vẫn đảm bảo thực hiện nhiều biện pháp phòng, chống dịch và đặt sự an toàn của khách hàng lên hàng đầu với chương trình <b class='text-primary'>“Tư vấn trực tuyến – Lái thử tại nhà”</b>. Thông qua các ứng dụng trực tuyến trên <b>Facebook, Zalo</b> … Quý khách hàng sẽ được tư vấn đầy đủ các thông tin về giá bán, phiên bản và tính năng của từng sản phẩm Mazda thế hệ mới phù hợp với nhu cầu sử dụng thực tế.",
  },
];

export const reasonsToBuy: { icon: IconType; title: string; desc: string }[] = [
  {
    icon: BsTagsFill,
    title: "GIÁ CẢ ƯU ĐÃI - GIAO XE SỚM",
    desc: "Mazda Sài Gòn luôn cam kết mang lại mức giá ưu đãi nhất cho quý khách với thời gian giao xe nhanh nhất trong 1 ngày.",
  },
  {
    icon: SiAdguard,
    title: "BẢO HÀNH THEO TIÊU CHUẨN TOÀN QUỐC",
    desc: "Anh chị sẽ yên tâm khi mua xe tại Mazda Phú Mỹ Hưng, vì chúng tôi luôn bảo hành, bảo dưỡng và sửa chữa theo tiêu chuẩn chất lượng của Mazda trên toàn quốc. BẢO HÀNH ĐẾN 5 NĂM.",
  },
  {
    icon: BsFillGiftFill,
    title: "KHUYẾN MÃI NHIỀU NHẤT",
    desc: "Với hoạt động bán hàng sôi nổi, chúng tôi luôn cập nhật sớm nhất các chương trình khuyến mãi của hãng và đại lý",
  },
  {
    icon: BsChatHeartFill,
    title: "TƯ VẤN TẬN TÌNH",
    desc: "Đội ngũ tư vấn luôn sẵn lòng giúp Anh chị tìm được chiếc xe ưng ý.",
  },
];
