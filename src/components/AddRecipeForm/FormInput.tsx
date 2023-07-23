import { Box, TextField, Typography } from '@mui/material';
import { useField } from 'formik';
import React from 'react';

type FormInputProps = {
  label: string;
  name: string;
  adornment?: React.ReactNode;
  maxLength?: number;
  numbersOnly?: boolean;
};

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  adornment,
  maxLength,
  numbersOnly,
}) => {
  const [field, meta, helpers] = useField(name);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (numbersOnly) {
      if (/^\d*$/.test(newValue)) {
        helpers.setValue(newValue);
      }
    } else {
      helpers.setValue(newValue);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Typography variant="h6" fontFamily="Bai Jamjuree">
        {label}
      </Typography>
      <TextField
        {...field}
        fullWidth
        hiddenLabel
        onChange={handleChange}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched ? meta.error : ''}
        InputProps={{ endAdornment: adornment }}
        inputProps={{ maxLength }}
        sx={{ '& .MuiFormHelperText-root': { marginLeft: 0 } }}
      />
    </Box>
  );
};

export default FormInput;
