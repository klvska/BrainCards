import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #fff;
  color: #000;
  height: 75px;
  width: 100%; /* Rozszerz nawigację na całą szerokość strony */
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0; /* Resetuj margines */
  justify-content: space-evenly; /* Równe odstępy między elementami */
`;

const NavItem = styled.li`
  margin-right: 20px;
`;

const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  &:hover {
    color: purple;
  }
`;

export function Header() {
  return (
    <Nav>
      <Ul>
        <NavItem>
          <NavLink to="/">Strona główna</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/flashcards">Dodaj fiszkę</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/login">Zaloguj się</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/register">Zarejestruj się</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/profile">Profil</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/fiszki">Fiszki</NavLink>
        </NavItem>
      </Ul>
    </Nav>
  );
}
