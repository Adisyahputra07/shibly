import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { DataToken } from '../types';
import Logger from './loggerHandlers';

const SECRET_KEY = process.env.SECRET_KEY || "jksfd8hr389rqiohjnsda";

// Extend Express Request interface to include 'user'
declare global {
  namespace Express {
    interface Request {
      user?: DataToken;
    }
  }
}

// ...existing code...
function authPreHandler(req: Request, res: Response, next: NextFunction): void {
  const token = req.header('Authorization');
  try {
    if (!token || !SECRET_KEY) {
      res.status(401).json({ error: 'Unauthorized' });
      Logger.error('Unauthorized access attempt: No token provided');
      return;
    }

    const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload;;
    if (
      typeof decoded === 'object' &&
      decoded !== null &&
      'userToken' in decoded &&
      'id' in decoded.userToken &&
      'exp' in decoded
    ) {
      req.user = decoded.userToken as DataToken;
      next();
    } else {
      res.status(403).json({ error: 'Invalid token payload' });
      Logger.error('Invalid token payload detected');
      return;
    }
  } catch (error) {
    res.status(403).json({ error: 'Access Denied' });
    Logger.error(`Access denied: ${error instanceof Error ? error.message : 'Unknown error'}`);
    return;
  }
}

export default authPreHandler;