import { Box, Divider, IconButton, Typography } from '@mui/material';
import React, { useContext } from 'react';

import { PageContext } from '../..';
import LeftArrow from '../icons/LeftArrow';

type FormHeaderProps = {
  title: string;
};

export default function FormHeader({ title }: FormHeaderProps) {
  const { setPage } = useContext(PageContext);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <IconButton sx={{ p: 0 }} disableRipple onClick={() => setPage('HOME')}>
          <LeftArrow width="24px" height="25px" fill="white" />
        </IconButton>
        <Typography variant="h5" fontFamily="Bai Jamjuree">
          {title}
        </Typography>
      </Box>
      <Divider />
    </Box>
  );
}
