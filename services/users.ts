import { formatResponse, initRequest } from '../utils/requestUtils';

export const createNewUser = async (last_name: string, first_name: string, username: string, birth_day: Date ) => {
    const route = `${process.env.NEXT_PUBLIC_API}/users`;

    const init = initRequest(
        'post',
        {
            body: {
                username: username,
                first_name: first_name,
                last_name: last_name,
                birth_day: birth_day
            }
        }
    )
    return fetch(route, init).then(formatResponse)
}