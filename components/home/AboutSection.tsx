import { FC } from "react";
import SectionTitle from "./SectionTitle";
import { aboutItems } from "@/data";

interface Props {}

const AboutSection: FC<Props> = (props): JSX.Element => {
  return (
    <section className="py-10 bg-lightBg">
      <SectionTitle title="VỀ PEUGEOT" />
      <div className="container">
        {/* Cards */}
        <div className="grid grid-cols-4 gap-5 py-8 max-[1000px]:grid-cols-2 max-[557px]:grid-cols-1">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className="w-full text-center space-y-2 shadow-md p-6 rounded-sm bg-white"
            >
              <div className="bg-secondary w-14 h-14 text-white grid place-items-center rounded-full mx-auto">
                {item.icon({ size: 30 })}
              </div>
              <p className="text-primary font-bold">{item.title}</p>
              <p className="text-textColor text-justify text-sm leading-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Videos */}
        {/* <div className="grid grid-cols-3 gap-5 pb-6 max-[600px]:grid-cols-1">
          <div className="video-wrapper">
            <iframe
              loading="lazy"
              src="https://www.youtube.com/embed/HqfohWLRkWM"
              title="NEW MAZDA6 | PHONG CÁCH &amp; LỊCH LÃM"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="video-wrapper">
            <iframe
              loading="lazy"
              src="https://www.youtube.com/embed/pcDjAZlriNU"
              title="NEW MAZDA CX-5 | NÂNG TẦM ĐẲNG CẤP"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="video-wrapper">
            <iframe
              loading="lazy"
              src="https://www.youtube.com/embed/pa6ZdijlBmM"
              title="ALL-NEW MAZDA3 - THIẾT KẾ XE ĐẸP NHẤT THẾ GIỚI NĂM 2020 (2020 WORLD CAR DESIGN OF THE YEAR)"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
