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
import Dropdown from 'react-bootstrap/Dropdown';

function Header() {
  const { t } = useTranslation();
  const { setToken, lang_token } = useAuthStore();
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
            <Navbar.Toggle
  aria-controls={`offcanvasNavbar-expand-${expand}`}
  className="ms-auto" // This will align the toggle to the right
/>
<Navbar.Offcanvas
  id={`offcanvasNavbar-expand-${expand}`}
  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
  placement="end" // Use "end" for right alignment
  style={{ maxWidth: '90%', textDecoration: 'none' }} 
>
  <Offcanvas.Header closeButton>
    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
    </Offcanvas.Title>
  </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="mx-auto justify-content-center flex-grow-1 pe-3">
                  <nav className='header_nav'>
                      <section className="left_header">
                         <NavLink to="/" className='home_btn' style={{ textDecoration: 'none' }}> {t('nav.home')}</NavLink>
                        <div className="nav_header_info">
                        <NavLink to="/">{t('nav.product')}</NavLink>
                        <NavLink to="/contact" className={lang_token === 'fr' ? 'french_t': ''}>{t('nav.contact_us')}</NavLink>
                        </div>
                      </section>
                      <section className="center_header">
                      <form action="" method="post" className="d-flex justify-center items-center relative">
                          <BiSearchAlt2 className='serch_icon absolute lg:left-0 ' id="search_mobile"/>
                          <input type="search"  placeholder={t('search_placeholder')} id='search_input' />
                      </form>
                      </section>
                      <section className="right_header">
                      <NavLink to="fan" className='cart_header_btn' style={{ textDecoration: 'none', display:'flex' }}> <ImCart />{t('nav.cart')}</NavLink>
                      <Dropdown  onSelect={handleSelect}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" >
                           {lang_token != null ? lang_token : 'Languages'}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item eventKey="en">English</Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item eventKey="fr">French</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                     
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
