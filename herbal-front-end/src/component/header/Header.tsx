import React from 'react';
import { ImCart } from "react-icons/im"; 
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
import logo from '../../assets/logo.png';
import useAuthStore from '../../utills/store/lang.store';
import { useTranslation } from 'react-i18next';
import { FaLanguage } from 'react-icons/fa';

function Header() {
  const { setToken } = useAuthStore();
  const { i18n } = useTranslation();

  const handleSelect = (eventKey) => {
    i18n.changeLanguage(eventKey); // Change language in i18next
    setToken(eventKey); // Update Zustand store
  };

  return (
    <div style={{ width: '100%', background: 'white' }}>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} style={{ backgroundColor: 'white' }} className="bg-body-tertiary mb-3">
          <Container fluid className="mx-auto justify-content-center" style={{ backgroundColor: 'white' }}>
            <Navbar.Brand><NavLink to='/'><img src={logo} alt="" className='logo'/></NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              onHide={true}
              style={{ maxWidth: '85%', textDecoration: 'none' }} 
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="mx-auto justify-content-center flex-grow-1 pe-3">
                  <nav className='header_nav'>
                      <section className="left_header">
                         <NavLink to="/" className='home_btn' style={{ textDecoration: 'none' }}> Home</NavLink>
                        <div className="nav_header_info">
                          <NavLink to="/">Product</NavLink>
                          <NavLink to="/">Contact us</NavLink>
                        </div>
                      </section>
                      <section className="center_header">
                      <form action="" method="post" className="d-flex justify-center items-center relative">
                          <BiSearchAlt2 className='serch_icon absolute left-0.5 lg:left-0 ' id="search_mobile"/>
                          <input type="search" placeholder="Search for anything here" id='search_input' />
                      </form>
                      </section>
                      <section className="right_header">
                      <NavLink to="fan" className='cart_header_btn' style={{ textDecoration: 'none', display:'flex' }}> <ImCart />Cart Added</NavLink>
                      <NavDropdown
                      
                         title={
                          <div className='drop'>
                            <FaLanguage className="me-2" /> Languages {/* Add icon here */}
                          </div>
                        }
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                        className="dropdown"
                        onSelect={handleSelect}
                      >
                        <NavDropdown.Item eventKey="en">English</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="fr">French</NavDropdown.Item>
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
