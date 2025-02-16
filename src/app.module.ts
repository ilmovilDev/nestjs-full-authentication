import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { FunctionalitiesModule } from './functionalities/functionalities.module';
import appConfig from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig]
    }),
    DatabaseModule,
    CommonModule,
    FunctionalitiesModule, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
