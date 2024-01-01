import styled from 'styled-components';
import { Orcamento } from '../interfaces/Orcamento';
import { strict } from 'assert';

const CardContainer = styled.div`
  max-width: max-content;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  color: white;
  font-family: 'Courier New', Courier, monospace;
  cursor: pointer;
  transition: all 0.2s ease; 
  
  &:hover {
    border-width: 2px; 
    transform: scale(1.05); 
  }
`;

interface OrcamentoCardProps {
    orcamento: Orcamento;
    onClick: () => void;
  }

export const OrcamentoCard: React.FC<OrcamentoCardProps>= (
    {orcamento, onClick}:OrcamentoCardProps
    
) => {
    
    return (
        
        <CardContainer onClick={() => onClick()}>
            <div>
                <h3>Orcamento: {orcamento.cdorcamento}</h3>
            </div>
            <p><strong>Cliente:</strong> {orcamento.nmpessoa}</p>
            <p><strong>Hora:</strong> {orcamento.hremissao}</p>
            <p>
                <strong>Status:</strong> 
                <span style={{ color: orcamento.status === "Cancelado" ? 'red' : 'inherit', }}>
                    {orcamento.status}
                </span>
            </p>
            
        </CardContainer>
    );
};