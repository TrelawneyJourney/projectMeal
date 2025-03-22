import { Heading, Link, SkeletonText, VStack } from "@chakra-ui/react";
import { Category } from "../types";
//13. definir los props
type Props = {
  categories: Category[];
  loading: boolean;
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
};
//17. crear las propiedades para pasarle al link
const selectedProps = {
  bgColor: "blue.400",
  color: "white",
  fontWeight: "bold",
};
function SideNav({
  loading,
  categories,
  selectedCategory,
  setSelectedCategory,
}: Props) {
  return loading ? (
    <SkeletonText mt="1" noOfLines={20} spacing="4" skeletonHeight="2" />
  ) : (
    <>
      <Heading color="blue.400" fontSize={12} fontWeight="bold" mb={4}>
        CATEGORIAS
      </Heading>
      <VStack align="stretch">
        {categories.map((c) => (
          <Link
            onClick={() => setSelectedCategory(c)}
            px={2}
            py={1}
            borderRadius={5}
            key={c.strCategory}
            _hover={{ textDecoration: "none" }}
            {...(selectedCategory.strCategory == c.strCategory &&
              selectedProps)}
          >
            {c.strCategory}
          </Link>
        ))}
      </VStack>
    </>
  );
}

export default SideNav;
