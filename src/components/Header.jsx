import React, { useState, useRef, useEffect } from "react";
import { animateScroll as scroll } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';
import {
  Bars3Icon,
  XMarkIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); 

  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();                       
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  

  const navItems = [
    {
      label: "AnaSayfa",
      href: "/",
    },
    {
      label: "Ürünler",
      href: "#products",
    },
    {
      label: "Hikayemiz",
      href: "#about",
    },
    {
      label: "SSS",
      href: "#FAQ",
    },

  ];
  return (
    <>
      <header className={` fixed top-0 z-50 transition-all duration-300 w-full  ${scrolled ? 'bg-gray-100 shadow-lg  text-amber-700 ' : ' text-white bg-transparent'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 items-center justify-between h-16 grid grid-cols-12 gap-4">
          {/* Logo / Brand */}
          <div className="col-span-6 lg:col-span-2">
            <a  onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
                className="text-xl font-bold cursor-pointer">
              Demircan Fındık
            </a>
          </div>
          {/* Nav – Big Screen */}
          <nav className="hidden lg:flex col-span-7 justify-center">
  {navItems.map(({ label, href }) =>
    href.startsWith('#') ? (
      <ScrollLink
        key={label}
        to={href.slice(1)}   
        smooth
        duration={500}
        offset={-80}          
        className="flex items-center justify-center w-1/5
                   text-md font-bold transition-transform
                   duration-300 transform hover:scale-105 cursor-pointer"
      >
        {label}
      </ScrollLink>
    ) : (
      <a
        key={label}
        href={href}
        className="flex items-center justify-center w-1/5
                   text-md font-bold transition-transform
                   duration-300 transform hover:scale-105"
      >
        {label}
      </a>
    )
  )}
</nav>


          <div className="col-span-6 lg:col-span-3 flex justify-end items-center space-x-4">
            

            {/* User Dropdown */}
            <div className="relative" ref={ref}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className= {`p-2 focus:outline-none cursor-pointer font-bold ${scrolled ? ' text-amber-700 ' : ' text-white'} `}
              >
                <UserIcon className="h-6 w-6" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-gray-100 border border-gray-200 rounded-md shadow-lg z-50">
                  <a
                    href="#"
                    className="block px-4 py-2 text-amber-700 hover:bg-gray-200"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-amber-700 hover:bg-gray-200"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-amber-700 hover:bg-gray-200"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>

            {/*Nav Hamburger (mobile) */}
            <button className="lg:hidden cursor-pointer flex" onClick={() => setSidebarOpen(!open)}>
              <span className="h-6 w-6">
               
                  <Bars3Icon className="h-6 w-6" />
             
              </span>
            </button>
            {
              open && (
                <div
                  className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
                  onClick={() => setSidebarOpen(false)}
                ></div>
              )
            }
          </div>
        </div>

        {/* Mobile Nav Menu */}
                <div
                  className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
                >
                  <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-lg font-semibold">Menu</h2>
                    <button onClick={() => setSidebarOpen(false)}>
                      <XMarkIcon className="h-6 w-6 text-gray-800" />
                    </button>
                  </div>
                  <nav className="p-4 space-y-2">
                    <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100">
                      Dashboard
                    </a>
                    <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100">
                      Profile
                    </a>
                    <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100">
                      Settings
                    </a>
                    <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100">
                      Logout
                    </a>
                  </nav>
                </div>
      </header>
    </>
  );
}
