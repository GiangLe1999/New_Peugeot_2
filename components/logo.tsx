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
        src="/images/peugeot-logo-alt.avif"
        alt="Peugeot logo"
        priority
      />
    </Link>
  );
};

export default Logo;
