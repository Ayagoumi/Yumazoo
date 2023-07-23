import { Box, MenuItem, Select, Typography } from '@mui/material';
import { useField } from 'formik';
import React, { useEffect } from 'react';

import ChevronDown from '../icons/ChevronDown';

type FormSelectProps = {
  label: string;
  name: string;
  options: string[];
  placeholder: string;
  capitalize?: boolean;
  defaultValue?: boolean;
};

const FormSelect: React.FC<FormSelectProps> = ({
  label,
  name,
  options,
  placeholder,
  capitalize = false,
  defaultValue = false,
}) => {
  const [field, meta, helpers] = useField(name);

  useEffect(() => {
    if (defaultValue && field.value === '') {
      helpers.setValue(options[0]);
    }
  }, [defaultValue, field.value, helpers, options]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Typography variant="h6" fontFamily="Bai Jamjuree">
        {label}
      </Typography>
      <Box>
        <Select
          {...field}
          error={meta.touched && Boolean(meta.error)}
          fullWidth
          IconComponent={ChevronDown}
          displayEmpty
          renderValue={(selected) => {
            if (selected === '') {
              return (
                <Typography variant="body1" fontFamily="Bai Jamjuree" color="grey.100">
                  {placeholder}
                </Typography>
              );
            }
            return selected;
          }}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option}>
              <Typography
                variant="body2"
                fontFamily="Bai Jamjuree"
                sx={{ textTransform: capitalize ? 'capitalize' : 'none' }}
              >
                {option.toLowerCase()}
              </Typography>
            </MenuItem>
          ))}
        </Select>
        {meta.touched && meta.error ? (
          <Typography variant="body2" color="error">
            {meta.error}
          </Typography>
        ) : null}
      </Box>
    </Box>
  );
};

export default FormSelect;
