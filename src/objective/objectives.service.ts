import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ObjectivesDto } from './objecitvesDTO';

@Injectable()
export class ObjectiveService {
  constructor(private prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.objective.findMany();
  }

  postObjective(body: ObjectivesDto) {
    return this.prismaService.objective.create({ data: body });
  }

  deleteObjectiveById(id: number) {
    return this.prismaService.objective.delete({ where: { id } });
  }

  PatchObjectiveById(id: number, body: ObjectivesDto) {
    return this.prismaService.objective.update({ where: { id }, data: body });
  }
}
