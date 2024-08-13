import { Request } from 'express';

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  index(req: Request) {
    const url = `${req.protocol}://${req.headers.host}`;
    return {
      url,
    };
  }
}
