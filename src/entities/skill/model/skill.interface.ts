import type { ISpecialization } from "@/entities/specialization/model/specialization";

export interface ISkill {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  specializations: ISpecialization[];
}
