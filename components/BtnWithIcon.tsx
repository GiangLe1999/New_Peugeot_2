import { FC } from "react";
import { IconType } from "react-icons";

interface Props {
  onClick?: () => void;
  content: string;
  icon?: IconType;
  iconSize?: number;
  href?: string;
  customClasses?: string;
}

const BtnWithIcon: FC<Props> = ({
  onClick,
  content,
  icon,
  href,
  iconSize,
  customClasses,
}): JSX.Element => {
  let Component = "button" as any;
  if (!onClick && href) {
    Component = "a" as any;
  }

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`py-2 px-4 flex items-center justify-center gap-x-1 rounded-sm transition
      border border-transparent ${customClasses} hover:scale-[1.02]`}
    >
      {icon && icon({ size: iconSize })}
      {content}
    </Component>
  );
};

export default BtnWithIcon;
