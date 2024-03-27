import httpRequest from '@/utils/request'
import { ILoginParams, ILoginResult } from '@/types/userType'

type CodeType = {
    code: string
}


export function loginApi(data: ILoginParams) {
    return httpRequest.post<ILoginResult>('/sys/login', data)
}
export function registerApi(data: any) {
    return httpRequest.post('/sys/register', data)
}
export function getSignUpCodeApi() {
    return httpRequest.get<CodeType>('/sys/signUpCode')
}

export function getInfo() {
    return httpRequest.get('/sys/info')
}