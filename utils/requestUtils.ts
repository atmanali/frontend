export const isRequestSuccessful = (
  response: Response | { status: number },
) => {
  return response.status == 200;
};

/**
 * @param response
 * @returns response formatted response
 */
export const formatResponse = async (response: Response) => {
  /*
        todo:
            Il faut traîter les différents codes de réponse ici
            et renvoyer les données s'il y en a
     */
  return isRequestSuccessful(response)
    ? { status: response.status, data: await response.json() }
    : { status: response.status };
};

const addBodyToInit = (myInit: RequestInit, body?: {}) => {
  if (body) myInit.body = JSON.stringify(body);
};
export const initRequest = (
  method: string = "get",
  HeadersAndBody?: { headers?: {}; body?: Object },
) => {
  const myHeaders = new Headers({
    "Content-Type": "application/json",
    ...HeadersAndBody?.headers,
  });
  const init: RequestInit = {
    method: method.toUpperCase(),
    headers: myHeaders,
  };
  addBodyToInit(init, HeadersAndBody?.body);
  return init;
};
