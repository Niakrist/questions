import type { ISkill } from "./skill.interface";

export interface ISkillRequest {
  page: number;
  limit: number;
  data: ISkill[];
  total: number;
}
