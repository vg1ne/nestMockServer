import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CateringConcurrencyModule } from "./catering-concurrency/catering-concurrency.module";

@Module({
  imports: [CateringConcurrencyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
