import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ObjectivesModule } from './objective/objectives.module';

@Module({
  imports: [
    ObjectivesModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
