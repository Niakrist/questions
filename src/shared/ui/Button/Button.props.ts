export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  color: "purple" | "white" | "black";
  bgColor: "purple" | "transparent";
  fontWeght: "fw500" | "fw600";
  textSize: "small" | "normal" | "big";
  className?: string;
  icon?: React.JSX.Element;
  borderRadius?: "br2" | "br12";
}
