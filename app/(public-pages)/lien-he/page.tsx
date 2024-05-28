import FirstBanner from "@/components/FirstBanner";
import ContactForm from "@/components/contactPage/ContactForm";
import { NextPage } from "next";
import { BsDot } from "react-icons/bs";

export const generateMetadata = () => {
  return {
    title: "Liên hệ với Mazda Sài Gòn",
    description:
      "Liên hệ ngay với Mazda Sài Gòn để đặt lịch lái thử hoặc nhận báo giá mới nhất cho các dòng xe Mazda.",
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/lien-he`,
  };
};

interface Props {}

const titleClasses = "text-primary uppercase font-bold text-2xl mb-3";

const infos = [
  {
    title: "Địa chỉ",
    content: "96/12 Nguyễn Tư Nghiêm, Quận 2, TP.Hồ Chí Minh",
  },
  {
    title: "Số điện thoại",
    link: "tel:0962334807",
    content: "096.2334.807 (Mr.Giang)",
  },
  {
    title: "Email",
    link: "mailto:legiangbmt09@gmail.com",
    content: "legiangbmt09@gmail.com",
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
        subHeading="Hoặc ghé thăm trực tiếp đại lý Mazda Sài Gòn"
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
              <h1 className={titleClasses}>Mazda Sài Gòn</h1>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3232194215752!2d106.75906227414139!3d10.786537889362842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175267862f2cddf%3A0xeba89603a07cccb7!2zOTYgxJAuIE5ndXnhu4VuIFTGsCBOZ2hpw6ptLCBQaMaw4budbmcgQsOsbmggVHLGsG5nIFTDonksIFF14bqtbiAyLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1694046261809!5m2!1svi!2s"
              className="w-full h-full max-[846px]:aspect-video rounded-md shadow-md"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
