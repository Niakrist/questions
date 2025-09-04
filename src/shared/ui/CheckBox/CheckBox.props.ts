export interface ICheckBoxProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title: string;
  id: string;
  currentValue: string | string[];
  onCheck: (item: string) => void;
  isArray?: boolean;
}
