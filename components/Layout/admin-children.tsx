import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  isExpand: boolean;
}

const AdminChilren: FC<Props> = ({ children, isExpand }): JSX.Element => {
  return (
    <div className={`${isExpand ? "ml-[260px]" : "ml-[80px]"}`}>{children}</div>
  );
};

export default AdminChilren;
