import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.get('authorization');
    console.log(authHeader);
    return next();
    if (authHeader) {
      if (authHeader === 'HEllo') {
        return next();
      }
    } else {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  }
}
