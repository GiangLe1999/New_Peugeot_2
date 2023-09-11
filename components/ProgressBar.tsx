"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const StyledProgressBar = () => {
  return (
    <>
      <ProgressBar
        height="4px"
        color="#0298da"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default StyledProgressBar;
