import React from 'react';
import { ImCart } from "react-icons/im"; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo.png';
import useAuthStore from '../../utills/store/lang.store';
import { useTranslation } from 'react-i18next';
import Dropdown from 'react-bootstrap/Dropdown';
import useCartStore from '../../utills/store/cart';

function Header() {
  const { t } = useTranslation();
  const { setToken, lang_token } = useAuthStore();
  const { i18n } = useTranslation();

  const handleSelect = (eventKey) => {
    i18n.changeLanguage(eventKey); // Change language in i18next
    setToken(eventKey); // Update Zustand store
  };
  const cart = useCartStore((state) => state.cart);

  // Calculate total quantity of items in the cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
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
                        <NavLink to="/products">{t('nav.product')}</NavLink>
                        <NavLink to="/contact" className={lang_token === 'fr' ? 'french_t': ''}>{t('nav.contact_us')}</NavLink>
                        </div>
                      </section>
                      <section className="center_header">

                      <form className="max-w-md mx-auto">
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3   pointer-events-none">
        
        </div>
        <input 
            type="search" 
            id="default-search" 
            className="block w-full p-3 ps-10 text-sm text-white-900 border border-green-300 rounded-lg bg-green-50 focus:ring-green-500 focus:border-blue-500 dark:bg-green-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-200 dark:focus:border-blue-500" 
            placeholder={t('search_placeholder')}
            required 
        />
              <button 
                  type="submit" 
                  className="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-green-600 dark:hover:bg-green-400 dark:focus:ring-green-800" id='d-s-btn'>
                    {t('search')}
              </button>
             </div>
          </form>

                      </section>
                      <section className="right_header">
                      <NavLink to="cart" className='cart_header_btn' style={{ textDecoration: 'none', display:'flex' }}> 
                      <button type="button" className="btn btn-success position-relative flex items-center">
                        <ImCart /> Cart
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                          {totalItems > 99 ? '99+' : totalItems} {}
                          <span className="visually-hidden">items in cart</span>
                        </span>
                      </button>
                      </NavLink>

                      <div>
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
                      </div>
                     
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
