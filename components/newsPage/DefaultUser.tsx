import React, { FC } from "react";

interface Props {
  className?: string;
}

const DefaultUser: FC<Props> = ({ className }) => {
  return (
    <img
      className={className}
      src="/iamges/default-user.jpg"
      alt="Default user"
    />
  );
};

export default DefaultUser;
