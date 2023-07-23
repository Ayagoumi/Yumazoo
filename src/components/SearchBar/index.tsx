import { Box, InputAdornment, TextField } from '@mui/material';
import React, { useMemo, useState } from 'react';

import type { Action, Recipe } from '../../@types/helpers';
import SearchIcon from '../icons/Search';
import SearchResults from './SearchResult';

type SearchBarProps = {
  recipes: Recipe[];
  dispatch: React.Dispatch<Action>;
};

export default function SearchBar({ recipes, dispatch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const matchedRecipes = useMemo(() => {
    if (searchTerm === '') return null;

    const searchTermLowerCase = searchTerm.toLowerCase();

    const recipesContainingSearchTerm = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTermLowerCase),
    );

    const recipesSortedByRelevance = recipesContainingSearchTerm.sort(
      (firstRecipe, secondRecipe) => {
        const firstRecipeStartsWithSearchTerm = firstRecipe.name
          .toLowerCase()
          .startsWith(searchTermLowerCase);
        const secondRecipeStartsWithSearchTerm = secondRecipe.name
          .toLowerCase()
          .startsWith(searchTermLowerCase);

        if (firstRecipeStartsWithSearchTerm && !secondRecipeStartsWithSearchTerm) return -1;
        if (!firstRecipeStartsWithSearchTerm && secondRecipeStartsWithSearchTerm) return 1;

        return firstRecipe.name.toLowerCase() < secondRecipe.name.toLowerCase() ? -1 : 1;
      },
    );

    return recipesSortedByRelevance;
  }, [recipes, searchTerm]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <TextField
        hiddenLabel
        placeholder="Search Cuisine"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon width="20px" height="20px" />
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            padding: '0',
            paddingLeft: '11px !important',
          },
        }}
      />

      {matchedRecipes && (
        <Box sx={{ position: 'absolute', top: '51px', width: '100%', zIndex: 1 }}>
          <SearchResults
            suggestions={matchedRecipes}
            setSearchTerm={setSearchTerm}
            dispatch={dispatch}
          />
        </Box>
      )}
    </Box>
  );
}
