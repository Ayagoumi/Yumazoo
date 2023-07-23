import { Button } from '@mui/material';
import React from 'react';

type IconButtonProps = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export default function IconButton({ Icon, ...props }: IconButtonProps) {
  return (
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
        gap: '5px',
        borderRadius: '100%',
        minWidth: 'unset',
      }}
      {...props}
    >
      <Icon width="10px" height="10px" fill="white" />
    </Button>
  );
}
