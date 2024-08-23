export const WebinarDisplayStyles = (width: number) => ({
  getDateClass: () => {
    return width <= 1439 ? 'body-text' : 'title title--H6';
  },

  getCommentClass: () => {
    return width <= 1439 ? 'body-text body-text--secondary' : 'body-text';
  },

  getKyivTimeClass: () => {
    return width <= 640 ? 'body-text body-text--small-text' : 'body-text body-text--secondary';
  },
});