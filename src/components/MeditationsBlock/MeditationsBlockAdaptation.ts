export const MeditationsBlockAdaptation = (width: number) => ({
  getTitleClass: () => {
    if (width <= 639) {
      return 'body-text'
    } else if (width >= 640 && width <= 1439) {
      return 'body-text body-text--secondary'
    } else {
      return 'title title--H5'
    }
  },

  getSubtitleClass: () => {
    return width <= 1439 ? 'body-text body-text--small-text' : 'title title--H5';
  },
});