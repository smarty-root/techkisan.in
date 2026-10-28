import React, { useEffect, useRef, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import LOGO from "./../../assets/logo.png";
import { Link } from "react-router-dom";
import endpoints from "../endpoints/endpoints";
import { showSucess } from "../../utils/toastUtils";
import { useNavigate } from "react-router-dom";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/aboutus",
  },
  {
    id: 3,
    title: "Services",
    dropdown: [
      { id: 1, title: "Automations", path: "/services/automation" },
      { id: 2, title: "Solar Services", path: "/services/solar" },
      { id: 3, title: "Security Solutions", path: "/services/security" },
      { id: 4, title: "IT Services", path: "/services/it" },
    ],
  },
  {
    id: 5,
    title: "Contact",
    path: "/contactus",
  },
  {
    id: 6,
    title: "Tickets",
    path: "/tickets",
  },
];

const Navbar = () => {
  const navigator = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [userData, setUserData] = useState(null);
  const Endpoints = new endpoints();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserData(null);
    showSucess("Logged Out Successfully");
    navigator("/");
  };

  const fetchUserData = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setUserData(null);
      return;
    }

    try {
      const response = await fetch(Endpoints.LOGIN_USER_FETCH, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data.user);
      } else {
        setUserData(null);
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      setUserData(null);
    }
  };

  useEffect(() => {
    fetchUserData();
    const handleUserUpdated = () => {
      fetchUserData();
    };
  
    window.addEventListener("userUpdated", handleUserUpdated);
  
    return () => {
      window.removeEventListener("userUpdated", handleUserUpdated);
    };
  }, []);
  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-4 flex justify-between items-center"
      >
        {/* Logo section */}
        <div>
          <Link to={"/"}>
            <img src={LOGO} alt="LOGO" className="w-60 h-20 object-contain" />
          </Link>
        </div>
        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6 relative">
            {NavbarMenu.map((menu) => (
              <li key={menu.id} className="relative group">
                <Link
                  to={menu.path || "#"}
                  className="inline-block py-2 px-4 cursor-pointer rounded-lg hover:bg-gray-200 hover:shadow-[0px_7px_10px_-7px_#9e9d9b]"
                >
                  {menu.title}
                </Link>

                {/* Dropdown Menu */}
                {menu.dropdown && (
                  <motion.ul
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 120,
                    }}
                    className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg z-10 hidden group-hover:block"
                  >
                    {menu.dropdown.map((item) => (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }} // Start below the menu
                        animate={{
                          opacity: 1,
                          y: 0, // Slide to position
                        }}
                        transition={{
                          duration: 0.3,
                          delay: item.id * 0.1, // Staggered
                          type: "spring",
                          stiffness: 120, // Natural spring effect
                        }}
                      >
                        <motion.div
                          whileHover={{
                            scale: 1.1, // Zoom effect on hover
                            transition: { type: "spring", stiffness: 300 },
                          }}
                          className="rounded-lg overflow-hidden"
                        >
                          <Link
                            to={item.path}
                            className="block px-4 py-2 hover:bg-gray-200 "
                          >
                            {item.title}
                          </Link>
                        </motion.div>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </li>
            ))}
           <>
           {userData ? (
            <button onClick={handleLogout} className="primary-btn">
              Logout
            </button>
          ) : (
            <Link to="/login" className="primary-btn">
              Sign In
            </Link>
          )}
           </>
          </ul>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <div
            onClick={toggleMobileMenu} // Toggle the mobile menu
            className="cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <IoMdClose className="text-4xl" /> // Show close icon when menu is open
            ) : (
              <IoMdMenu className="text-4xl" /> // Show hamburger icon when menu is closed
            )}
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 w-full bg-white shadow-lg rounded-lg z-20 p-4 mt-10"
            >
              <ul className="space-y-4">
                {/* Mobile Menu Options */}
                {NavbarMenu.map((item) => (
                  <li key={item.id} className="relative">
                    <Link to={item.path}>
                      <div
                        className="block py-2 px-4 cursor-pointer rounded-lg hover:bg-gray-200"
                        onClick={() => {
                          // If the clicked item is Services or Shop, toggle its dropdown
                          if (item.dropdown) {
                            toggleDropdown(item.id);
                          } else {
                            // For other items, close the menu directly
                            setIsMobileMenuOpen(false);
                          }
                        }}
                      >
                        {item.title}
                      </div>
                    </Link>

                    {/* Show dropdown menu if active */}
                    {item.dropdown && activeDropdown === item.id && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          type: "spring",
                          stiffness: 120,
                        }}
                        className="space-y-2 mt-2"
                      >
                        {item.dropdown.map((subItem) => (
                          <motion.li
                            key={subItem.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              duration: 0.3,
                              delay: subItem.id * 0.1,
                              type: "spring",
                              stiffness: 120,
                            }}
                          >
                            <Link
                              to={subItem.path}
                              className="block px-4 py-2 hover:bg-gray-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </li>
                ))}

                <>
                  {userData ? (
                    <Link
                      to="/logout"
                      className="primary-btn"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Logout
                    </Link>
                  ) : (
                    <Link
                      to="/login"
                      className="primary-btn"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                  )}
                </>
              </ul>
            </motion.div>
          )}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
