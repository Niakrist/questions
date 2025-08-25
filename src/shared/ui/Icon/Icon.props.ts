import type React from "react";

export interface IIconProps extends React.SVGProps<SVGSVGElement> {
  name:
    | "iconLogo"
    | "iconLogoText"
    | "iconArrow"
    | "iconChevron"
    | "iconYoutube"
    | "iconGutHub"
    | "iconInstagram"
    | "iconTelegram"
    | "iconFigma"
    | "iconArrowRound";
  className?: string;
}
