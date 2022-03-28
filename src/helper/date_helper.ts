export const getDate = (d: Date): string => {
  const year = d.getFullYear();
  const month = ('00' + (d.getMonth() + 1)).slice(-2);
  const day = ('00' + d.getDate()).slice(-2);
  return `${year}/${month}/${day}`;
};
