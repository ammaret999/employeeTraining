export interface Education {
    id : number;
    code : string;
    levelId: {
        id: number,
        code: string,
        level: string
    };
    institution:string;
    description: string;
}

export interface EducationCreate {
    levelId: number;
    institution:string;
    description: string;
}

export interface EducationEdit {
    levelId: number;
    institution:string;
    description: string;
}