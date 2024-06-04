import Script from "next/script";
import { FC } from "react";

interface Props {}

const GoogleAnalytics: FC<Props> = (props): JSX.Element => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-7CN8KFXGLW"
      ></Script>
      <Script id="google-analytic">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7CN8KFXGLW');`}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
