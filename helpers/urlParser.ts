export const urlParser = (input: string) => {
  const urlRegex = /<https?:\/\/[^>]+>/g;
  const matches = input.match(urlRegex);
  if (matches && matches.length > 0) {
    return matches[0].slice(1, -1);
  }
  return null;
};
