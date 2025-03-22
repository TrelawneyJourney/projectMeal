//dependiendo de la url q le pasemos ir a buscar algun dato

import axios from "axios";
import { useState } from "react";

export default <T>() => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T>();

  //crear una funcion q nos permita buscar los elementos
  const fetch = (url: string) => {
    setLoading(true);
    axios
      .get(url)
      .then(({ data }) => setData(data.meals[0]))
      .finally(() => setLoading(false));
  };

  return { loading, data, fetch };
};
