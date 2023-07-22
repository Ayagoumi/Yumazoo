import type { Theme } from '@mui/material/styles';

export default function TextField(theme: Theme) {
  const borderRadius = theme.shape.borderRadiusSm;
  const { grey } = theme.palette;
  const boxShadow = '0px 0px 0px 1px #663CDD inset, 0px 0px 0px 4px #B89FFF';
  const baseBoxShadow = '0px 0px 0px 1px #5B6178';

  return {
    MuiTextField: {
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
          backgroundColor: grey[900],
          borderRadius,
          boxShadow: baseBoxShadow,
          height: '40px',
          fontFamily: 'Helvetica Neue',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: theme.typography.fontWeightRegular,
          lineHeight: '24px',
        },
      },
    },
  };
}
