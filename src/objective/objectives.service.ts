import { Injectable } from '@nestjs/common';
import { ObjectivesDto } from './objecitvesDTO';
import { Pool } from 'pg';

@Injectable()
export class ObjectiveService {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      host: 'localhost',
      user: 'postgres',
      password: 'postgres',
      database: 'okrs',
      port: 5432,
    });
  }

  findAll() {
    return this.pool.query('SELECT * FROM objectives').then((result) => {
      return result.rows;
    });
  }

  postObjective(body: ObjectivesDto) {
    const query = `INSERT INTO objectives (title)
              VALUES ('${body.Objectives}');`;
    return this.pool.query(query);
  }

  //
  // deleteObjectiveById(id: number) {
  //   this.objectives = this.objectives.filter(
  //     (objective) => objective.id !== id,
  //   );
  //   return this.objectives;
  // }
}
