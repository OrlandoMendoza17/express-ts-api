// import express from "express"
import { DiaryEntry, NonSensitiveInfo_DiaryEntry } from '../types'
import diariesData from './diaries.json'

const diaries = diariesData as DiaryEntry[] // Array<DiaryEntry>

export const getEntries = (): NonSensitiveInfo_DiaryEntry[] => (
  diaries.map(({ comment, ...rest }) => ({
    ...rest
  }))
)
