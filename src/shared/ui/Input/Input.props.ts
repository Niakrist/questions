export interface ISearchProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: "search";
  children?: React.ReactNode;
  placeholder: string;
  type: "text";
  handleChange: (keyValue: string, value: string) => void;
  keyValue: string;
}
