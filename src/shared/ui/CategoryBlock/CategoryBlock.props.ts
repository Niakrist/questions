export interface ICategoryBlockProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  name: string;
  children: React.ReactNode;
  hasButton?: boolean;
}
