import {NextFunction, Request, Response} from "express";
import httpStatus from 'http-status';

export const validateBody = (schema: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.validate(req.body);
    if (result.error) {
      return res.status(httpStatus.BAD_REQUEST).json({
        error: result.error.details[0].message
      });
    }
    next();
  };
}
