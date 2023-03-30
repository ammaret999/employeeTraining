export interface Employee {
        "id": number,
        "code": string,
        "titleName": {
            id: number;
            code: string;
            titleName: string;
        },
        "firstName": string,
        "lastName": string,
        "nickName": string,
        "birthday": Date,
        "image": string,
        "gender": {
            id: number;
            code: string;
            gender: string;
        },
        "slackName": string,
        "phoneNumber": number,
        "email": string,
        "startDate": Date,
        "endDate": Date,
        "status": boolean,
        "department": {
            id: number;
            code: string;
            department: string;
        },
        "position": {
            id: number;
            code: string;
            position: string;
            salaryMin: number;
            salaryMax: number;
        }
}