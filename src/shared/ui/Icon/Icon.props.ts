import type React from "react";

export interface IIconProps extends React.SVGProps<SVGSVGElement> {
  name:
    | "iconLogo"
    | "iconLogoText"
    | "iconArrow"
    | "iconChevron"
    | "iconYoutube"
    | "iconGitHub"
    | "iconInstagram"
    | "iconTelegram"
    | "iconFigma"
    | "iconArrowRound"
    | "iconSearch";
  className?: string;
}
