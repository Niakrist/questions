import type { ISpecialization } from "./specialization";

export interface ISpecializationResponse {
  page: number;
  limit: number;
  data: ISpecialization[];
  total: number;
}
