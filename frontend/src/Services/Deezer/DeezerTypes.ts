export type Root = Root2[]

export interface Root2 {
  data: Data
  name: string
}

export interface Data {
  data: Daum[]
}

export interface Daum {
  id: string
  name: string
  picture: string
  picture_small: string
  picture_medium: string
  picture_big: string
  picture_xl: string
  radio: boolean
  tracklist: string
  type: string
}