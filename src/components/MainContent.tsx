import { SimpleGrid } from "@chakra-ui/react";
import { Meal } from "../types";
import MealCard from "./MealCard";
import SkeletonCard from "./SkeletonCard";

type Props = {
  meals: Meal[];
  loading: boolean;
  openRecipe: (meal: Meal) => void; // recibe un elemento de tipo meal, para dsp ir a buscarlo a la api, para dsp cargarlo dentro del modal
};

function MainContent({ meals, loading, openRecipe }: Props) {
  // console.log(meals, loading);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <SimpleGrid columns={[2, null, 3]} spacing="20px">
      {loading && skeletons.map((skeleton) => <SkeletonCard key={skeleton} />)}
      {/**solo mostramos las cards si no estamos cargando */}
      {!loading &&
        meals.map((m) => (
          <MealCard openRecipe={() => openRecipe(m)} key={m.idMeal} meal={m} />
        ))}
      {/**cuando haga click en la mealcard lo q quiero es recibir el meal, m, hay q ejecutar openRecipe */}
    </SimpleGrid>
  );
}

export default MainContent;
