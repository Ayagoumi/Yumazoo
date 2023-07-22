import { alpha } from '@mui/material';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
}

const PRIMARY = {
  lighter: '#1F2A44',
  light: '#181F30',
  main: '#121826',
  dark: '#171F2F',
  darker: '#0D1119',
};

const SECONDARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
  darker: '#091A7A',
};

const SUCCESS = {
  lighter: '#17CFC4',
  light: '#19B9B3',
  main: '#17CFC4',
  dark: '#128E8D',
  darker: '#0C5F5E',
};

const WARNING = {
  lighter: '#F63B00',
  light: '#F63B22',
  main: '#F63B00',
  dark: '#B72E00',
  darker: '#7A1D00',
};

const ERROR = {
  lighter: '#FB2047',
  light: '#FB2045',
  main: '#FB2047',
  dark: '#B71833',
  darker: '#7A0F22',
};

const GREY = {
  0: '#FFFFFF',
  100: '#E9EAF6',
  200: '#AEB5C1',
  300: '#7185AA',
  400: '#43495E',
  500: '#2E3347',
  600: '#1F2A44',
  700: '#181F30',
  800: '#171F2F',
  900: '#131823',
  1000: '#0D1119',
};

const ACTION_PRIMARY = '#764AF4';

const ACTIONS = {
  active: ACTION_PRIMARY,
  hover: alpha(ACTION_PRIMARY, 0.08),
  selected: alpha(ACTION_PRIMARY, 0.16),
  disabled: alpha(ACTION_PRIMARY, 0.48),
  disabledBackground: alpha(ACTION_PRIMARY, 0.24),
  focus: alpha(ACTION_PRIMARY, 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY, contrastText: '#fff' },
  secondary: { ...SECONDARY, contrastText: '#fff' },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: '#fff' },
  grey: GREY,
  divider: GREY[600],
  action: ACTIONS,
};

const palette = {
  light: {
    ...COMMON,
    text: { primary: '#fff', secondary: GREY[500], disabled: GREY[600] },
    background: {
      paper: GREY[800],
      default: PRIMARY.darker,
      grey: GREY[500],
    },
    action: { ...COMMON.action },
  },
  dark: {
    ...COMMON,
    text: { primary: '#fff', secondary: GREY[500], disabled: GREY[600] },
    background: {
      paper: GREY[800],
      default: PRIMARY.darker,
      grey: GREY[500],
    },
    action: { ...COMMON.action },
  },
};

export default palette;
