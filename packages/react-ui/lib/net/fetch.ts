import { globalThat } from '../SSRSafe';

interface ApiResponseType {
  ok: boolean;
  status: number;
  statusText: string;
  text: () => Promise<string>;
  json: () => Promise<Record<string, any>>;
}

type Result = Promise<ApiResponseType>;

export function fetch(uri: string, options: { method?: 'GET' | 'POST'; body?: string } = {}): Result {
  const method = options.method || 'GET';
  const xhr = createXHR();

  const promise = new Promise<ApiResponseType>((resolve, reject) => {
    xhr.onerror = reject;
    xhr.ontimeout = reject;

    xhr.onload = () => {
      resolve({
        ok: xhr.status >= 200 && xhr.status < 300,
        status: xhr.status,
        statusText: xhr.statusText,
        text: () => Promise.resolve(xhr.responseText),
        json: () => Promise.resolve(JSON.parse(xhr.responseText)),
      });
    };
  });

  xhr.open(method, uri);
  xhr.send(options.body);

  return promise;
}

function createXHR() {
  if ('XDomainRequest' in globalThat) {
    return new XDomainRequest();
  }
  return new XMLHttpRequest();
}
