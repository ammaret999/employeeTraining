export interface Position {
  id: number;
  code: string;
  position: string;
  salaryMin: number;
  salaryMax: number;
}

export interface PositionCreate {
  position: string;
  salaryMin: number;
  salaryMax: number;
}

export interface PositionEdit {
  code: string;
  position: string;
  salaryMin: number;
  salaryMax: number;
}