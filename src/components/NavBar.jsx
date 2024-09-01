import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../hooks/UserContext";
const NavBar = () => {
  const { authenticationData, logout } = useContext(AuthContext);
  return (
    <nav className="bg-white p-4 border rounded-b-xl shadow-2xl mx-2">
      <div className="container mx-auto flex justify-between items-center content-center">
        <Link to="/" className="text-gray-900 text-2xl font-bold">
          My E-Shop
        </Link>
        <div className="hidden md:flex space-x-5 items-center">
          <Link
            to="/products"
            className="text-gray-800 hover:text-mainColor active:text-mainColor font-semibold">
            Products
          </Link>
          {/* TODO: add cart icon and number of items */}
          <Link
            to="/cart"
            className="text-gray-800 hover:text-mainColor active:text-mainColor font-semibold">
            Cart
          </Link>
          {/* TODO: add users avatar */}
          <Link
            to="/my-profile"
            className="text-gray-800 hover:text-mainColor active:text-mainColor font-semibold">
            My Profile
          </Link>
          {authenticationData ? (
            <button
              onClick={logout}
              className="bg-red-500 text-white hover:bg-red-800 px-5 py-2 rounded-lg shadow-md">
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-green-500 text-white hover:bg-green-900 px-5 py-2 rounded-lg shadow-md">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
