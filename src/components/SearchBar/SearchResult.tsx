import { MenuItem, MenuList } from '@mui/material';
import React from 'react';

import type { Action, Recipe } from '../../@types/helpers';
import DifficultyIndicator from './DifficultyIndicator';
import SearchMenuItem from './SearchMenuItem';

type SearchResultsProps = {
  suggestions: Recipe[];
  setSearchTerm: (searchTerm: string) => void;
  dispatch: React.Dispatch<Action>;
};

export default function SearchResults({
  suggestions,
  setSearchTerm,
  dispatch,
}: SearchResultsProps) {
  const handleRecipeSelect = (recipe: Recipe) => {
    dispatch({ type: 'SELECT_RECIPE', payload: recipe });
    setSearchTerm('');
  };

  return (
    <MenuList
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '8px',
        backgroundColor: (theme) => theme.palette.primary.main,
        borderRadius: (theme) => theme.shape.borderRadiusSm,
        boxShadow: '0px 10px 30px 3px rgba(0, 0, 0, 0.40)',
        gap: '5px',
        maxHeight: '170px',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {suggestions.length > 0 &&
        suggestions?.map((recipe, index) => (
          <MenuItem
            key={index}
            sx={{ display: 'flex', justifyContent: 'space-between' }}
            onClick={() => handleRecipeSelect(recipe)}
          >
            <SearchMenuItem code={recipe.origin} dishName={recipe.name} />
            <DifficultyIndicator difficulty={recipe.difficulty} time={35} />
          </MenuItem>
        ))}

      {suggestions.length === 0 && (
        <MenuItem sx={{ display: 'flex', justifyContent: 'center' }}>No results found</MenuItem>
      )}
    </MenuList>
  );
}
