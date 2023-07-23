import { Box, Typography } from '@mui/material';
import React from 'react';

import CountryFlag from '../CountryFlag';

type SearchMenuItemProps = {
  code: string;
  dishName: string;
};

export default function SearchMenuItem({ code, dishName }: SearchMenuItemProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        width: '60%',
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
        fontWeight={(theme) => theme.typography.fontWeightMedium}
        fontFamily={'Bai Jamjuree'}
        sx={{
          maxWidth: '100%',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          textTransform: 'capitalize',
        }}
      >
        {dishName.toLowerCase()}
      </Typography>
    </Box>
  );
}
