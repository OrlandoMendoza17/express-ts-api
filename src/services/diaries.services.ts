// import express from "express"
import { DiaryEntry, NewDiaryEntry, NonSensitiveInfo_DiaryEntry } from '../types'
import diariesData from './diaries.json'

const diaries = diariesData as DiaryEntry[] // Array<DiaryEntry>

export const getEntries = (): NonSensitiveInfo_DiaryEntry[] => (
  diaries.map(({ comment, ...rest }) => ({
    ...rest
  }))
)

class DiariesService {
  getEntries (): NonSensitiveInfo_DiaryEntry[] {
    const diariesWithoutComment = diaries.map(({ comment, ...rest }) => ({
      ...rest
    }))

    return diariesWithoutComment
  }

  create (newDiaryEntry: NewDiaryEntry): DiaryEntry {
    const newDiary: DiaryEntry = {
      id: (diaries.length + 1),
      ...newDiaryEntry
    }

    diaries.push(newDiary)

    return newDiary
  }

  findOne (id: number): NonSensitiveInfo_DiaryEntry | undefined {
    const diary = diaries.find((diary) => {
      return diary.id === id
    })

    if (typeof diary !== 'undefined') {
      const { comment, ...rest } = diary
      return rest
    }

    return undefined
  }
}

export default DiariesService
