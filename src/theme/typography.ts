function pxToRem(value: number) {
  return `${value / 16}rem`;
}

const FONT_PRIMARY = 'Helvetica Neue';
const FONT_SECONDARY = 'Bai Jamjuree';

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    fontSize: pxToRem(40),
    lineHeight: '32px',
  },
  h2: {
    fontWeight: 700,
    fontSize: pxToRem(32),
    lineHeight: '32px',
  },
  h3: {
    fontWeight: 700,
    fontSize: pxToRem(24),
    lineHeight: '32px',
  },
  h4: {
    fontWeight: 700,
    fontSize: pxToRem(20),
    lineHeight: '32px',
  },
  h5: {
    fontSize: pxToRem(18),
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '24px',
  },
  h6: {
    fontWeight: 700,
    fontSize: pxToRem(17),
    lineHeight: '24px',
  },
  subtitle1: {
    fontSize: pxToRem(16),
    fontWeight: 500,
    lineHeight: '24px',
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    fontSize: pxToRem(16),
    fontWeight: 400,
    lineHeight: '24px',
  },
  body2: {
    fontSize: pxToRem(14),
    fontWeight: 400,
    lineHeight: '24px',
  },
  caption: {
    fontSize: pxToRem(13),
    fontWeight: 400,
    lineHeight: '24px',
  },
  overline: {
    fontWeight: 700,
    lineHeight: '24px',
    fontSize: pxToRem(12),
    letterSpacing: 1.1,
    textTransform: 'uppercase',
  },
  button: {
    fontFamily: FONT_SECONDARY,
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
    textTransform: 'capitalize',
  },
} as const;

export default typography;
