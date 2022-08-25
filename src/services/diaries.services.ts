// import express from "express"
import { Diary, NewDiary, NonSensitiveInfoDiary } from '../schemas/diaries.schemas'
import diariesData from './diaries.json'

const diaries = diariesData as Diary[] // Array<Diary>

export const getEntries = (): NonSensitiveInfoDiary[] => (
  diaries.map(({ comment, ...rest }) => ({
    ...rest
  }))
)

class DiariesService {
  getAll (): NonSensitiveInfoDiary[] {
    const diariesWithoutComment = diaries.map(({ comment, ...rest }) => ({
      ...rest
    }))

    return diariesWithoutComment
  }

  create (newDiaryEntry: NewDiary): Diary {
    const newDiary: Diary = {
      id: (diaries.length + 1),
      ...newDiaryEntry
    }

    diaries.push(newDiary)

    return newDiary
  }

  findOne (id: Diary['id']): NonSensitiveInfoDiary {
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

  deleteOne (id: Diary['id']): string {
    const diaryIndex = diaries.findIndex((diary) => {
      return diary.id === id
    })

    if (diaryIndex === -1 || isNaN(id)) {
      throw new Error("That diary doesn't exist!")
    } else {
      diaries.splice(diaryIndex, 1)
      return 'It was deleted successfully'
    }
  }
}

export default DiariesService
