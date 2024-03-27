import httpRequest from '@/utils/request'

import { IUserUpdateParams } from '@/types/userType'

export function updateUserApi(data: IUserUpdateParams) {
    return httpRequest.post('/user/update', data)
}