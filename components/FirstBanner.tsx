import { FC } from "react";

interface Props {
  heading: string;
  subHeading: string;
  bgImg: string;
  bgClasses?: string;
}

const FirstBanner: FC<Props> = ({
  heading,
  subHeading,
  bgImg,
  bgClasses,
}): JSX.Element => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-2 text-white aspect-[5] ${bgClasses}`}
      style={{ background: `url('${bgImg}')`, backgroundRepeat: "no-repeat" }}
    >
      <h1 className="font-bold uppercase text-3xl relative z-10">{heading}</h1>
      <span className="text-xl relative z-10">{subHeading}</span>
    </div>
  );
};

export default FirstBanner;
