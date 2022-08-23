export type Weather = | 'rainy' | 'sunny' | 'windy' | 'cloudy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor' | 'bad'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

export interface NonSensitiveInfo_DiaryEntry extends Omit<DiaryEntry, 'comment'>{}

// export interface SpecialDiaryEntry extends Diary {
//   flighNumber: number
// }
