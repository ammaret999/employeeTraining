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
   code: string;
   topic: string;
   description: string;
}