import { Box, Button, Typography } from '@mui/material';
import React, { useContext } from 'react';

import { PageContext } from '..';
import FlagWithText from './FlagWithText';
import IconButton from './IconButton';
import Medium from './icons/Medium';
import Telegram from './icons/Telegram';
import Twitter from './icons/Twitter';

type RecipeHeaderProps = {
  code: string;
  recipeName: string;
};

export default function RecipeHeader({ code, recipeName }: RecipeHeaderProps) {
  const { setPage } = useContext(PageContext);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <FlagWithText code={code} text={recipeName} />

      <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', minWidth: '183px' }}>
        <IconButton Icon={Twitter} />
        <IconButton Icon={Telegram} />
        <IconButton Icon={Medium} />

        <Button
          disableRipple
          disableElevation
          variant="contained"
          color="primary"
          sx={{
            display: 'flex',
            padding: '7px',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '4px',
            minWidth: 'unset',
            gap: '5px',
            height: '24px',
          }}
          onClick={() => setPage('ADD_RECIPE')}
        >
          <Typography
            variant="body1"
            fontWeight={(theme) => theme.typography.fontWeightMedium}
            fontSize={'13px'}
          >
            + Add recipe
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
