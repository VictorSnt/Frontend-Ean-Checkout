import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledHeader = styled.div`
  position: relative;
  background: linear-gradient(to right, #000000, #fff);
  width: auto;
  height: 100px;
  text-align: center;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const LogoDiv = styled.div`
  
  width: 200px;
  height: 30px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderTitle = styled.h3`
  color: #fff;
  vertical-align: middle;
  margin: 0;
  padding: 0;
  font-size: 40px;
`;

const MenuIcon = styled.div`
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

const MenuContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 70px;
  left: 0; 
  background: black;
  color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  font-family: 'Courier New', Courier, monospace;

  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const MenuItem = styled.div`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background: #eee;
  }
`;

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <StyledHeader>
      <MenuIcon onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </MenuIcon>
      <div>
        <HeaderTitle>Checkout de Produtos</HeaderTitle>
      </div>
      <LogoDiv />
      <MenuContainer isOpen={isMenuOpen}>
        <MenuItem>Conferencias pendentes</MenuItem>
        <MenuItem>Conferencias concluidas</MenuItem>
        
      </MenuContainer>
    </StyledHeader>
  );
};
