import { StaticImageData } from "next/image";

import {
  FaEnvelopeOpenText,
  FaCalculator,
  FaCarAlt,
  FaChartPie,
  FaUsersCog,
  FaFlag,
  FaThumbsUp,
  FaShieldAlt,
  FaHeartbeat,
  FaHome,
  FaInfoCircle,
  FaBlog,
} from "react-icons/fa";

import { BiSolidContact } from "react-icons/bi";

import { HiReceiptTax } from "react-icons/hi";
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
  banner6,
  banner7,
  banner8,
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
    title: "giá xe mazda",
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

type navCarItemType = {
  img: string;
  name: string;
  price: string;
  link: string;
};

export const navCarMenu: navCarItemType[] = [
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1693194430/Mazda/mazda2-do_ekcwdn.jpg",
    name: "New Mazda 2",
    price: "429",
    link: "mazda-2",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1693194430/Mazda/mazda2-sport-trang_qwmme7.jpg",
    name: "New Mazda2 Sport",
    price: "513",
    link: "mazda-2-sport",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1693194429/Mazda/mazda-cx3-xanh_g7kbvr.jpg",
    name: "New Mazda CX3",
    price: "569",
    link: "mazda-cx-3",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1693194429/Mazda/mazda3-den_lhjkli.jpg",
    name: "New Mazda 3",
    price: "579",
    link: "mazda-3",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1693194427/Mazda/mazdasport-xam_aaj30s.jpg",
    name: "New Mazda3 Sport",
    price: "649",
    link: "mazda-3-sport",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1693194427/Mazda/mazdacx30-trang_xvfhyd.jpg",
    name: "Mazda CX30",
    price: "709",
    link: "mazda-cx-30",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1693194426/Mazda/mazda6-xanhden_n05nvx.jpg",
    name: "New Mazda 6",
    price: "779",
    link: "mazda-6",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1693194426/Mazda/mazdacx5-do_eaoitz.jpg",
    name: "New Mazda CX5 IPM",
    price: "779",
    link: "mazda-cx-5",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1693194425/Mazda/mazdacx8-den_znommi.jpg",
    name: "New Mazda CX8",
    price: "949",
    link: "mazda-cx-8",
  },
  {
    img: "https://res.cloudinary.com/dfhheac8o/image/upload/v1693194425/Mazda/bt50-xam_d9htf5.jpg",
    name: "New Mazda BT-50",
    price: "609",
    link: "mazda-bt-50",
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
  {
    title: "yêu cầu báo giá",
    link: linkConstants.requireQuotation,
    icon: FaEnvelopeOpenText,
  },
  {
    title: "tính phí lăn bánh",
    link: linkConstants.finalPrice,
    icon: FaCalculator,
  },
  {
    title: "mua xe trả góp",
    link: linkConstants.installment,
    icon: FaChartPie,
  },
  {
    title: "đăng ký lái thử",
    link: linkConstants.testDrive,
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

type itemType = { icon: IconType; title: string; desc: string };

export const reasonsToBuy: itemType[] = [
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

export const aboutItems: itemType[] = [
  {
    icon: FaFlag,
    title: "THIẾT KẾ",
    desc: "Chúng tôi mang đến niềm vui lái xe thuần túy bằng cách tạo nên những mẫu xe chứa đựng tính cách và tâm hồn. Trong đó, ngôn ngữ thiết kế chính là nét độc đáo mà Mazda sử dụng để tác động và kết nối các giác quan của người nhìn.",
  },
  {
    icon: FaThumbsUp,
    title: "SÁNG TẠO",
    desc: "Tại Mazda, tất cả chúng ta đều nói về việc lái xe và cảm giác hứng khởi mà điều đó mang lại. Lái xe không đơn thuần chỉ là vận hành một cỗ máy mà còn liên hệ đến những va chạm và cảm xúc. Một chiếc xe không những phải phản ứng hoàn hảo với các thao tác của người lái mà còn phải sở hữu các hệ thống trực quan.",
  },
  {
    icon: FaShieldAlt,
    title: "AN TOÀN",
    desc: "Mazda nhắm đến mục tiêu mang đến cho tất cả khách hàng niềm vui lái xe và hiệu suất an toàn trong một môi trường vượt trội. Dựa trên triết lý này, Mazda đang thúc đẩy nghiên cứu và phát triển các tính năng an toàn để hoàn thành mục tiêu quan trọng: xe lưu thông an toàn và không xảy ra tai nạn.",
  },
  {
    icon: FaHeartbeat,
    title: "CẢM XÚC",
    desc: "Tại Mazda, Chúng tôi không chỉ sản xuất xe, mà còn mang lại niềm vui và hạnh phúc cho khách hàng bởi Mazda tin rằng chiếc xe sẽ lay động cảm xúc và thức tỉnh các giác quan, tạo sự phấn khích cho người sở hữu.",
  },
];

export const footerCol1: string[] = [
  "Giấy CNĐKDN: 400077880 Ngày cấp 27/10/2010",
  "Cơ quan cấp: Cơ quan cấp: Phòng đăng ký kinh doanh Sở kế hoạch và đầu tư tỉnh Quảng Nam",
  "Địa chỉ : Thôn 4, Xã Tam Hiệp, Huyện Núi Thành, Tỉnh Quảng Nam, Việt Nam",
];

type footerItemType = { title: string; link: string };

export const footerCol2: footerItemType[] = [
  { title: "New Mazda CX-5", link: "/mazda-cx-5" },
  { title: "Mazda2", link: "/mazda-2" },
  { title: "Mazda2 Sport", link: "/mazda-2-sport" },
  { title: "Mazda3", link: "/mazda-3" },
  { title: "Mazda3 Sport", link: "/mazda-3-sport" },
  { title: "Mazda6", link: "/mazda-6" },
  { title: "Mazda CX-8", link: "/mazda-cx-8" },
  { title: "Mazda BT-50", link: "/mazda-bt-50" },
];

export const footerCol3: footerItemType[] = [
  { title: "Dịch vụ sau bán hàng", link: linkConstants.periodWarranty },
  { title: "Phụ tùng - phụ kiện", link: linkConstants.appliance },
  { title: "Chăm sóc khách hàng", link: linkConstants.careCustomer },
  { title: "Đặt hẹn dịch vụ", link: linkConstants.bookService },
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
  { title: "Hotline: 0962334807", link: "tel:0962334807", icon: MdPhone },
  {
    title: "cskh@thaco.com.vn",
    link: "mailto:cskh@thaco.com.vn",
    icon: MdMail,
  },
];

export const carFees = {
  phiDkyBienso: 20000000,
  phiDuongbo: 1560000,
  phiDkiem: 45000,
  phiDvu: 2000000,
  thuchiho: 630000,
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
