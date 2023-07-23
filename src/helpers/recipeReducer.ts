import type { Action, State } from '../@types/helpers';

export const initialState: State = {
  loading: true,
  error: '',
  recipes: [],
  selectedRecipe: null,
  recipeCount: 0,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        recipes: action.payload,
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        recipes: [],
        error: 'Something went wrong!',
      };
    case 'SELECT_RECIPE':
      return {
        ...state,
        selectedRecipe: action.payload,
      };
    case 'UPDATE_RECIPE_COUNT':
      return {
        ...state,
        recipeCount: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
