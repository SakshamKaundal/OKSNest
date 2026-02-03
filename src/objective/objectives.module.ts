import { Module } from '@nestjs/common';
import { ObjectivesController } from './objectives.controller';
import { ObjectiveService } from './objectives.service';

@Module({
  controllers: [ObjectivesController],
  providers: [ObjectiveService],
})
export class ObjectivesModule {}
