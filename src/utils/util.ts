import {
  BACKGROUND_COLOR,
  BACKGROUND_COLOR_HOVER,
  BORDER_COLOR,
  BORDER_COLOR_HOVER,
} from "./constants";
export const getColor = (index: any) => {
  if (index > 0 && index <= 10) {
    return {
      backgroundColor: BACKGROUND_COLOR[0],
      backgroundColorHover: BACKGROUND_COLOR_HOVER[0],
      borderColor: BORDER_COLOR[0],
      borderColorHover: BORDER_COLOR_HOVER[0],
    };
  } else if (index > 11 && index <= 20) {
    return {
      backgroundColor: BACKGROUND_COLOR[1],
      backgroundColorHover: BACKGROUND_COLOR_HOVER[1],
      borderColor: BORDER_COLOR[1],
      borderColorHover: BORDER_COLOR_HOVER[1],
    };
  } else if (index > 21 && index <= 30) {
    return {
      backgroundColor: BACKGROUND_COLOR[2],
      backgroundColorHover: BACKGROUND_COLOR_HOVER[2],
      borderColor: BORDER_COLOR[2],
      borderColorHover: BORDER_COLOR_HOVER[2],
    };
  } else if (index > 31 && index <= 40) {
    return {
      backgroundColor: BACKGROUND_COLOR[3],
      backgroundColorHover: BACKGROUND_COLOR_HOVER[3],
      borderColor: BORDER_COLOR[3],
      borderColorHover: BORDER_COLOR_HOVER[3],
    };
  } else if (index > 41 && index <= 50) {
    return {
      backgroundColor: BACKGROUND_COLOR[4],
      backgroundColorHover: BACKGROUND_COLOR_HOVER[4],
      borderColor: BORDER_COLOR[4],
      borderColorHover: BORDER_COLOR_HOVER[4],
    };
  } else {
    return {
      backgroundColor: BACKGROUND_COLOR[5],
      backgroundColorHover: BACKGROUND_COLOR_HOVER[5],
      borderColor: BORDER_COLOR[5],
      borderColorHover: BORDER_COLOR_HOVER[5],
    };
  }
};
