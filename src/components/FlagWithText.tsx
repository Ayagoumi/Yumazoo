import { Box, Typography } from '@mui/material';
import React from 'react';

import CountryFlag from './CountryFlag';

type FlagWithTextProps = {
  code: string;
  text: string;
};

export default function FlagWithText({ code, text }: FlagWithTextProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          flexShrink: 0,
        }}
      >
        <CountryFlag code={code} />
      </Box>
      <Typography
        variant="body1"
        noWrap
        fontWeight={(theme) => theme.typography.fontWeightRegular}
        fontFamily={'Bai Jamjuree'}
        sx={{
          maxWidth: '100%',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          textTransform: 'capitalize',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
