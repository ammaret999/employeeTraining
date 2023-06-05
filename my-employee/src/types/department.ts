export interface Department {
  id: number;
  code: string;
  department: string;
}

export interface DepartmentCreate {
   department: string;
}

export interface DepartmentEdit {
   code: string;
   department: string;
}