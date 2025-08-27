export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  color: "purple" | "white" | "black";
  bgColor: "purple" | "transparent";
  fontWeght: "fw500" | "fw600";
  textSize: "small" | "normal" | "big" | "large";
  className?: string;
  borderRadius?: "br2" | "br12";
  icon?: React.JSX.Element;
}
