export const checkDate = new Date()
  .toLocaleString()
  .split(',')[0]
  .split('/')
  .reverse()
  .join('-');
