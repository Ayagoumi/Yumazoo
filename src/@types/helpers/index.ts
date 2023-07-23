export type Recipe = {
  name: string;
  origin: string;
  description: string;
  difficulty: 0 | 1 | 2;
  protein: string;
  produce: string;
  spice: string;
  cookingOil: string;
  volume: number;
  serves: number;
  authenticity: string;
  stock: string;
};

export type State = {
  loading: boolean;
  error: string;
  recipes: Recipe[];
  selectedRecipe: Recipe | null;
};

export type FetchSuccessAction = {
  type: 'FETCH_SUCCESS';
  payload: Recipe[];
};

export type FetchErrorAction = {
  type: 'FETCH_ERROR';
};

export type SelectRecipeAction = {
  type: 'SELECT_RECIPE';
  payload: Recipe;
};

export type Action = FetchSuccessAction | FetchErrorAction | SelectRecipeAction;
