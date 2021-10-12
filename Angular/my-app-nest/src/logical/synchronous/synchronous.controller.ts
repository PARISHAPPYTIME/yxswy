import {
  Controller,
  Get,
  UseGuards,
  Request,
  Post,
  Body,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SynchronousService } from './synchronous.service';

@Controller('synchronous')
export class SynchronousController {
  constructor(private syncshService: SynchronousService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getSynchronous(@Request() req) {
    return this.syncshService.findSynchronous(req.user.userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  setSyncronous(@Request() req) {
    console.log(req.user, req.body);
    return this.syncshService.createSynchronous(
      req.user.userId,
      req.body?.content,
    );
  }
}
