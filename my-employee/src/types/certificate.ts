export interface Certificate {
    id : number;
    code : string;
    topic: string;
    description: string;
}

export interface CertificateCreate {
   topic: string;
   description: string;
}

export interface CertificateEdit {
   employeeId : {
        id : number,
        code : string,
    };
   code: string;
   topic: string;
   description: string;
}