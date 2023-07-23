import { Box, Typography } from '@mui/material';
import React from 'react';

import { HARDNESS_LEVELS, HARDNESS_LEVELS_COLOR } from '../constants';

type RecipeDescriptionProps = {
  description: string;
  difficulty: number;
};

export default function RecipeDescription({ description, difficulty }: RecipeDescriptionProps) {
  const logo = chrome.runtime.getURL('img/paneer.png');
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: (theme) => theme.palette.primary.light,
        padding: '10px',
        borderRadius: (theme) => theme.shape.borderRadiusSm,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          backgroundColor: HARDNESS_LEVELS_COLOR[difficulty],
          width: '100%',
          borderRadius: (theme) => theme.shape.borderRadiusSm,
          padding: '10px 20px',
          gap: '8px',
        }}
      >
        <Box sx={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
          <img src={logo} alt="recipe" width="27px" height="28px"></img>
          <Typography variant="h5">Difficulty: {HARDNESS_LEVELS[difficulty]}</Typography>
        </Box>
        <Typography variant="body1">{description}</Typography>
      </Box>
    </Box>
  );
}
