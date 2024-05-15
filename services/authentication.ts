import { formatRequest, initRequest } from '../utils/requestUtils';
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
    return fetch(route, init).then(formatRequest)
}