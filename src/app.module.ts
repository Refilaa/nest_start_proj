import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';
import { CatsControllerController } from './cats-controller/cats-controller.controller';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsControllerController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
