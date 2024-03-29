export interface UserRegister {
    name: string;
    noHp: string;
    password: string;
    confirmPassword: string;
}

export interface UserLogin {
    username: string;
    password: string;
}

export interface User {
    confirmPassword: string;
    name: string;
    noHp: string;
    password: string;
}

