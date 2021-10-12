import { Module } from '@nestjs/common';
import { SynchronousController } from './synchronous.controller';
import { SynchronousService } from './synchronous.service';

@Module({
  controllers: [SynchronousController],
  providers: [SynchronousService],
})
export class SynchronousModule {}
