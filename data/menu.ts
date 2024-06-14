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

export const carCategories = [
  { label: "Hatchback", value: "Hatchback" },
  { label: "Sedan & Hatchback", value: "Sedan & Hatchback" },
  { label: "Coupe (xe thể thao)", value: "Coupe (xe thể thao)" },
  { label: "Sedan", value: "Sedan" },
  { label: "SUV (xe thể thao đa dụng)", value: "SUV (xe thể thao đa dụng)" },
  { label: "Pickup (xe bán tải)", value: "Pickup (xe bán tải)" },
  { label: "MPV (xe đa dụng)", value: "MPV (xe đa dụng)" },
];
export const carTiers = [
  { label: "Hạng A", value: "Hạng A" },
  { label: "Hạng B", value: "Hạng B" },
  { label: "Hạng C", value: "Hạng C" },
  { label: "Hạng D", value: "Hạng D" },
  { label: "Hạng E", value: "Hạng E" },
];
