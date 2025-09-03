import type { ISkill } from "@/entities/skill";
import type { ISpecialization } from "@/entities/specialization";

export interface IQuestionItemResponse {
  id: number;
  title: string;
  description: string;
  code: string | null;
  imageSrc: string | null;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  status: string;
  rate: number;
  complexity: number;
  createdAt: string;
  updatedAt: string;
  createdById: string;
  updatedById: string;
  createdBy: CreatedBy;
  updatedBy: UpdatedBy;
  questionSpecializations: ISpecialization[];
  questionSkills: ISkill[];
}

export interface CreatedBy {
  id: string;
  username: string;
}

export interface UpdatedBy {
  id: string;
  username: string;
}
