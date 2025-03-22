import {
  Button,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { IoMdSearch } from "react-icons/io";
import { SearchForm } from "../types";

//cuando presiones enviar en el form, vamos a recibir un obj q contine la propiedad de search. pasa al archivo de types
// type SearchForm = {
//   search: string;
// };
type Props = {
  onSubmit: (data: SearchForm) => void;
};

function Header({ onSubmit }: Props) {
  const { register, formState, handleSubmit } = useForm<SearchForm>();
  return (
    <Container maxW="3xl" mt="1">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <IoMdSearch color="gray" />
          </InputLeftElement>
          <Input
            mr="2"
            focusBorderColor={
              !!formState.errors.search ? "crimson" : "blue.400"
            }
            isInvalid={!!formState.errors.search}
            {...register("search", { required: true })}
            type="text"
            placeholder="Intenta con 'chicken' o 'beans'..."
          />
          <Button type="submit" bgColor="blue.400" color="white">
            Buscar
          </Button>
        </InputGroup>
      </form>
    </Container>
  );
}

export default Header;
