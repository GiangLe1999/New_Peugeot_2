import Link from "next/link";
import { FC } from "react";
import ContainNextImage from "@/components/ContainNextImage";

interface Props {
  wrapperClasses: string;
  textWhite?: boolean;
}

const Logo: FC<Props> = ({ wrapperClasses, textWhite }): JSX.Element => {
  return (
    <Link href="/" className={`relative block transition ${wrapperClasses}`}>
      <ContainNextImage
        src="/images/mazda-logo-800x500.png"
        alt="Mazda logo"
        priority
      />
    </Link>
  );
};

export default Logo;
