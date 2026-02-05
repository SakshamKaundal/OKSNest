export class ObjectiveNotFoundException extends Error {
  constructor(objectiveId: number) {
    super(`Objectives with Id ${objectiveId} not found!`);
  }
}
