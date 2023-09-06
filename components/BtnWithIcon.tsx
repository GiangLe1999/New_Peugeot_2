import Link from "next/link";
import { type } from "os";
import { FC, FormEvent } from "react";
import { IconType } from "react-icons";

interface Props {
  onClick?: () => void | ((e: FormEvent<Element>) => void);
  content: string;
  icon?: IconType;
  iconSize?: number;
  href?: string;
  customClasses?: string;
  type?: string;
  to?: string;
}

const BtnWithIcon: FC<Props> = ({
  onClick,
  content,
  icon,
  href,
  iconSize,
  customClasses,
  type,
  to,
}): JSX.Element => {
  let Component = "button" as any;
  if (!onClick && href) {
    Component = "a" as any;
  }

  if (!onClick && to) {
    Component = Link as any;
  }

  return (
    <Component
      href={href || to}
      onClick={onClick}
      className={`py-2 px-4 flex items-center justify-center gap-x-1 rounded-sm transition
      border border-transparent ${customClasses} hover:scale-[1.01]`}
      type={type}
    >
      {icon && icon({ size: iconSize })}
      {content}
    </Component>
  );
};

export default BtnWithIcon;
