import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ObjectivesDto } from './objecitvesDTO';
import { ObjectiveNotFoundException } from '../CustomException/ObjectiveNotFound';
import { Objective } from '../generated/client';
import { TradeMarkException } from '../CustomException/TradeMarkException';

@Injectable()
export class ObjectiveService {
  constructor(private prismaService: PrismaService) {}

  async findObjectiveById(objectiveId: number): Promise<Objective[]> {
    const objectives = await this.prismaService.objective.findMany({
      where: {
        id: objectiveId,
      },
    });
    if (objectives.length === 0) {
      throw new ObjectiveNotFoundException(objectiveId);
    }
    return objectives;
  }

  postObjective(body: ObjectivesDto) {
    console.log(body);

    if (body.title.toLowerCase().includes('incubyte')) {
      throw new TradeMarkException();
    }

    return this.prismaService.objective.create({
      data: {
        title: body.title,
        keyResults: {
          createMany: {
            data: body.keyResult.map((kr) => ({
              description: kr.description,
              progress: kr.progress,
            })),
          },
        },
      },
    });
  }

  //fix it to only give keyResult:
  getKeyResultsByObjId(id: number) {
    return this.prismaService.objective.findUnique({
      where: { id },
      include: {
        keyResults: true,
      },
    });
  }

  deleteObjectiveById(id: number) {
    return this.prismaService.objective.delete({ where: { id } });
  }

  PatchObjectiveById(id: number, body: ObjectivesDto) {
    return this.prismaService.objective.update({ where: { id }, data: body });
  }

  findAll() {
    return this.prismaService.objective.findMany();
  }
}
