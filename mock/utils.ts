/**
 * {token: "1212121212"}
 * @param url asdbakd?token=123231312
 */
export const param2Obj = (url: string) => {
  const search = url.split('?')[1];

  if (!search) {
    return {};
  }

  return JSON.parse(
    '{"' +
    // decodeURIComponent(search)
    search
      // .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"') +
    '"}',
  );
};
