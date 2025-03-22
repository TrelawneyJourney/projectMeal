import { Container, SkeletonText } from "@chakra-ui/react";

function RecipeModalSkeleton() {
  return (
    <Container>
      <SkeletonText
        noOfLines={1}
        skeletonHeight={8}
        mt="4"
        mb="5"
        spacing="4"
      />
      <SkeletonText
        noOfLines={1}
        skeletonHeight={280}
        spacing="4"
        borderRadius={200}
      />
      <SkeletonText noOfLines={5} spacing={4} mt={4} />
    </Container>
  );
}

export default RecipeModalSkeleton;
