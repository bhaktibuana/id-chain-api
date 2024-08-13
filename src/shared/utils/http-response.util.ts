import { Response } from 'express';

import { AppError } from '@/shared/utils/app-error.util';
import { ErrCode } from '@/shared/constants';
import { I_HttpResponse, I_HttpResponseError } from '@/shared/interfaces';

export class HttpResponse {
  constructor() {}

  public static success<T>(
    message: string,
    statusCode: number,
    res: Response,
    data: T | null = null,
    errorCode: string = '',
  ): void {
    const payload: I_HttpResponse<T> = {
      message,
      status: statusCode >= 200 && statusCode < 300,
      status_code: statusCode,
      error_code: errorCode,
      data,
    };
    res.status(statusCode).json(payload);
  }

  public static error(error: any, res: Response) {
    if (error instanceof AppError) {
      HttpResponse.success(
        error.message,
        error.statusCode,
        res,
        null,
        error.errorCode,
      );
    } else {
      const payload: I_HttpResponseError = {
        message: ErrCode['ISE_001'].message,
        status: false,
        status_code: 500,
        error_code: ErrCode['ISE_001'].code,
        error,
      };
      res.status(500).json(payload);
    }
  }
}
