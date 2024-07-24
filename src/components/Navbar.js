// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: lightgreen;
  color: black;
  font: bold;
  font-size: 30px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img{
    width: 29px;}
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;




const Navbar = () => {
  return (
    <Nav>
      <div>Tienda Digital</div>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/cart"><img src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png"></img>Carrito</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Registro</Link>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
