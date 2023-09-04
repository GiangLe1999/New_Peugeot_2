import { FC } from "react";

interface Props {
  heading: string;
  subHeading: string;
  bgImg: string;
}

const FirstBanner: FC<Props> = ({
  heading,
  subHeading,
  bgImg,
}): JSX.Element => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-2 text-white aspect-[5]"
      style={{ background: `url('${bgImg}')`, backgroundRepeat: "no-repeat" }}
    >
      <h1 className="font-bold uppercase text-3xl">{heading}</h1>
      <span className="text-xl">{subHeading}</span>
    </div>
  );
};

export default FirstBanner;
