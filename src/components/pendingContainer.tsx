import { styled } from "styled-components";
import { useEffect, useState } from "react";
import { fetchData } from "../util/apiFetch";
import { Orcamento } from "../interfaces/Orcamento";
import { genOrcmentoCards } from "../util/cardsGenerator";


const Container = styled.div`
  background: black;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  justify-content: center;
`;

const SeachBarContainer = styled.div`
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
  width: auto;
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 8px;
  border-radius: 10px;
  margin-right: 8px;
`;

const SearchIcon = styled.span`
  font-size: 20px;
  color: #555;
`;


export const PendingCheckoutContainer = () => {
  const [data, setData] = useState<Array<Orcamento> | null>(null);
  const [content, setContent] = useState("1");
  const [searchValue, setSearchValue] = useState('');
  const orcamentosUrl = "http://10.1.10.50:5000/orcamentos/2023-12-28";

  const orcamentoDetails = () => {
    setContent("2");
  };

  useEffect(() => {
    fetchData(orcamentosUrl, setData);
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const orcamentos = genOrcmentoCards(
    data?.filter((orcamento) =>
        orcamento.cdorcamento.toLowerCase().includes(searchValue.toLowerCase())||
        orcamento.nmpessoa.toLowerCase().includes(searchValue.toLowerCase())||
        orcamento.status.toLowerCase().includes(searchValue.toLowerCase())
    ) || [],
    orcamentoDetails
  );
  return (
    <>
    <SeachBarContainer>
        <SearchInput
            placeholder="Procurar"
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
        />
        <SearchIcon>🔍</SearchIcon>
    </SeachBarContainer>
    <Container>
      {content === "1" ? (
        orcamentos
      ) : (
        <button>ddddd</button>
      )}
    </Container>
    </>
  );
};