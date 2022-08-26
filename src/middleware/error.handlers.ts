import { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'
import createError from 'http-errors'

export const zodErrorHandler = (
  error: unknown, _request: Request, response: Response, next: NextFunction
): void => {
  console.log('ZodError Handler')

  if (error instanceof ZodError) {
    const httpError = new createError.BadRequest()

    const { issues } = error
    const { statusCode, message, name } = httpError

    response.status(statusCode).json({
      statusCode, name, issues, message
    })
  } else {
    next(error)
  }
}

export const httpErrorHandler = (
  error: unknown, _request: Request, response: Response, next: NextFunction
): void => {
  console.log('HttpError Handler')

  if (createError.isHttpError(error)) {
    const { statusCode, message, name } = error

    response.status(statusCode).json({ statusCode, name, message })
  } else {
    next(error)
  }
}

export const errorHandler = (
  error: unknown, _request: Request, response: Response, _next: NextFunction
): void => {
  console.log('Error Handler')

  if (error instanceof Error) {
    const httpError = new createError.InternalServerError()
    const { statusCode, message, name } = httpError

    response.status(statusCode).json({ statusCode, message, name })
  }
}
