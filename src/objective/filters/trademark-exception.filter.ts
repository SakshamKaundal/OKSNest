import {
  Catch,
  ExceptionFilter,
  HttpException,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { TradeMarkException } from '../../CustomException/TradeMarkException';

@Catch(TradeMarkException)
export class TrademarkExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    return res
      .status(HttpStatus.FORBIDDEN)
      .send({ message: exception.message });
  }
}
