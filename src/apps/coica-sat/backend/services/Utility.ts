import {Request} from 'express';

export const getPaginationFromQuery  = (req: Request): { pageNumber: number; nPerPage: number } => {
  const { pageNumber, nPerPage } = req.query as { pageNumber: string; nPerPage: string };
  return {
    pageNumber: Number(pageNumber) || 1,
    nPerPage: Number(nPerPage) || 10
  };
}
