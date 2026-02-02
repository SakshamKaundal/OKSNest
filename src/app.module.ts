import { Module } from '@nestjs/common';
import { ObjectivesModule } from './objective/objectives.module';

@Module({
  imports: [ObjectivesModule],
})
export class AppModule {}
