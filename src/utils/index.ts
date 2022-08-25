// import { NewDiaryEntry } from '../schemas/diaries.schemas'
import { Visibility, Weather } from '../schemas/enums'

export const toNewDiary = ({ date, weather, comment, visibility }: any): any => {
  return {
    date: parseDate(date),
    weather: parseWeather(weather),
    visibility: parseVisibility(visibility),
    comment: parseComment(comment)
  }
}

export const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment!')
  }

  return commentFromRequest
}

export const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing Weather!')
  }

  return weatherFromRequest
}

export const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date!')
  }

  return dateFromRequest
}

export const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility!')
  }

  return visibilityFromRequest
}

export const isString = (string: unknown): boolean => {
  return (typeof string === 'string' || string instanceof String)
}

export const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

export const isVisibility = (visibility: Visibility): boolean => {
  return Object.values(Visibility).includes(visibility)
}

export const isWeather = (weather: Weather): boolean => {
  return Object.values(Weather).includes(weather)
}
