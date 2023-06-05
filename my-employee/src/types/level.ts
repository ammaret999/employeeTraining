export interface Level {
  id: number;
  code: string;
  level: string;
}

export interface LevelCreate {
   level: string;
}

export interface LevelEdit {
  code: string;
  level: string;
}