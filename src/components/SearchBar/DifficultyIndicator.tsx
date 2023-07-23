import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

import { HARDNESS_LEVELS } from '../../constants';
import DifficultySvg from '../icons/DifficultySvg';

type DifficultyIndicatorProps = {
  difficulty: 1 | 2 | 0;
  time: number;
};

export default function DifficultyIndicator({ difficulty, time }: DifficultyIndicatorProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <DifficultySvg difficulty={difficulty} />
      <Typography
        variant="body2"
        fontWeight={(theme) => theme.typography.fontWeightBold}
        fontFamily={'Bai Jamjuree'}
      >
        {HARDNESS_LEVELS[difficulty]}
      </Typography>
      <Divider orientation="vertical" flexItem />
      <Typography
        variant="body2"
        fontFamily={'Bai Jamjuree'}
        color={(theme) => theme.palette.grey[200]}
      >
        {time}min
      </Typography>
    </Box>
  );
}
