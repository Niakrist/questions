export interface ITextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children?: React.ReactNode;
  color: "white" | "grey" | "black";
  textSize: "small" | "normal" | "big";
  fontWeight: "fw400" | "fw500";
  className: string;
}
