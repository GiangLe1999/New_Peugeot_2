import { IconType } from "react-icons";
import {
  MdAccountCircle,
  MdDashboard,
  MdEditSquare,
  MdHome,
} from "react-icons/md";
import { linkConstants } from "./constants";
import { IoCarSportSharp } from "react-icons/io5";

export const articleCategories = [
  { label: "Ưu đãi", value: "Ưu đãi" },
  { label: "Sự kiện", value: "Sự kiện" },
  { label: "Thông tin xe", value: "Thông tin xe" },
];

export const adminSidebarItems: {
  link: string;
  title: string;
  icon: IconType;
}[] = [
  { link: "/", title: "Đến Trang Chủ", icon: MdHome },
  { link: linkConstants.dashboard, title: "Dashboard", icon: MdDashboard },
  {
    link: linkConstants.admin_cars,
    title: "Danh Sách Xe",
    icon: IoCarSportSharp,
  },
  { link: linkConstants.profile, title: "Profile", icon: MdAccountCircle },
  {
    link: linkConstants.admin_articles,
    title: "Bài Viết",
    icon: MdEditSquare,
  },
];
