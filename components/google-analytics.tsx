import Script from "next/script";
import { FC } from "react";

interface Props {}

const GoogleAnalytics: FC<Props> = (props): JSX.Element => {
  return (
    <>
      <Script id="google-analytic">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8RNVWX21S1');`}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
