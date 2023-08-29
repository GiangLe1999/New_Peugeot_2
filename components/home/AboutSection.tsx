import { FC } from "react";
import SectionTitle from "./SectionTitle";
import { aboutItems } from "@/data";

interface Props {}

const AboutSection: FC<Props> = (props): JSX.Element => {
  return (
    <section className="py-10 bg-lightBg">
      <SectionTitle title="VỀ MAZDA" />
      <div className="container">
        {/* Cards */}
        <div className="grid grid-cols-4 gap-5 py-8">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className="w-full text-center space-y-2 shadow-md p-6 rounded-sm bg-white"
            >
              <div className="bg-primary w-14 h-14 text-white grid place-items-center rounded-full mx-auto">
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
        <div className="grid grid-cols-3 gap-5 pb-6">
          <div className="video-wrapper">
            <iframe
              className="iframe"
              src="https://www.youtube.com/embed/HqfohWLRkWM"
            ></iframe>
          </div>
          <div className="video-wrapper">
            <iframe
              className="iframe"
              src="https://www.youtube.com/embed/pcDjAZlriNU"
            ></iframe>
          </div>
          <div className="video-wrapper">
            <iframe
              className="iframe"
              src="https://www.youtube.com/embed/pa6ZdijlBmM"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
