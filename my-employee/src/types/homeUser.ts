export interface Employee {
        id: number,
        code: string,
        titleName: {
            id: number;
            code: string;
            titleName: string;
        },
        firstName: string,
        lastName: string,
        nickName: string,
        birthday: Date,
        image: string,
        gender: {
            id: number;
            code: string;
            gender: string;
        },
        slackName: string,
        phoneNumber: number,
        email: string,
        startDate: Date,
        endDate: Date,
        status: boolean,
        department: {
            id: number;
            code: string;
            department: string;
        },
        position: {
            id: number;
            code: string;
            position: string;
            salaryMin: number;
            salaryMax: number;
        }
        [key: string]: any;
}

export interface EmployeePost {
        titleName: number,
        firstName: string,
        lastName: string,
        nickName: string,
        birthday: Date,
        gender: number,
        slackName: string,
        phoneNumber: number,
        email: string,
        startDate: Date,
        department: number,
        position: number,
}

export interface EmployeeEdit {
        titleName: number,
        firstName: string,
        lastName: string,
        nickName: string,
        birthday: Date,
        gender: number,
        slackName: string,
        phoneNumber: number,
        email: string,
        startDate: Date,
        endDate: Date,
        department: number,
        position: number
}

export interface EmployeeTest {
        titleName: {
            id: number;
            code: string;
            titleName: string;
        },
        firstName: string,
        lastName: string,
        nickName: string,
        birthday: Date,
        gender: {
            id: number;
            code: string;
            gender: string;
        },
        slackName: string,
        phoneNumber: number,
        email: string,
        startDate: Date,
        endDate: Date,
        department: {
            id: number;
            code: string;
            department: string;
        },
        position: {
            id: number;
            code: string;
            position: string;
            salaryMin: number;
            salaryMax: number;
        }
}


