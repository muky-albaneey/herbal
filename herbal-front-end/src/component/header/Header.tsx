import { ImCart } from "react-icons/im"; 

import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BiSearchAlt2 } from "react-icons/bi"; 
import { Link, NavLink } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo.png'
function Header() {
  const [selectedIcon, setSelectedIcon] = React.useState('');

  const handleSelect = (eventKey) => {
    setSelectedIcon(eventKey);
  };

  return (
    <div style={{ width: '100%', background: 'white' }}>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} style={{ backgroundColor: 'white' }}  className="bg-body-tertiary mb-3">
          <Container fluid className="mx-auto justify-content-center" style={{ backgroundColor: 'white' }}>
         
            <Navbar.Brand><NavLink  to='/'><img src={logo} alt="" className='logo'/></NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              onHide={true}
              style={{ maxWidth: '85%', textDecoration : 'none' }} 
            >
              <Offcanvas.Header closeButton>

                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="mx-auto justify-content-center flex-grow-1 pe-3">
                  <nav className='header_nav'>
                      <section className="left_header">
                         <NavLink to="/"  className='home_btn' style={{textDecoration : 'none'}}> Home</NavLink>
                     
                        <div className="nav_header_info">
                          <NavLink to="/">Product</NavLink>
                          <NavLink to="/">Contact us</NavLink>
                        </div>
                      </section>
                      <section className="center_header">
                      <form action="" method="post" className="d-flex   justify-center items-center relative">
                          <BiSearchAlt2  className='serch_icon absolute left-0.5 lg:left-0 'id="search_mobile"/>
                          <input type="search"  placeholder="Search for anything here" id='search_input' />
                      </form>
                      </section>
                      <section className="right_header">
                      <NavLink to="fan"  className='cart_header_btn' style={{textDecoration : 'none', display:'flex'}}> <ImCart />Cart Added</NavLink>
                     
                        
                      <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="dropdown"
                    onSelect={handleSelect}
                  >
                    <NavDropdown.Item eventKey="coffee">
                      {/* <FontAwesomeIcon icon={faCoffee} />  */}
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="action2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="action3">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                      </section>
                  </nav>
                 
                 
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;
