"use client";

import Logo from "@components/Logo";
import menu from "@config/menu.json";
import SearchModal from "@layouts/partials/SearchModal";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  const { main } = menu;

  const [navFixed, setNavFixed] = useState(false);
  const [searchModal, setSearchModal] = useState(false);

  useEffect(() => {
    const changeNavbarBackground = () => {
      if (window.pageYOffset >= 1) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
    };
    window.addEventListener("scroll", changeNavbarBackground);
    return () => {
      window.removeEventListener("scroll", changeNavbarBackground);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white py-4 md:py-6 transition-all ${
          navFixed ? "shadow-lg bg-gray-900 text-white" : "pt-8 md:pt-16"
        }`}
      >
        <nav className="navbar container flex items-center justify-between mx-auto px-4">
          {/* Logo */}
          <div className="order-0">
            <Logo />
          </div>

          {/* Navbar Toggler */}
          <input id="nav-toggle" type="checkbox" className="hidden" />
          <label
            id="show-button"
            htmlFor="nav-toggle"
            className="order-2 flex cursor-pointer items-center md:order-1 md:hidden"
          >
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V15z" />
            </svg>
          </label>
          <label
            id="hide-button"
            htmlFor="nav-toggle"
            className="order-2 hidden cursor-pointer items-center md:order-1"
          >
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          </label>
          
          {/* Navbar Menu */}
          <ul
            id="nav-menu"
            className="navbar-nav order-3 hidden w-full md:order-1 md:flex md:w-auto md:space-x-6 lg:space-x-8"
          >
            {main.map((menu, i) => (
              <React.Fragment key={`menu-${i}`}>
                {menu.hasChildren ? (
                  <li className="nav-item nav-dropdown group relative">
                    <span className="nav-link inline-flex items-center p-3 text-gray-700 hover:text-primary transition">
                      {menu.name}
                      <svg className="h-4 w-4 fill-current ml-1" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                    <ul className="nav-dropdown-list hidden group-hover:block absolute left-0 mt-2 w-48 bg-white shadow-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {menu.children.map((child, i) => (
                        <li className="nav-dropdown-item" key={`children-${i}`}>
                          <Link
                            href={child.url}
                            className="nav-dropdown-link block p-3 text-gray-600 hover:text-primary transition"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link href={menu.url} className="nav-link block p-3 text-gray-700 hover:text-primary transition">
                      {menu.name}
                    </Link>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>

          {/* Search Icon */}
          <div className="order-1 ml-auto md:order-2 md:ml-0">
            <div
              className="cursor-pointer p-3 text-xl text-dark hover:text-primary transition-transform transform hover:scale-110"
              onClick={() => setSearchModal(true)}
            >
              <IoSearch />
            </div>
          </div>
        </nav>
      </header>

      {/* Search Modal */}
      <SearchModal searchModal={searchModal} setSearchModal={setSearchModal} />
    </>
  );
};

export default Header;
