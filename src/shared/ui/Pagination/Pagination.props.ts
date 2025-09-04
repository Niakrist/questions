export interface IPaginationProps {
  currentPage: string;
  totalItems: number;
  quantityPage: number;
  pages: string[];
  handleChange: (value: number) => void;
}
