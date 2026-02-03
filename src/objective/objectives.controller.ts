import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ObjectiveService } from './objectives.service';
import { ObjectivesDto } from './objecitvesDTO';
// import { ObjectivesDto } from './objecitvesDTO';
//import { ObjectivesDto } from './objecitvesDTO';

@Controller('/objectives')
export class ObjectivesController {
  constructor(private readonly objectiveService: ObjectiveService) {}

  @Get()
  getObjectives() {
    return this.objectiveService.findAll();
  }

  @Post()
  postObjectives(@Body() objectivesDTO: ObjectivesDto) {
    return this.objectiveService.postObjective(objectivesDTO);
  }

  @Delete(':id')
  deleteObjectiveById(@Param('id') id: string) {
    return this.objectiveService.deleteObjectiveById(Number(id));
  }

  @Patch(':id')
  patchObjectiveById(
    @Param('id') id: string,
    @Body() objectivesDto: ObjectivesDto,
  ) {
    return this.objectiveService.PatchObjectiveById(Number(id), objectivesDto);
  }
}
