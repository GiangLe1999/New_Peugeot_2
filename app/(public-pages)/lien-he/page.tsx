import FirstBanner from "@/components/FirstBanner";
import ContactForm from "@/components/contactPage/ContactForm";
import { NextPage } from "next";
import { BsDot } from "react-icons/bs";
export const dynamic = "force-dynamic";

export const generateMetadata = () => {
  return {
    title: "Liên hệ với Mazda Thủ Đức",
    description:
      "Liên hệ ngay với Mazda Thủ Đức để đặt lịch lái thử hoặc nhận báo giá mới nhất cho các dòng xe Mazda.",
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/lien-he`,
  };
};

interface Props {}

const titleClasses = "text-primary uppercase font-bold text-2xl mb-3";

const infos = [
  {
    title: "Địa chỉ",
    content: "125 Quốc Lộ 13, Khu phố 1, Thủ Đức, Ho Chi Minh City, Vietnam",
  },
  {
    title: "Số điện thoại",
    link: "tel:0333122512",
    content: "033.3122.512 (Mr.Long)",
  },
  {
    title: "Email",
    link: "mailto:hualong02072000@gmail.com",
    content: "hualong02072000@gmail.com",
  },
  {
    title: "Website",
    link: "https://next-mazda.vercel.app",
    content: "https://next-mazda.vercel.app",
  },
];

const ContactPage: NextPage<Props> = () => {
  return (
    <div className="text-textColor">
      <FirstBanner
        heading="LIÊN HỆ CHÚNG TÔI"
        subHeading="Hoặc ghé thăm trực tiếp đại lý Mazda Thủ Đức"
        bgImg="/images/lien-he/first-banner.jpg"
        bgClasses="!bg-[50%_50%] !bg-cover"
      />
      <div className="container py-16">
        <div className="pb-16">
          <ContactForm />
        </div>

        <div className="grid grid-cols-2 gap-9 max-[846px]:grid-cols-1">
          <div className="space-y-11">
            <div>
              <h1 className={titleClasses}>Mazda Thủ Đức</h1>
              <ul>
                {infos.map((info, index) => (
                  <li key={index} className="flex items-center gap-2 py-2">
                    <p className="flex items-center gap-1">
                      <BsDot size={24} className="-ml-2" />
                      <span className="font-bold">{info.title}: </span>
                      {info.link ? (
                        <a href={info.link} className="hover:text-primary">
                          {info.content}
                        </a>
                      ) : (
                        <span>{info.content}</span>
                      )}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className={titleClasses}>Thời gian hoạt động</h2>
              <div className="contact-table">
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
                      <td>Thứ 7</td> <td>08:00 - 19:00</td>
                      <td>08:00 - 17:00</td>
                    </tr>
                    <tr>
                      <td>Chủ nhật</td> <td>08:00 - 17:00</td> <td>Nghỉ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7887680054164!2d106.71228047601315!3d10.827470858248212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752902a0e9a235%3A0xb75352c6302b9a24!2zTWF6ZGEgLSBUaMOgbmggUGjhu5EgVGjhu6cgxJDhu6lj!5e0!3m2!1svi!2s!4v1717517833562!5m2!1svi!2s"
              className="w-full h-full max-[846px]:aspect-video rounded-md shadow-md"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
