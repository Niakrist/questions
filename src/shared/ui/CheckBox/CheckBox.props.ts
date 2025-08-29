export interface ICheckBoxProps {
  title: string;
  id: number;
  value: boolean;
  handleChange: (keyValue: string, value: string) => void;
  imageSrc?: string;
  keyValue: string;
}
