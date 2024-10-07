import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTiktok } from "react-icons/fa"; 
import './footer.css';
import { BsFillTelephoneFill, BsInstagram } from "react-icons/bs"; 
import { AiOutlineMail, AiFillFacebook } from "react-icons/ai"; 
import { ImLocation } from "react-icons/im"; 
import logo from '../../assets/logo.png';
import SearchResultsDisplayFoo from '../FooSearch';

export default function FooterComponent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://backend-herbal.onrender.com/products/category/${searchQuery}`);
      const data = await response.json();
      setSearchResults(data); // Set search results state
      
      // Navigate to the search results page
      // navigate('/search-results', { state: { results: data, query: searchQuery } });
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <footer className="bg-green-900 text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <section className="flex items-center">
              <img src={logo} className="h-8 me-3" alt="Kenzy Naturals Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">KENZY NATURALS</span>
            </section>
            <div className="foo_items mt-4">
              <h1 className="text-lg font-bold">Contact Us</h1>
              <div className="foo_icon flex items-center mt-2">
                <ImLocation className="text-lg" />
                <span className="ml-2">
                  15, Bayo Adeyemo street Oke-Ira Ogba Lagos state Nigeria.
                </span>
              </div>
              <div className="foo_icon flex items-center mt-2">
                <AiOutlineMail className="text-lg" />
                <span className="ml-2">info@kenzynaturals.com</span>
              </div>
              <div className="foo_icon flex items-center mt-2">
                <BsFillTelephoneFill className="text-lg" />
                <span className="ml-2">+234 9075643219</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Follow us</h2>
              <ul className="text-gray-200 font-medium">
                <li className="mb-4">
                  <a href="https://www.tiktok.com/@kenzynaturals/" className="hover:underline">Tiktok</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61555739194210&mibextid=kFxxJD" className="hover:underline">Facebook</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
              <ul className="text-gray-200 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Search Input */}
        <form className="mt-6" onSubmit={handleSearch}>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-green-600"
            placeholder="Search..."
            required
          />
          <button type="submit" className="bg-green-700 text-white mt-2 p-2 rounded-lg">
            Search
          </button>
        </form>

        {/* Display Search Results */}
        {/* <div className="mt-6">
          <h2>Search Results:</h2>
          {searchResults.length === 0 ? (
            <p>No search results available.</p>
          ) : (
            <ul>
              {searchResults.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          )}
        </div> */}
        {/* Display Search Results */}
        <div className="mt-6">
                <h2>Search Results:</h2>
                {searchResults.length > 0 ? (
                  <SearchResultsDisplayFoo results={searchResults} /> // Pass results to the new component
                ) : (
                  <p>No search results available.</p>
                )}
              </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-200 sm:text-center">© 2024 Kenzy Naturals. All Rights Reserved powered by nava tech.</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="https://www.facebook.com/profile.php?id=61555739194210&mibextid=kFxxJD" className="text-gray-200 hover:text-white">
              <AiFillFacebook className="w-5 h-5" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="https://www.instagram.com/kenzynaturals/" className="text-gray-200 hover:text-white ms-5">
              <BsInstagram className="w-5 h-5" />
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="https://www.tiktok.com/@kenzynaturals/" className="text-gray-200 hover:text-white ms-5">
              <FaTiktok className="w-5 h-5"/>
              <span className="sr-only">Tiktok</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
