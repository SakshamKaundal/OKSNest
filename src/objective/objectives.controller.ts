import { Controller, Get } from "@nestjs/common";
import { ObjectiveService } from "./objectives.modules";


@Controller('/objectives')
export class ObjectivesController {
  constructor(private readonly objectiveService: ObjectiveService) {}
  
  @Get()
  getObjectives() {
    return this.objectiveService.findAll
  }

  }
