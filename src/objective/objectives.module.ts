import { Module } from '@nestjs/common';
import { ObjectivesController } from './objectives.controller';
import { ObjectiveService } from './objectives.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [ObjectivesController],
  providers: [ObjectiveService, PrismaService],
})
export class ObjectivesModule {}
