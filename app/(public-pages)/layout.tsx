import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import MobileBottomNav from "@/components/Layout/MobileBottomNav";
import StickyBtns from "@/components/Layout/StickyBtns";
import StyledProgressBar from "@/components/ProgressBar";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const layout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <StyledProgressBar />
      <Header />
      {children}
      <StickyBtns />
      {/* <ContactBtns /> */}
      <Footer />
      <MobileBottomNav />
    </>
  );
};

export default layout;
