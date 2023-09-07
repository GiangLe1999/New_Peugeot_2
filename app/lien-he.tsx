import SectionTitle from "@/components/home/SectionTitle";
import { NextPage } from "next";
import { BsHeadset } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const generateMetadata = () => {
  return {
    title: "Liên hệ với Văn Giàu Peugeot",
    description:
      "Liên hệ ngay với Văn Giàu Peogeot để đặt lịch lái thử hoặc nhận báo giá mới nhất cho các dòng xe Peugeot.",
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/lien-he`,
  };
};

interface Props {}

const titleClasses = "font-bold text-xl pb-3 uppercase";

const infos = [
  {
    icon: FaMapMarkerAlt,
    content: "1580 Hùng Vương, Cam Phú, Cam Ranh, Khánh Hòa",
  },
  {
    icon: BsHeadset,
    content: "0377750199 (Mr.Giàu)",
  },
  {
    icon: MdEmail,
    content: "phamgiau190@gmail.com",
  },
  {
    icon: FaEarthAfrica,
    content: "https://next-peugeot.vercel.app/",
  },
];

const page: NextPage<Props> = () => {
  return (
    <div className="container py-9">
      <SectionTitle text="LIÊN HỆ VỚI CHÚNG TÔI" />

      <div className="grid grid-cols-2 gap-9 max-[846px]:grid-cols-1">
        <div className="space-y-11">
          <div>
            <h1 className={titleClasses}>Peugeot Văn Giàu</h1>
            <ul>
              {infos.map((info, index) => (
                <li key={index} className="flex items-center gap-2 py-2">
                  <info.icon />
                  {info.content}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={titleClasses}>Thời gian hoạt động</h2>
            <div className="tableContent">
              <table className="w-full text-left">
                <tbody>
                  <tr className="font-bold">
                    <td>Ngày trong tuần</td>
                    <td>Kinh doanh</td>
                    <td>Dịch vụ</td>
                  </tr>
                  <tr>
                    <td>Thứ 2 - Thứ 6</td> <td>08:00 - 19:00</td>
                    <td>08:00 - 17:00</td>
                  </tr>
                  <tr>
                    <td>Thứ 7</td> <td>08:00 - 19:00</td> <td>08:00 - 17:00</td>
                  </tr>
                  <tr>
                    <td>Chủ nhật</td> <td>08:00 - 17:00</td> <td>Nghỉ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.645086077218!2d109.16962397416219!3d11.929769388297995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3170ed44e903824f%3A0x32e12ba9e1dc212c!2zMTU4MCBIw7luZyBWxrDGoW5nLCBDYW0gUGjDuiwgQ2FtIFJhbmgsIEtow6FuaCBIw7JhIDY1MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1692874748544!5m2!1svi!2s"
            className="w-full h-full max-[846px]:aspect-video"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default page;
