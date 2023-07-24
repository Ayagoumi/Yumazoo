import { Box, Button, Grid, InputAdornment, Typography } from '@mui/material';
import axios from 'axios';
import type { Country } from 'countries-list';
import { countries } from 'countries-list';
import type { FormikHelpers } from 'formik';
import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import FormHeader from '../components/AddRecipeForm/FormHeader';
import FormInput from '../components/AddRecipeForm/FormInput';
import FormRecipeDescription from '../components/AddRecipeForm/FormRecipeDescription';
import FormSelect from '../components/AddRecipeForm/FormSelect';
import { AUTHENTICIY_OPTIONS, BASE_URL, HARDNESS_LEVELS } from '../constants';

const initialValues = {
  name: '',
  origin: '',
  description: '',
  difficulty: '',
  protein: '',
  produce: '',
  spice: '',
  cookingOil: '',
  volume: '',
  serves: '',
  authenticity: '',
  stock: '',
};

const hasScript = (value: string) =>
  /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi.test(value);

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required('Name is required')
    .test('hasScript', 'Value must not contain JavaScript', (value) => !hasScript(value)),
  origin: Yup.string()
    .trim()
    .required('Origin is required')
    .test('hasScript', 'Value must not contain JavaScript', (value) => !hasScript(value)),
  description: Yup.string()
    .trim()
    .required('Description is required')
    .test('hasScript', 'Value must not contain JavaScript', (value) => !hasScript(value)),
  difficulty: Yup.string().test('hasScript', 'Value must not contain JavaScript', (value) =>
    value ? !hasScript(value) : false,
  ),
  protein: Yup.string()
    .trim()
    .required('Protein is required')
    .test('hasScript', 'Value must not contain JavaScript', (value) => !hasScript(value)),
  produce: Yup.string()
    .trim()
    .required('Produce is required')
    .test('hasScript', 'Value must not contain JavaScript', (value) => !hasScript(value)),
  spice: Yup.string()
    .trim()
    .required('Spice is required')
    .test('hasScript', 'Value must not contain JavaScript', (value) => !hasScript(value)),
  cookingOil: Yup.string()
    .trim()
    .required('Cooking Oil is required')
    .test('hasScript', 'Value must not contain JavaScript', (value) => !hasScript(value)),
  volume: Yup.number().required('Volume is required').integer().positive(),
  serves: Yup.number().integer().positive(),
  authenticity: Yup.string()
    .trim()
    .required('Authenticity is required')
    .test('hasScript', 'Value must not contain JavaScript', (value) => !hasScript(value)),
  stock: Yup.string()
    .trim()
    .required('Stock is required')
    .test('hasScript', 'Value must not contain JavaScript', (value) => !hasScript(value)),
});

const countryIndex = countries as { [code: string]: Country };
const countryOptions = Object.keys(countryIndex).map((code) => ({
  code,
  name: countryIndex[code].name,
}));

export default function AddRecipe() {
  const onSubmitForm = (
    values: typeof initialValues,
    { resetForm, setSubmitting }: FormikHelpers<typeof initialValues>,
  ) => {
    const selectedCountry = countryOptions.find((country) => country.name === values.origin);

    const payload = {
      ...values,
      origin: selectedCountry ? selectedCountry.code : '',
      volume: Number(values.volume),
      serves: Number(values.serves),
      difficulty: HARDNESS_LEVELS.indexOf(values.difficulty),
    };

    axios
      .post(`${BASE_URL}/yumazoo/recipes`, payload)
      .then(() => {
        resetForm();
      })
      .catch((error) => {
        console.error(error); // eslint-disable-line no-console
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', p: '24px' }}>
      <FormHeader title="Add new recipe" />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmitForm}
      >
        {() => (
          <Form>
            <Grid container rowSpacing={3} columnSpacing={1.5}>
              <Grid item xs={6}>
                <FormInput label="Name" name="name" maxLength={40} />
              </Grid>

              <Grid item xs={6}>
                <FormSelect
                  label="Origin"
                  name="origin"
                  placeholder="Origin country"
                  options={countryOptions.map((option) => option.name)}
                  capitalize
                />
              </Grid>

              <Grid item xs={12}>
                <FormRecipeDescription name="description" />
              </Grid>

              <Grid item xs={6}>
                <FormSelect
                  label="Difficulty"
                  name="difficulty"
                  placeholder="Difficulty level"
                  options={HARDNESS_LEVELS}
                  capitalize
                  defaultValue
                />
              </Grid>

              <Grid item xs={6}>
                <FormInput label="Protein" name="protein" maxLength={15} />
              </Grid>

              <Grid item xs={6}>
                <FormInput label="Produce" name="produce" maxLength={15} />
              </Grid>

              <Grid item xs={6}>
                <FormInput label="Spice" name="spice" maxLength={15} />
              </Grid>

              <Grid item xs={6}>
                <FormInput label="Cooking Oil" name="cookingOil" maxLength={15} />
              </Grid>

              <Grid item xs={6}>
                <FormInput
                  label="Volume"
                  name="volume"
                  numbersOnly
                  adornment={
                    <InputAdornment position="end">
                      <Typography
                        variant="body2"
                        sx={{ color: (theme) => theme.palette.grey[100] }}
                      >
                        grams
                      </Typography>
                    </InputAdornment>
                  }
                />
              </Grid>

              <Grid item xs={6}>
                <FormInput
                  label="Serves"
                  name="serves"
                  numbersOnly
                  adornment={
                    <InputAdornment position="end">
                      <Typography
                        variant="body2"
                        sx={{ color: (theme) => theme.palette.grey[100] }}
                      >
                        people
                      </Typography>
                    </InputAdornment>
                  }
                />
              </Grid>

              <Grid item xs={6}>
                <FormSelect
                  label="Authenticity"
                  name="authenticity"
                  placeholder="Authenticity level"
                  options={AUTHENTICIY_OPTIONS}
                  capitalize
                  defaultValue
                />
              </Grid>

              <Grid item xs={12}>
                <FormInput label="Stock" name="stock" maxLength={15} />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    width: '100%',
                    borderRadius: (theme) => theme.shape.borderRadiusSm,
                    p: '9px 14px 11px 14px',
                    backgroundColor: (theme) => theme.palette.action.active,
                    '&:disabled': {
                      opacity: 0.5,
                    },
                    '&:hover': {
                      backgroundColor: (theme) => theme.palette.action.active,
                      opacity: 0.8,
                    },
                  }}
                >
                  Add Recipe
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
