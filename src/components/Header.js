import React from 'react';
import { Navbar, Container, NavbarBrand } from 'reactstrap';

export default function Header() {
  return (
    <div>
      <Navbar color='light'>
        <Container>
          <NavbarBrand>React Hooks ToDo</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
}
