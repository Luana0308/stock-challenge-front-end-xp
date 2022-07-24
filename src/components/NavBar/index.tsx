import React from 'react';
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from './styles';

function Navbar(): React.ReactElement {
  return (
    <Nav>
      <NavMenu>
        <NavLink to="/assets" activeStyle>
          Inicio
        </NavLink>
        <NavLink to="/account" activeStyle>
          Deposito
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/">Logout</NavBtnLink>
      </NavBtn>
    </Nav>
  );
}

export default Navbar;
