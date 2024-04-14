export function getBaseUrl(url: string = '') {
  const safeUrl = url.replace(/^\/+/, '');

  if (safeUrl === '' || safeUrl === '/') {
    return import.meta.env.BASE_URL;
  }
  return `${import.meta.env.BASE_URL}${safeUrl}`;
}
