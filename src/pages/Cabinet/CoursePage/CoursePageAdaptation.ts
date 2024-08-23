export const CoursePageStyles = (width: number) => ({
  getTitleClass: () => {
    return width <= 1439 ? 'title title--H5' : 'title title--H1';
  },

  getMeditationTitleClass: () => {
    return width <= 1439 ? 'body-text body-text--secondary' : 'title title--H5';
  },

  getSubtitleClass: () => {
    return width <= 1439 ? 'title title--H6' : 'title title--H5';
  },
});