import { Injectable } from '@nestjs/common';
import { ObjectivesDto } from './objecitvesDTO';

@Injectable()
export class ObjectiveService {
  objectives = [
    {
      id: 1769946521153,
      Objectives: 'Learn React',
      keyValues: [
        {
          id: 21312312,
          Values: 'learn java script',
          progress: '20',
        },
        {
          id: 123123,
          Values: 'learn node',
          progress: '30',
        },
      ],
    },
  ];

  findAll() {
    return this.objectives;
  }

  postObjective(body: ObjectivesDto) {
    return this.objectives.push(body);
  }

  deleteObjectiveById(id: number) {
    this.objectives = this.objectives.filter(
      (objective) => objective.id !== id,
    );
    return this.objectives;
  }
}
