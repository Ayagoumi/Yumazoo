import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

type RecipeDetailsProps = {
  protein?: string;
  produce?: string;
  spice?: string;
  cookingOil?: string;
  volume?: number;
  serves?: number;
  authenticity?: string;
  stock?: string;
};

const createStyledItems = (
  str: string | undefined,
  gradient: (index: number) => string,
): JSX.Element[] | undefined => {
  return str
    ?.trim()
    .split(',')
    .map((item, i) => {
      const trimmedItem = item.trim().toLowerCase();

      if (trimmedItem !== '') {
        return (
          <React.Fragment key={i}>
            {i !== 0 && ' / '}
            <span
              style={{
                background: gradient(i),
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textTransform: 'capitalize',
              }}
            >
              {trimmedItem}
            </span>
          </React.Fragment>
        );
      }
      return <React.Fragment key={i}></React.Fragment>;
    });
};

const RecipeDetails: React.FC<RecipeDetailsProps> = ({
  protein,
  produce,
  spice,
  cookingOil,
  volume,
  serves,
  authenticity,
  stock,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: (theme) => theme.palette.primary.light,
        padding: '13px 24px',
        borderRadius: (theme) => theme.shape.borderRadiusSm,
      }}
    >
      <Grid container rowSpacing={1.5}>
        {protein && (
          <Grid item xs={6}>
            <Typography
              variant="caption"
              component="span"
              sx={{ color: (theme) => theme.palette.grey[300] }}
            >
              Protein
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ color: (theme) => theme.palette.common.white, textTransform: 'capitalize' }}
            >
              {protein?.toLowerCase()}
            </Typography>
          </Grid>
        )}

        {produce && (
          <Grid item xs={6}>
            <Typography
              variant="caption"
              component="span"
              sx={{ color: (theme) => theme.palette.grey[300] }}
            >
              Produce
            </Typography>
            <Typography variant="subtitle1" component="p">
              {createStyledItems(produce, (i) =>
                i % 2 === 0
                  ? '-webkit-linear-gradient(136deg, #40E33D 0%, #2BF1E5 100%)'
                  : '#FB2047',
              )}
            </Typography>
          </Grid>
        )}

        {spice && (
          <Grid item xs={6}>
            <Typography
              variant="caption"
              component="span"
              sx={{ color: (theme) => theme.palette.grey[300] }}
            >
              Spice
            </Typography>
            <Typography variant="subtitle1" component="p">
              {createStyledItems(
                spice,
                () => '-webkit-linear-gradient(136deg, #FF4869 0%, #FFBF43 100%)',
              )}
            </Typography>
          </Grid>
        )}

        {cookingOil && (
          <Grid item xs={6}>
            <Typography
              variant="caption"
              component="span"
              sx={{ color: (theme) => theme.palette.grey[300] }}
            >
              Cooking Oil
            </Typography>
            <Typography variant="subtitle1" component="p">
              {createStyledItems(
                cookingOil,
                () => '-webkit-linear-gradient(136deg, #FF4869 0%, #FFBF43 100%)',
              )}
            </Typography>
          </Grid>
        )}

        {volume !== undefined && volume !== null && (
          <Grid item xs={6}>
            <Typography
              variant="caption"
              component="span"
              sx={{ color: (theme) => theme.palette.grey[300] }}
            >
              Volume/Weight
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ color: (theme) => theme.palette.common.white }}
            >
              {volume}g
            </Typography>
          </Grid>
        )}

        {serves !== undefined && serves !== null && (
          <Grid item xs={6}>
            <Typography
              variant="caption"
              component="span"
              sx={{ color: (theme) => theme.palette.grey[300] }}
            >
              Serves
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ color: (theme) => theme.palette.common.white, textTransform: 'capitalize' }}
            >
              {serves?.toLocaleString()}
            </Typography>
          </Grid>
        )}

        {authenticity && (
          <Grid item xs={6}>
            <Typography
              variant="caption"
              component="span"
              sx={{ color: (theme) => theme.palette.grey[300] }}
            >
              Authenticity
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{
                background: '-webkit-linear-gradient(136deg, #FF4869 0%, #FFBF43 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textTransform: 'capitalize',
              }}
            >
              {authenticity?.toLowerCase()}
            </Typography>
          </Grid>
        )}

        {stock && (
          <Grid item xs={6}>
            <Typography
              variant="caption"
              component="span"
              sx={{ color: (theme) => theme.palette.grey[300] }}
            >
              Stock
            </Typography>
            <Typography variant="subtitle1" component="p">
              {createStyledItems(
                stock,
                () => '-webkit-linear-gradient(136deg, #FF4869 0%, #FFBF43 100%)',
              )}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default RecipeDetails;
