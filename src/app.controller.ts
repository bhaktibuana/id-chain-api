import { Request, Response } from 'express';
import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { AppService } from '@/app.service';
import { HttpResponse, Str } from '@/shared/utils';
import { ErrCode } from './shared/constants';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index(@Req() req: Request, @Res() res: Response): void {
    try {
      const indexPayload = this.appService.index(req);
      HttpResponse.success(
        ErrCode['ISE_001'].message,
        HttpStatus.OK,
        res,
        indexPayload,
      );
    } catch (error) {
      HttpResponse.error(error, res);
    } finally {
      return;
    }
  }
}
