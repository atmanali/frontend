import { formatRequest, initRequest } from './requestUtils';
import { AuthenticationModel } from '../model/AuthenticationModel';

export const login = ({username, password}: AuthenticationModel) => {
    const init = initRequest(
        'post',
        {

            body: {
                username: username,
                password: password,
            }
        })
    const route = `http://localhost:8050/authentication/login`
    return fetch(route, init)
        .then(formatRequest)
}