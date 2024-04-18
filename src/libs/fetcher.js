export const fetcher = async url => {
  const api = await fetch(url);
  const response = await api.json();
  return response
}