const COLORS = {
  // WHITE
  WHITE: '#ffffff',
  WHITE_1: '#f3f4f8',
  EXTRA_WHITE: '#eeeeee',
  DARK_WHITE: '#f4f5f8',

  // GRAY
  GRAY: '#d2d9e5',
  GRAY_1: '#f2f4f8',
  GRAY_2: '#e4e9f0',
  GRAY_5: '#a1a1c2',
  GRAY_6: '#595c97',
  GRAY_7: '#9ba6c0',
  GRAY_8: '#b9bdcc',
  GRAY_9: '#3b4577',
  GRAY_10: '#d9dade',
  GRAY_11: '#636c84',
  GRAY_12: '#b8b8b8',
  GRAY_13: '#a4b1c7',
  GRAY_14: '#4b505e',
  GRAY_15: '#61687a',
  GRAY_16: '#c9cfdd',
  GRAY_17: '#edeef1',
  GRAY_18: '#9c9d9f',
  GRAY_19: '#e0e5f0',
  GRAY_20: '#7a808c',
  GRAY_21: '#dde4f3',
  GRAY_22: '#242b5d',
  GRAY_23: '#e7e7e7',
  GRAY_24: '#dbdee6',
  GRAY_25: '#dcdcdc',
  BRIGHT_GRAY: '#e5ecf5',
  SOLITUDE_GRAY: '#eff0f2',
  GRAY_LIGHTEN: '#eef0f4',
  GRAY_LIGHTEN_MORE: '#f2f4f8',
  GRAY_LIGHTEN_MORE_MORE: '#f9fafc',
  VERY_DARK_GRAY: '#182b50',
  GREY: '#585858',

  // BLUE
  BLUE: '#4b7cf3',
  BLUE_1: '#003399',
  BLUE_2: '#0041a0',
  BLUE_3: '#1252b1',
  BLUE_4: '#032d41',
  BLUE_5: '#6699ff',
  BLUE_6: '#1890ff',
  BLUE_7: '#006cb7',
  BLUE_8: '#e6ebf8',
  BLUE_9: '#3a63b4',
  DARK_BLUE: '#243b68',
  METALLIC_BLUE: '#2a467d',
  BLUE_MAINSTREAM: '#7498c9',
  LIGHT_BLUE: '#edeff4',
  LIGHT_BLUE_2: '#0081c9',
  LIGHT_BLUE_3: '#d8dce6',

  // GREEN
  SEA_GREEN: '#2E8B57',
  LIGHT_SEA_GREEN: '#20B2AA',

  // BLACK
  BLACK: '#000000',
  BLACK_1: '#141322',

  // RED
  RED: '#ff0000',
  RED_1: '#f9d2b9',
  RED_ORANGE: '#ff4128',
  PALE_VIOLET_RED: '#DB7093',
  MEDIUM_VIOLET_RED: '#C71585',

  // BROWE
  CHARCOAL: '#363f4e',

  // PURPLE
  PURPLE_NAVY: '#434d7d',

  // PINK
  PINK: '#FFC0CB',
  LIGHT_PINK: '#FFB6C1',
  HOT_PINK: '#FF69B4',
  DEEP_PINK: '#FF1493',

  // OTHERS
  ONYX: '#393939',
  HOVER_OPTION: 'rgba(24, 144, 255, 0.65)',

  MENU_BG: '#001529',
};

export const defaultTheme = {
  COLORS,
  colorStyled: {
    white: '#ffffff',
    primary: '#333',
    success: '#41b883',
    info: '#42baf9',
    warning: '#faad15',
    danger: '#f5222e',
    light: '#f2f4f8',

    notificationColor: {
      success: '#b7eb8f',
      error: '#ffccc7',
      warning: '#ffe58f',
      info: '#91d5ff',
    },
  },

  responsiveUtils: {
    xxlMinWidth: '1600px',
    xxlMaxWidth: '1599px',
    xlMinWidth: '1200px',
    xlMaxWidth: '1199px',
    lgMinWidth: '992px',
    lgMaxwidth: '991px',
    mdMinWidth: '768px',
    mdMaxWidth: '767px',
  },

  rem: (px: number, base = 10) => {
    const remCalc = Math.floor((px / base) * 100) / 100;
    return `${remCalc}rem`;
  },
};
