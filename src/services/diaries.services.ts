// import express from "express"
import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../schemas/diaries.schemas'
import diariesData from './diaries.json'

const diaries = diariesData as DiaryEntry[] // Array<DiaryEntry>

export const getEntries = (): NonSensitiveInfoDiaryEntry[] => (
  diaries.map(({ comment, ...rest }) => ({
    ...rest
  }))
)

class DiariesService {
  getAll (): NonSensitiveInfoDiaryEntry[] {
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

  findOne (id: DiaryEntry['id']): NonSensitiveInfoDiaryEntry {
    const diary = diaries.find((diary) => {
      return diary.id === id
    })

    if (typeof diary === 'undefined') {
      throw new Error("That diary doesn't exist!")
    } else {
      const { comment, ...rest } = diary
      return rest
    }
  }

  deleteOne (id: DiaryEntry['id']): string {
    const diaryIndex = diaries.findIndex((diary) => {
      return diary.id === id
    })
    console.log(id)
    console.log(diaryIndex)
    if (diaryIndex === -1 || isNaN(id)) {
      throw new Error("That diary doesn't exist!")
    } else {
      diaries.splice(diaryIndex, 1)
      return 'It was deleted successfully'
    }
  }
}

export default DiariesService
