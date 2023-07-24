# Observations about the API

`GET /yumazoo/recipes`:
- The API does not return a status code upon successful request
- The CookTime attribute seems to be missing

`POST /yumazoo/recipes`: 
- The API permits all fields to be empty or null, with the exception of `difficulty`, `volume`, and `serves`
- The API does not return a status code upon successful request
- The fields `serves` and `difficulty` are not mandatory
- The `difficulty` field accepts any integer, not limited to 0, 1, or 2 `(i.e 'Easy', 'Medium', 'Hard')`
- The fields `volume`, `serves`, and `difficulty` can accept decimal and negative numbers

`GET /yumazoo/recipes/number`:
- The API does not return a status code upon successful request
- The endpoint's response can be returned in `GET /yumazoo/recipes` by adding the query parameter `number` with the desired number of recipes to be returned

`GET /yumazoo/recipes/{index}`:
- The API does not return a status code upon successful request
- The utility of searching for recipes by their array position is questionable, and not very developer-friendly
- The developer is required to know the position of the recipe in the array gotten from `GET /yumazoo/recipes`, and upon passing it throught the endpoint it returns the same recipe information as `GET /yumazoo/recipes`, which makes this endpoint redundant

# Observations about the UI

- The Figma design lacks detailed information regarding background colors for `Easy` recipes
- There is inconsistency in the naming of colors in the Figma design, and some names are duplicated