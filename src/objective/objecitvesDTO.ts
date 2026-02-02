export class ObjectivesDto {
  id: number;
  Objectives: string;
  keyValues: {
    id: number;
    Values: string;
    progress: string;
  }[];
}
