import { TextareaAutosize } from '@mui/base';
import { Box, styled, Typography } from '@mui/material';
import { useField } from 'formik';
import React from 'react';

type FormRecipeDescriptionProps = {
  name: string;
};

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
    font-family: Bai Jamjuree;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    padding: 8px 11px; 
    min-height: 72px;
    border-radius: 6px;
    border-width: 1px;
    border-color: #5B6178;
    background-color: ${theme.palette.grey[900]};
    width: 100%;
    color: ${theme.palette.common.white};

    padding-bottom: 24px;
    padding-right: 24px;
    
    resize: vertical;

    &::placeholder {
      color: ${theme.palette.common.white};
    }

    &:hover {
      box-shadow: 0px 0px 0px 1px #663CDD inset, 0px 0px 0px 4px #B89FFF;
    }
  
    &:focus {
      box-shadow: 0px 0px 0px 1px #663CDD inset, 0px 0px 0px 4px #B89FFF;
    }
  
    &:focus-visible {
      outline: 0;
    }
  `,
);

const FormRecipeDescription: React.FC<FormRecipeDescriptionProps> = ({ name }) => {
  const [field] = useField(name);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Typography variant="h6" fontFamily="Bai Jamjuree">
        Description
      </Typography>
      <StyledTextarea
        {...field}
        maxRows={4}
        placeholder="Describe your recipe..."
        maxLength={200}
      />
      <Typography variant="body2" fontFamily="Bai Jamjuree" color="grey.400">
        {field.value.length} / 200 Characters
      </Typography>
    </Box>
  );
};

export default FormRecipeDescription;
