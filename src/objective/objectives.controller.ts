import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseFilters,
  ValidationPipe,
} from '@nestjs/common';
import { ObjectiveService } from './objectives.service';
import { ObjectivesDto } from './objecitvesDTO';
import { NormaliseStringPipePipe } from '../normalise-string-pipe/normalise-string-pipe.pipe';
import { ObjectiveNotFoundExceptionFilter } from './filters/objective-exception.filter';
import { TrademarkExceptionFilter } from './filters/trademark-exception.filter';
// import { ObjectivesDto } from './objecitvesDTO';

@Controller('/objectives')
export class ObjectivesController {
  constructor(private readonly objectiveService: ObjectiveService) {}

  @UseFilters(new ObjectiveNotFoundExceptionFilter())
  @Get('/:objectiveId')
  getObjectives(@Param('objectiveId') objectiveId: string) {
    return this.objectiveService.findObjectiveById(
      Number.parseInt(objectiveId),
    );
  }

  @Get()
  get() {
    return this.objectiveService.findAll();
  }

  @Post()
  postObjectives(
    @Body(new ValidationPipe())
    objectivesDTO: ObjectivesDto,
  ) {
    return this.objectiveService.postObjective(objectivesDTO);
  }

  @Delete(':id')
  deleteObjectiveById(@Param('id') id: string) {
    return this.objectiveService.deleteObjectiveById(Number(id));
  }

  @Patch(':id')
  patchObjectiveById(
    @Param('id', new NormaliseStringPipePipe()) id: string,
    @Body() objectivesDto: ObjectivesDto,
  ) {
    return this.objectiveService.PatchObjectiveById(Number(id), objectivesDto);
  }
}
