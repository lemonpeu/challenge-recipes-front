# Recipes Website

> Version 0.1.0

-   Made with React and styled components

## New features!
- Recipe rating feature is now fixed :) You can send your rating and it'll appear right away (RecipeArticle.js and Rating.js)
- Search is now being handle by backend, so a lot of logic in the frontend was deleted (sections/principal/RecipeSearch.js)

### To run the project:

First create .env file, its content should be:

```
REACT_APP_API_URL="http://localhost:8000"
```

-   Replace PORT 8000 with your PORT when running the API.

Then:

```
    npm i
    npm run start
```
