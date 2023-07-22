import type { Theme } from '@mui/material/styles';

export default function Select(theme: Theme) {
  const borderRadius = theme.shape.borderRadiusSm;
  const { grey } = theme.palette;
  const boxShadow = '0px 0px 0px 1px #663CDD inset, 0px 0px 0px 4px #B89FFF';
  const baseBoxShadow = '0px 0px 0px 1px #5B6178';

  return {
    MuiSelect: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-input': {
            padding: '8px 11px',
            '&::placeholder': {
              color: grey[300],
              fontFamily: 'Helvetica Neue',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: theme.typography.fontWeightRegular,
              lineHeight: '24px',
            },
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderRadius,
            borderColor: 'transparent !important',
            borderWidth: '0 !important',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            boxShadow,
          },
          '& .Mui-focused fieldset': {
            boxShadow,
            padding: 0,
          },
          borderRadius,
          backgroundColor: grey[900],
          boxShadow: baseBoxShadow,
          height: '40px',
          fontFamily: 'Helvetica Neue',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: theme.typography.fontWeightRegular,
          lineHeight: '24px',
        },
      },
      defaultProps: {
        MenuProps: {
          PaperProps: {
            style: {
              backgroundColor: theme.palette.primary.main,
              marginTop: '11px',
              borderRadius,
              fontFamily: 'Helvetica Neue',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: theme.typography.fontWeightRegular,
              lineHeight: '24px',
            },
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: '8px',
        },
      },
    },
  };
}
