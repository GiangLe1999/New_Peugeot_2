import { StaticImageData } from "next/image";

import {
  FaEnvelopeOpenText,
  FaCalculator,
  FaCarAlt,
  FaChartPie,
  FaFlag,
  FaThumbsUp,
  FaShieldAlt,
  FaHeartbeat,
  FaHome,
  FaInfoCircle,
  FaBlog,
  FaCar,
} from "react-icons/fa";

import { BiSolidContact } from "react-icons/bi";

import { BsChatHeartFill, BsTagsFill, BsFillGiftFill } from "react-icons/bs";
import { SiAdguard } from "react-icons/si";
import { MdMail, MdPhone } from "react-icons/md";

import { IconType } from "react-icons";

import {
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
} from "@/public/images/home";
import { linkConstants } from "./constants";

export const navItems: {
  title: string;
  link: string;
  isParent?: boolean;
  icon?: IconType;
}[] = [
  {
    title: "trang chủ",
    link: linkConstants.home,
    icon: FaHome,
  },
  {
    title: "giới thiệu",
    link: linkConstants.introduce,
    icon: FaInfoCircle,
  },
  {
    title: "giá xe peugeot",
    link: linkConstants.quote,
    isParent: true,
  },
  {
    title: "mua xe",
    link: "/#",
    isParent: true,
  },
  {
    title: "dịch vụ",
    link: "/#",
    isParent: true,
  },
  {
    title: "tin tức",
    link: linkConstants.news,
    icon: FaBlog,
  },
  {
    title: "liên hệ",
    link: linkConstants.contact,
    icon: BiSolidContact,
  },
];

export const adminNavItems: {
  title: string;
  link: string;
  icon?: IconType;
}[] = [
  {
    title: "Dashboard",
    link: linkConstants.dashboard,
    icon: FaHome,
  },
  {
    title: "List xe",
    link: linkConstants.admin_cars,
    icon: FaCar,
  },
  {
    title: "Profile",
    link: linkConstants.profile,
    icon: FaInfoCircle,
  },
  {
    title: "Bài viết",
    link: linkConstants.admin_articles,
    icon: FaBlog,
  },
];

type navCarItemType = {
  img: string;
  name: string;
  price: string;
  link: string;
};

export const navCarMenu: navCarItemType[] = [
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1718243277/Mazda%20Car/zwkmwqrwnk2br6irrkjr.avif",
    name: "New Peugeot 408",
    price: "1019",
    link: "peugeot-408",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1718247260/Mazda%20Car/cmy0elvrpqotfnhbjk92.avif",
    name: "New Peugeot 2008",
    price: "719",
    link: "peugeot-2008",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1718251777/Mazda%20Car/mt0pt8ucljgsxv80ig24.avif",
    name: "New Peugeot 3008",
    price: "929",
    link: "peugeot-3008",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1718254885/Mazda%20Car/iq7q7qx4hftwgvjy8ah2.avif",
    name: "New Peugeot 5008",
    price: "1109",
    link: "peugeot-3008",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1718272084/Mazda%20Car/szf9fyhkg14pq2mokkhv.avif",
    name: "New Peugeot Traveller",
    price: "1589",
    link: "peugeot-traveller",
  },
];

export const homeBanners: StaticImageData[] = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
];

type homeOptionType = {
  title: string;
  link: string;
  icon: IconType;
  des: string;
};

export const homeOptions: homeOptionType[] = [
  {
    title: "yêu cầu báo giá",
    link: linkConstants.requireQuotation,
    icon: FaEnvelopeOpenText,
    des: "Đăng ký để nhận báo giá mới nhất cho các <strong>dòng xe Peugeot</strong>",
  },
  {
    title: "tính phí lăn bánh",
    link: linkConstants.finalPrice,
    icon: FaCalculator,
    des: "Giá các phiên bản xe Peugeot cùng các khoản phí chi tiết tại <strong>Peugeot Thủ Đức</strong>",
  },
  {
    title: "mua xe trả góp",
    link: linkConstants.installment,
    icon: FaChartPie,
    des: "Trả góp đến <strong>85% giá trị xe</strong>, lãi suất chỉ <strong>0,6%/tháng</strong>",
  },
  {
    title: "đăng ký lái thử",
    link: linkConstants.testDrive,
    icon: FaCarAlt,
    des: "Đến với <strong>Peugeot Thủ Đức</strong> để được lái thử những mẫu xe Peugeot mới nhất",
  },
];

type promotionItemType = {
  icon: IconType;
  title: string;
  subtitle: string;
  desc: string;
};

type itemType = { icon: IconType; title: string; desc: string };

export const reasonsToBuy: itemType[] = [
  {
    icon: BsTagsFill,
    title: "GIÁ CẢ ƯU ĐÃI - GIAO XE SỚM",
    desc: "Peugeot Thủ Đức luôn cam kết mang lại mức giá ưu đãi nhất cho quý khách với thời gian giao xe nhanh nhất trong 1 ngày.",
  },
  {
    icon: SiAdguard,
    title: "BẢO HÀNH THEO TIÊU CHUẨN TOÀN QUỐC",
    desc: "Anh chị sẽ yên tâm khi mua xe tại Peugeot Thủ Đức, vì chúng tôi luôn bảo hành, bảo dưỡng và sửa chữa theo tiêu chuẩn chất lượng của Peugeot trên toàn quốc. BẢO HÀNH ĐẾN 5 NĂM.",
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

export const aboutItems: itemType[] = [
  {
    icon: FaFlag,
    title: "THIẾT KẾ",
    desc: "Chúng tôi mang đến niềm vui lái xe thuần túy bằng cách tạo nên những mẫu xe chứa đựng tính cách và tâm hồn. Trong đó, ngôn ngữ thiết kế chính là nét độc đáo mà Peugeot sử dụng để tác động và kết nối các giác quan của người nhìn.",
  },
  {
    icon: FaThumbsUp,
    title: "SÁNG TẠO",
    desc: "Tại Peugeot, tất cả chúng ta đều nói về việc lái xe và cảm giác hứng khởi mà điều đó mang lại. Lái xe không đơn thuần chỉ là vận hành một cỗ máy mà còn liên hệ đến những va chạm và cảm xúc. Một chiếc xe không những phải phản ứng hoàn hảo với các thao tác của người lái mà còn phải sở hữu các hệ thống trực quan.",
  },
  {
    icon: FaShieldAlt,
    title: "AN TOÀN",
    desc: "Peugeot nhắm đến mục tiêu mang đến cho tất cả khách hàng niềm vui lái xe và hiệu suất an toàn trong một môi trường vượt trội. Dựa trên triết lý này, Peugeot đang thúc đẩy nghiên cứu và phát triển các tính năng an toàn để hoàn thành mục tiêu quan trọng: xe lưu thông an toàn và không xảy ra tai nạn.",
  },
  {
    icon: FaHeartbeat,
    title: "CẢM XÚC",
    desc: "Tại Peugeot, Chúng tôi không chỉ sản xuất xe, mà còn mang lại niềm vui và hạnh phúc cho khách hàng bởi Peugeot tin rằng chiếc xe sẽ lay động cảm xúc và thức tỉnh các giác quan, tạo sự phấn khích cho người sở hữu.",
  },
];

export const footerCol1: string[] = [
  "Chuyên cung cấp dòng xe Peugeot các loại",
  "Xe 5 chỗ Peugeot 408, Peugeot 2008, Xe 7 chỗ Peugeot 5008, Peugeot Traveller, ",
  "Địa chỉ : 127 Quốc Lộ 13, Khu phố 1, Thủ Đức, Ho Chi Minh City, Vietnam",
];

type footerItemType = { title: string; link: string };

export const footerCol2: footerItemType[] = [
  { title: "New Peugeot 408", link: "/peugeot-408" },
  { title: "New Peugeot 2008", link: "/peugeot-2008" },
  { title: "New Peugeot 3008", link: "/peugeot-3008" },
  { title: "New Peugeot 5008", link: "/peugeot-5008" },
  { title: "Peugeot Traveller", link: "/peugeot-traveller" },
];

export const footerCol3: footerItemType[] = [
  { title: "Bảng giá chi tiết", link: linkConstants.quote },
  { title: "Tính phí lăn bánh", link: linkConstants.finalPrice },
  { title: "Thủ tục trả góp", link: linkConstants.installment },
  { title: "Đăng ký lái thử", link: linkConstants.testDrive },
];

export const footerCol32: footerItemType[] = [
  { title: "Chính sách Thanh toán", link: linkConstants.paymentPolicy },
  { title: "Chính sách Bảo mật", link: linkConstants.privacyPolicy },
  {
    title: "Chính sách Giao nhận - Vận chuyển",
    link: linkConstants.deliveryPolicy,
  },
];

export const footerCol4: { title: string; link: string; icon: IconType }[] = [
  { title: "Hotline: 0961379001", link: "tel:0961379001", icon: MdPhone },
  {
    title: "vucuong1710@gmail.com",
    link: "mailto:vucuong1710@gmail.com",
    icon: MdMail,
  },
];

export const carFees = {
  phiDkyBienso: 20000000,
  phiDuongbo: 1560000,
  phiDkiem: 90000,
  bhTNDS: 530700,
};

export const carNames: string[] = [
  "new mazda 2",
  "new mazda 2 sport",
  "new mazda cx-3",
  "new mazda 3",
  "new mazda3 sport",
  "new mazda cx-30",
  "new mazda 6",
  "new mazda cx-5 ipm",
  "new mazda cx-8",
  "new mazda bt-50",
];
