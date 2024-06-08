import { useState } from "react";
import NextImage from "@/components/NextImage";

export const socialItems = [
  {
    img: "/images/tin-tuc/facebook.webp",
    alt: "Facebook Icon",
    href: "https://www.facebook.com/profile.php?id=100083139042152",
    title: "Facebook",
  },
  {
    img: "/images/tin-tuc/youtube.webp",
    alt: "Youtube Icon",
    href: "https://www.youtube.com/@GMAJOR-Ltd",
    title: "Youtube",
  },
  {
    img: "/images/tin-tuc/linkedin.webp",
    alt: "Linkedin Icon",
    href: "https://linkedin.com/company/gmajor",
    title: "Linkedin",
  },
  {
    img: "/images/tin-tuc/twitter.png",
    alt: "Twitter Icon",
    href: "https://twitter.com/gmajorglobal",
    title: "Twitter",
  },
];

const SubscribeCard = () => {
  const [email, setEmail] = useState("");
  const [isHandling, setIsHandling] = useState(false);

  // const submitHandler = async (e) => {
  //   try {
  //     e.preventDefault();
  //     setIsHandling(true);
  //     await directus.items("subscribers").createOne({
  //       email,
  //     });
  //     setIsHandling(false);
  //     setEmail("");
  //   } catch (error) {
  //     console.log(error);
  //     setIsHandling(false);
  //   }
  // };

  return (
    <div
      className="rounded-xl bg-slate-10 md:h-[300px] md:gap-28 gap-10 py-10 px-6 relative
    overflow-hidden flex flex-col md:flex-row items-center dark:border dark:border-gray-800"
    >
      <div className="absolute z-10 inset-0 bg-gradient-to-r from-black to-gray-500"></div>
      <div className="relative z-10 md:w-[60%]">
        <h3 className="text-xl font-bold text-white">
          Subscribe kênh tin tức Mazda
        </h3>
        <p className="max-w-md mt-2 text-sm text-white leading-7">
          Đăng ký nhận tin tức hoặc theo dõi Mazda trên mạng xã hội để cập nhật
          những thông tin mới nhất về những dòng xe Mazda.
        </p>

        {/* Form */}
        <form onSubmit={() => {}} className="mt-6 sm:flex items-center gap-2">
          <input
            placeholder="Nhập Email vào đây"
            type="email"
            name="email"
            value={email}
            className="flex-1 bg-white text-base rounded-md py-3 px-4 outline-none
    focus:ring-2 ring-neutral-600 w-full"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="sm:w-28 px-4 py-[13px] bg-black rounded-md text-white font-semibold sm:mt-0 mt-2 w-full">
            Subscribe
          </button>
        </form>
      </div>

      <div className="relative z-10 space-y-2 flex-1">
        <h3 className="text-xl font-bold text-white md:mb-0 mb-4">
          {" "}
          Thẽo dõi chúng tôi trên MXH
        </h3>
        <ul className="md:space-y-2 md:flex md:flex-col md:items-start flex flex-row items-center justify-center md:gap-0 gap-3">
          {socialItems.map((socialItem, index) => (
            <li className="flex" key={index}>
              <a
                className="flex items-center gap-2 text-white text-sm"
                href={socialItem.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="block relative w-6 h-6">
                  <NextImage
                    src={socialItem.img}
                    alt={socialItem.alt}
                    className="rounded-full"
                  />
                </span>
                <span className="hidden md:block">{socialItem.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubscribeCard;
