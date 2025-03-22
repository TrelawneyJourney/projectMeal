export type Category = {
  strCategory: string;
};
export type CategoriesResponse = {
  //obj con la propiedad de meal, y va a ser un array de categoris
  meals: Category[];
}; //(esto el lo elimina)

//23:
export type Meal = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};

export type SearchForm = {
  search: string;
};

export type MealDetails = {
  [key: string]: string;
};
