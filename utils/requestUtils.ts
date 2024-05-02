export const isRequestSuccessful = (response: Response|{status: number}) => {
    return response.status==200 || response.status==204;
}
export const formatRequest = (response: Response): Promise<{
    status: number;
    data?: {};
}> => {
    console.log('response', response);
    if (isRequestSuccessful(response)) return response.json()
    else return Promise.resolve({ status: 500 })
}

export const initRequest = (method: string = 'get', HeadersAndBody: {headers?: {}, body?: Object}) => {
    const myHeaders = new Headers({
        'Content-Type': 'application/json',
        ...HeadersAndBody.headers
    })
    const init: RequestInit = {
        method: method.toUpperCase(),
        headers: myHeaders,
    }

    if (HeadersAndBody.body) init.body = JSON.stringify(HeadersAndBody.body);

    return init;
}