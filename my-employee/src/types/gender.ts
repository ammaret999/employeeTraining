export interface Gender {
  id: number;
  code: string;
  gender: string;
}
export interface GenderCreate {
   gender: string;
}

export interface GenderEdit {
   code: string;
   gender: string;
}