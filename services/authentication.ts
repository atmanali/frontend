import { formatResponse, initRequest } from '../utils/requestUtils';
import { AuthenticationModel } from '../model/AuthenticationModel';

export const login = async ({username, password}: AuthenticationModel) => {
    const route = `${process.env.NEXT_PUBLIC_API}/authentication/login`
    const init = initRequest(
        'post',
        {
            body: {
                username: username,
                password: password,
            }
        })
    return fetch(route, init).then(formatResponse)
}

export const getAuthInformation = async (username: string) => {
    const route = `${process.env.NEXT_PUBLIC_API}/authentication?username=${username}`;
    const init = initRequest();
    return fetch(route, init).then(formatResponse)
}

export const createNewAuth = async (username: string, password: string, role: string ) => {
    const route = `${process.env.NEXT_PUBLIC_API}/authentication/createNewUser`;
    const init = initRequest(
        'post',
        {
            body: [{
                username: username,
                password: password,
                role: role,
            }]
        }
    )
    return fetch(route, init).then(formatResponse)
}