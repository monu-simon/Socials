// Header.js
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className="header" bg="light" variant="light">
      <Container>
        
        <Navbar.Brand href="#home" style={{  'font-family': "Pacifico", 'font-size':'xx-large', 'color':'orange'}}>Socials</Navbar.Brand>

        
        <div className="mx-auto">
          <span className="text-dark" style={{  'font-family': "Pacifico"}}>Enjoy Connecting</span>
        </div>
        
      </Container>
    </Navbar>
  );
};

export default Header;
