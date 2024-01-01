import { Orcamento } from "../interfaces/Orcamento";
import { OrcamentoCard } from "../components/OrcamentoCard.style";

export function genOrcmentoCards(
  data: Array<Orcamento>|null, 
  orcamentoDetails: ()=> void) {
  return (data ? (
    data.map((orcamento: Orcamento) => (
      <OrcamentoCard 
        key={orcamento.idorcamento} 
        orcamento={orcamento} 
        onClick={orcamentoDetails}
      />
    ))
  ) : (
    <p>Loading...</p>
  ));
}
