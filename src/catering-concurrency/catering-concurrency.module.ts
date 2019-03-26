import { Module } from '@nestjs/common';
import { CateringConcurrencyController } from './catering-concurrency.controller';

@Module({
    controllers: [CateringConcurrencyController],
})
export class CateringConcurrencyModule {}