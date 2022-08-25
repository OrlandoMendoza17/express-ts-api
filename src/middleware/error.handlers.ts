import { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'

export const zodErrorHandler = (
  error: unknown, _request: Request, response: Response, next: NextFunction
): void => {
  if (error instanceof ZodError) {
    response.status(400).json(error.issues)
  }

  next(error)
}

export const errorHandler = (
  error: unknown, _request: Request, response: Response, _next: NextFunction
): void => {
  if (error instanceof Error) {
    const { name, message } = error
    response.status(500).json({ name, message })
  }
}
