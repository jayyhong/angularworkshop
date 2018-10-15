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