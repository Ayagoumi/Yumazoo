import type { Theme } from '@mui/material';

export default function MenuItem(theme: Theme) {
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
          },
          padding: '6px 8px',
          borderRadius: theme.shape.borderRadiusSm,
          background: theme.palette.primary.main,
          gap: '10px',
        },
      },
    },
  };
}
