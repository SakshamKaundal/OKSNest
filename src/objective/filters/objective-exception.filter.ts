import {
  Catch,
  ExceptionFilter,
  HttpException,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ObjectiveNotFoundException } from '../../CustomException/ObjectiveNotFound';

@Catch(ObjectiveNotFoundException)
export class ObjectiveNotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    return res
      .status(HttpStatus.NOT_FOUND)
      .send({ message: exception.message });
  }
}
