export const MyCourseDetailsStyles = (width: number) => ({
  getTitleClass: () => {
    return width <= 1439 ? 'title title--H6' : 'title title--H4';
  },

  getSubtitleClass: () => {
    return width <= 1439 ? 'title title--H7' : 'title title--H6';
  },

  getPercentageClass: () => {
    return width <= 640 ? 'body-text body-text--small-text' : 'body-text body-text--secondary';
  },
});