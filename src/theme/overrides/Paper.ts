export default function Paper() {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      },
    },
  };
}
