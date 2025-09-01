export interface IHtagProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: React.ReactNode;
  tag: "h1" | "h2";
  className?: string;
  sizeText: "medium" | "big";
}
