import React from "react";
import {
  IconArrow,
  IconChevron,
  IconLogo,
  IconLogoText,
  IconYoutube,
  IconGitHub,
  IconInstagram,
  IconTelegram,
  IconFigma,
  IconArrowRound,
  IconSearch,
} from "@/shared/assets/icons";
import type { IIconProps } from "./Icon.props";

const Icon = ({ name, className, ...props }: IIconProps): React.JSX.Element => {
  const icons = {
    iconLogo: <IconLogo className={className} {...props} />,
    iconLogoText: <IconLogoText className={className} {...props} />,
    iconArrow: <IconArrow className={className} {...props} />,
    iconChevron: <IconChevron className={className} {...props} />,
    iconYoutube: <IconYoutube className={className} {...props} />,
    iconGitHub: <IconGitHub className={className} {...props} />,
    iconInstagram: <IconInstagram className={className} {...props} />,
    iconTelegram: <IconTelegram className={className} {...props} />,
    iconFigma: <IconFigma className={className} {...props} />,
    iconArrowRound: <IconArrowRound className={className} {...props} />,
    iconSearch: <IconSearch className={className} {...props} />,
  };

  return icons[name];
};

export default Icon;
