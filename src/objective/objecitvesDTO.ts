import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ObjectivesDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  keyResult: KeyResultDTO[];
}

class KeyResultDTO {
  description: string;
  @IsNumber()
  progress: number;
}
