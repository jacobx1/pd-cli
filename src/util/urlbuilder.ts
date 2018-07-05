import { URL } from 'url';

const parseParams = (params: object) =>
  Object.keys(params)
    .map(key => `${key}=${encodeURIComponent(params[key])}`)
    .join('&');

export const buildUrl = (base: string, path: string, params: object) => {
  const url = new URL(path, base);
  url.search = `?${parseParams(params)}`;
  return url;
};
