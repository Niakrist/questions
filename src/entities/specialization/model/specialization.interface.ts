import type { ISpecialization } from "@/shared/interface";

export interface ISpecializationResponse {
  page: number;
  limit: number;
  data: ISpecialization[];
  total: number;
}
