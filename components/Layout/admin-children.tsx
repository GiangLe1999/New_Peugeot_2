import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  isExpand: boolean;
}

const AdminChilren: FC<Props> = ({ children, isExpand }): JSX.Element => {
  return (
    <div className={`${isExpand ? "md:ml-[260px]" : "md:ml-[80px]"} ml-0`}>
      {children}
    </div>
  );
};

export default AdminChilren;
