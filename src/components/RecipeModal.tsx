import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import RecipeModalSkeleton from "./RecipeModalSkeleton";
import { MealDetails } from "../types";
import RecipeModalContent from "./RecipeModalContent";

type Props = {
  //56:
  data: MealDetails | undefined;
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
};

function RecipeModal({ isOpen, onClose, loading, data }: Props) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/**56. si se encuentea cargando, muestra el esqueleto y si es q no se encuentra cargando, vamos a evaluar si es q tiene data, y si existe devuelve el componente*/}
          {loading ? (
            <RecipeModalSkeleton />
          ) : (
            data && <RecipeModalContent data={data} />
          )}

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default RecipeModal;
