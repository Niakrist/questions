import type { ISkill } from "@/shared/interface";

export interface ISkillRequest {
  page: number;
  limit: number;
  data: ISkill[];
  total: number;
}
