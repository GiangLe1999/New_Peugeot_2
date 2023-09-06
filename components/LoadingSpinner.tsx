import { FC } from "react";
import { ImSpinner3 } from "react-icons/im";

interface Props {}

const LoadingSpinner: FC<Props> = (props): JSX.Element => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-primary">
      <ImSpinner3 className="animate-spin" size={50} />
      <p className="mt-2 text-xl">Đang tải dữ liệu</p>
    </div>
  );
};

export default LoadingSpinner;
