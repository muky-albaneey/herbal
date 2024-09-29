import React from 'react';
import { ImCart } from "react-icons/im"; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo.png';
import useAuthStore from '../../utills/store/lang.store';
import { useTranslation } from 'react-i18next';
import Dropdown from 'react-bootstrap/Dropdown';
import useCartStore from '../../utills/store/cart';
import { FaUserCircle } from "react-icons/fa"; // Added User Icon
import { useAuthStoreUser } from '../../utills/store/auth';
// import jwt from 'jsonwebtoken';
import { decode } from 'jwt-js-decode';



function Header() {
  const { t } = useTranslation();
  const { setToken, lang_token } = useAuthStore();
  const { i18n } = useTranslation();
  
  const isAuthenticated = useAuthStoreUser((state) => state.isAuthenticated);
  const user = useAuthStoreUser((state) => state.user);
  const jwtToken = useAuthStoreUser((state) => state.jwtToken);
  const logout = useAuthStoreUser((state) => state.logout);
  const handleLogout = () => {
    // Call the logout function when the button is clicked
    logout();
    // You can also add any redirect or additional logic here, e.g., navigate to login page
  };
  // Function to decode the JWT token
 const decodeToken = (token) => {
  if (token) {
    try {
      // const decoded = jwt.decode(token); // Decode the token
      let jwt = decode(token);
      console.log('Decoded JWT:', jwt.payload);
      return jwt.payload;
    } catch (error) {
      console.error('Failed to decode JWT:', error);
      return null;
    }
  }
  return null;
};

const decodedToken = decodeToken(jwtToken);
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate('/auth/signup');
  //   }
  // }, [isAuthenticated, navigate]);
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
        <Navbar key={expand}  sticky='top' expand={expand} style={{ backgroundColor: 'white' }} className="bg-body-tertiary mb-3">
          <Container fluid className="mx-auto justify-content-center">
            <Navbar.Brand><NavLink to='/'><img src={logo} alt="" className='logo'/></NavLink></Navbar.Brand>
            <NavLink to="cart" className='cart_header_btn mobile_cart' style={{ textDecoration: 'none'}}>
                            <button 
                              type="button" 
                              className="btn btn-success position-relative flex items-center cart_btn"
                            >
                              <div id='add_c'><ImCart /> Cart</div>
                              <span className="badge position-absolute top-0 start-100 translate-middle bg-secondary">
                                {totalItems > 99 ? '99+' : totalItems.toString()} {/* Convert to string to prevent leading zeros */}
                                <span className="visually-hidden">items in cart</span>
                              </span>
                            </button>
                          </NavLink>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="ms-auto" // Align the toggle to the right
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end" 
              style={{ maxWidth: '90%', textDecoration: 'none' }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="mx-auto justify-content-center flex-grow-1 pe-3">
                  <nav className='header_nav'>
                    <section className="left_header">
                      <NavLink to="/" className='home_btn' style={{ textDecoration: 'none' }}> {t('nav.home')}</NavLink>
                      
                      <div className="nav_header_info">
                        <NavLink to="/products" style={{ textDecoration:'none', color:'green', fontWeight: 'bold'}}>{t('nav.product')}</NavLink>
                        {/* <NavLink to="/contact" className={lang_token === 'fr' ? 'french_t' : ''}>{t('nav.contact_us')}</NavLink> */}
                      </div>
                    </section>
                    <section className="center_header">
                      <form className="max-w-md mx-auto">
                        <input
                          type="search"
                          id="default-search"
                          className="block w-full p-2 ps-10 text-sm border border-green-300 rounded-lg bg-green-50 focus:ring-green-500 focus:border-green-500"
                          placeholder={t('search_placeholder')}
                          required
                        />
                        <button
                          type="submit"
                          className="search-btn text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-1"
                        >
                          {t('search')}
                        </button>
                      </form>
                    </section>
                    <section className="right_header">
                        <NavLink to="cart" className='cart_header_btn' >
                            <button 
                              type="button" 
                              className="btn btn-success position-relative flex items-center cart_btn"
                            >
                              <div id='add_c'><ImCart /> Cart</div>
                              <span className="badge position-absolute top-0 start-100 translate-middle bg-secondary">
                                {totalItems > 99 ? '99+' : totalItems.toString()} {/* Convert to string to prevent leading zeros */}
                                <span className="visually-hidden">items in cart</span>
                              </span>
                            </button>
                          </NavLink>


                      
                      <Dropdown onSelect={handleSelect} className="lang-dropdown">
                        <Dropdown.Toggle variant="success">
                          {lang_token != null ? lang_token : 'Languages'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item eventKey="en">English</Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item eventKey="fr">French</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                        <Dropdown className="profile-dropdown" style={{ background: 'green' }}>
                          <Dropdown.Toggle id="dropdown-basic" style={{ background: 'green', borderColor: 'green' }}>
                            <FaUserCircle className="user-icon" /> {user !== null ? decodedToken?.email : 'user'}
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            {isAuthenticated &&<Dropdown.Item as={NavLink} to="/user">Profile</Dropdown.Item>}
                            {/* {isAuthenticated &&<Dropdown.Item as={NavLink} to="/user/settings">Settings</Dropdown.Item>} */}
                            <Dropdown.Divider />
                            {/* {isAuthenticated &&<Dropdown.Item as={NavLink} to="/logout">Logout</Dropdown.Item>} */}
                            {isAuthenticated && (
                              <Dropdown.Item as="div">
                                <NavLink
                                  to="/"
                                  className="btn btn-danger w-100 text-center" // Add button styles using Bootstrap classes or your own
                                  onClick={handleLogout}
                                  style={{ textDecoration: 'none' }} // Remove underline styling from NavLink
                                >
                                  Logout
                                </NavLink>
                              </Dropdown.Item>
                            )}
                                                {!isAuthenticated &&<Dropdown.Item as={NavLink} to="/register">Register</Dropdown.Item>}
                            {!isAuthenticated &&<Dropdown.Item as={NavLink} to="/login">Login</Dropdown.Item>}
                            
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
