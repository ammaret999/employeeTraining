export interface WorkHistory {
    id : number;
    code: string;
    companyName: string;
    startWork: Date;
    endWork: Date;
    description: string;
}

export interface WorkHistoryCreate {
    companyName: string;
    startWork: Date;
    endWork: Date;
    description: string;
}

export interface WorkHistoryEdit {
    code: string;
    companyName: string;
    startWork: Date;
    endWork: Date;
    description: string;
}