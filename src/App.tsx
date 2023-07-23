import * as React from 'react';
import { useContext } from 'react';

import { PageContext } from '.';
import AddRecipe from './views/AddRecipe';
import Home from './views/Home';

export default function App() {
  const { page } = useContext(PageContext);

  switch (page) {
    case 'HOME':
      return <Home />;
    case 'ADD_RECIPE':
      return <AddRecipe />;
    default:
      return <Home />;
  }
}
