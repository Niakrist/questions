import type { ISpecialization } from "./specialization.unterface";

export interface ISkill {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  specializations: ISpecialization[];
}
