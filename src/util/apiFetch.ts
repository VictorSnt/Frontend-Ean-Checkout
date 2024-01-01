import axios from "axios";
import { Orcamento } from "../interfaces/Orcamento";

export const fetchData = async (url: string, setData: CallableFunction) => {
    try {
      const response = await axios.get<Array<Orcamento>>(
        url
      );
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };
