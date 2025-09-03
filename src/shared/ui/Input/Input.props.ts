export interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: "search";
  children?: React.ReactNode;
  placeholder: string;
  type: "text";
  defaultValue?: string;
}
