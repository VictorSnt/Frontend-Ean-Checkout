import styled from 'styled-components';
import { PendingCheckoutContainer } from './pendingContainer';

const MainContainer = styled.div`
  background: #000000;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  justify-content: center;
`;

export const MainCard = () => {

  
  
  return (
    <>
      <MainContainer>
        <PendingCheckoutContainer />
      </MainContainer>
    </>
  )};
  

 
