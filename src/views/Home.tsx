import { Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useReducer } from 'react';

import type { Recipe } from '../@types/helpers';
import RecipeDescription from '../components/RecipeDescription';
import RecipeDetails from '../components/RecipeDetails';
import RecipeHeader from '../components/RecipeHeader';
import SearchBar from '../components/SearchBar';
import { BASE_URL } from '../constants';
import reducer, { initialState } from '../helpers/recipeReducer';

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get(`${BASE_URL}/yumazoo/recipes/number`)
        .then((response) => {
          dispatch({ type: 'UPDATE_RECIPE_COUNT', payload: response.data.message as number });
        })
        .catch(() => {
          console.error('Failed to fetch recipe count'); // eslint-disable-line no-console
        });
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/yumazoo/recipes`)
      .then((response) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data.message as Recipe[] });
      })
      .catch(() => {
        dispatch({ type: 'FETCH_ERROR' });
      });
  }, [state.recipeCount]);

  const displayedRecipe = state.selectedRecipe || state.recipes[242];

  return (
    <>
      {!state.loading && displayedRecipe && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px', p: '24px' }}>
          <SearchBar recipes={state.recipes} dispatch={dispatch} />

          <RecipeHeader code={displayedRecipe.origin} recipeName={displayedRecipe.name} />

          <RecipeDescription
            description={displayedRecipe.description}
            difficulty={displayedRecipe.difficulty}
          />

          <RecipeDetails
            protein={displayedRecipe.protein}
            produce={displayedRecipe.produce}
            spice={displayedRecipe.spice}
            cookingOil={displayedRecipe.cookingOil}
            volume={displayedRecipe.volume}
            serves={displayedRecipe.serves}
            authenticity={displayedRecipe.authenticity}
            stock={displayedRecipe.stock}
          />
        </Box>
      )}
      {state.loading && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            minHeight: '300px',
          }}
        >
          <CircularProgress color="secondary" />
        </Box>
      )}
    </>
  );
}
