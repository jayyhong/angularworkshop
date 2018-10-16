export interface VideoDetails {
  age: number,
  region: string,
  date: string
}

export interface Video {
  title: string,
  id: string,
  author: string,
  viewDetails: VideoDetails[];
}

export interface Filter {
  region: string,
  minDate: string,
  maxDate: string,
  minor: boolean,
  adult: boolean,
  middleAge: boolean,
  senior: boolean
}