import { Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";
import { useState } from "react";
import { Category, Meal, MealDetails, SearchForm } from "./types";
import useHttpData from "./hooks/useHttpData";
import axios from "axios";
import RecipeModal from "./components/RecipeModal";
import useFetch from "./hooks/useFetch";

const baseUrl = "https://www.themealdb.com/api/json/v1/1/";
const url = `${baseUrl}list.php?c=list`;

//25:
const makeMealUrl = (category: Category) =>
  `${baseUrl}filter.php?c=${category.strCategory}`;

//26:
const defaultCategory = {
  strCategory: "Dessert",
};
function App() {
  //41: hook useDisclosure
  //la funcion q abre el modal es onOpen
  const { isOpen, onOpen, onClose } = useDisclosure();

  //19:
  const [selectedCategory, setSelectedCategory] =
    useState<Category>(defaultCategory);

  //22:
  const { loading, data } = useHttpData<Category>(url);

  //24:
  const {
    loading: loadingMeal,
    data: dataMeal,
    setData: setMeals,
  } = useHttpData<Meal>(makeMealUrl(defaultCategory));

  //36:crear funcion para buscar los platos
  const searchApi = (SearchForm: SearchForm) => {
    const url = `${baseUrl}search.php?s=${SearchForm.search}`;
    //llamar al endpoint de busqueda
    axios.get<{ meals: Meal[] }>(url).then(({ data }) => setMeals(data.meals));
  };

  //48:  55.de aca sacamos la data
  const {
    fetch,
    loading: loadingMealDetails,
    data: mealDetailData,
  } = useFetch<MealDetails>();
  //49. crear funcion, que recibi una meal
  const searchMealDetails = (meal: Meal) => {
    onOpen();
    fetch(`${baseUrl}lookup.php?i=${meal.idMeal}`); //aca le pasamos la url q necesitamos
  };

  // console.log({ dataMeal });
  return (
    <>
      <Grid
        templateAreas={`"header header"
                          "nav main"`}
        gridTemplateRows={"60px 1fr"}
        gridTemplateColumns={{ sm: `0 1fr`, md: `250px 1fr` }}
        fontSize={14}
      >
        <GridItem
          boxShadow="lg"
          pos="sticky"
          top="0"
          zIndex="1"
          pt="7px"
          bg="white"
          area={"header"}
        >
          <Header onSubmit={searchApi} />
        </GridItem>

        <GridItem
          pos="sticky"
          top="60px"
          left="0"
          p="5"
          area={"nav"}
          height="calc(100vh - 60px)"
          overflowY={{ base: "visible", md: "auto", lg: "hidden" }}
        >
          {/**12.imprimir categorias */}
          <SideNav
            categories={data}
            loading={loading}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </GridItem>

        <GridItem p="4" bg="gray.100" area={"main"}>
          <MainContent
            openRecipe={searchMealDetails}
            loading={loadingMeal}
            meals={dataMeal}
          />
        </GridItem>
      </Grid>
      {/**42 pasar en componerte de modal */}
      <RecipeModal
        data={mealDetailData}
        loading={loadingMealDetails}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}

export default App;
