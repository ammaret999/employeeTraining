export interface TitleName {
  id: number;
  code: string;
  titleName: string;
}

export interface TitleNameCreate {
   titleName: string;
}

export interface TitleNameEdit {
   code: string;
   titleName: string;
}
