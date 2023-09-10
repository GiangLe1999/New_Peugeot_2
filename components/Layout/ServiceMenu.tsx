import { FC } from "react";
import icon1 from "@/public/images/header/service.png";
import icon2 from "@/public/images/header/wheel.png";
import icon3 from "@/public/images/header/protect.png";
import icon4 from "@/public/images/header/recall.png";
import { linkConstants } from "@/data/constants";
import Image from "next/image";
import Link from "next/link";

interface Props {
  showServiceMenu: boolean;
}

const serviceList = [
  {
    icon: icon2,
    title: "PHỤ TÙNG - PHỤ KIỆN",
    children: [
      { title: "Phụ tùng chính hãng", link: linkConstants.appliance },
      { title: "Phụ kiện chính hãng", link: linkConstants.appliance },
    ],
  },

  {
    icon: icon1,
    title: "DỊCH VỤ SAU BÁN HÀNG",
    children: [
      { title: "Chính sách bảo hành", link: linkConstants.warranty },
      { title: "Bảo dưỡng định kỳ", link: linkConstants.periodWarranty },
      { title: "Dịch vụ sửa chữa", link: linkConstants.fix },
      { title: "Dịch vụ chăm sóc xe", link: linkConstants.careCar },
    ],
  },

  {
    icon: icon4,
    title: "ĐẶT HẸN DỊCH VỤ",
    children: [{ title: "Chi tiết", link: linkConstants.bookService }],
  },

  {
    icon: icon3,
    title: "CHĂM SÓC KHÁCH HÀNG",
    children: [
      {
        title: "Tổng đài chăm sóc khách hàng",
        link: linkConstants.careCustomer,
      },
      { title: "Chăm sóc xe lưu động", link: linkConstants.mobileService },
    ],
  },
];

const ServiceMenu: FC<Props> = ({ showServiceMenu }): JSX.Element => {
  return (
    <div
      className={`absolute w-full top-full left-0 z-50 bg-white text-textColor p-5 grid grid-cols-4 gap-3 rounded-sm shadow-md transition origin-top
     ${showServiceMenu ? "scale-3d-1" : "scale-3d-0"}`}
    >
      {serviceList.map((item, index) => (
        <div key={index}>
          <div className="flex items-center gap-1 mb-3">
            <div className="relative w-6 aspect-square">
              <Image
                src={item.icon}
                alt={item.title}
                style={{ objectFit: "contain" }}
                fill={true}
              />
            </div>

            <p className="font-bold text-black">{item.title}</p>
          </div>

          <ul className="list-disc space-y-2 ml-6">
            {item.children.map((child, index) => (
              <li key={index} className="text-left">
                <Link href={child.link} className="hover:text-primary">
                  {child.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServiceMenu;
