import { CommonObject } from "./common"

export interface ILoginParams {
    account: string,
    password: string
}
export interface ILoginResult {
    token: string,
    userInfo: CommonObject
}

export interface IUserUpdateParams {
    name?: string,
    age?: number,
    gender: string
}