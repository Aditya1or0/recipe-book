import { Link, NavLink, useNavigate } from "react-router-dom";
import logoWhite from "../assets/logo-white.png";
import logoBlack from "../assets/logo-black.png";
import { useState } from "react";
import { Search } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "@/components/theme-provider";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };
  //Dark Mode
  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <nav className="bg-inherit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={isDarkMode ? logoWhite : logoBlack}
                alt="Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 border-rose-500 text-rose-600"
                    : "text-gray-600 dark:text-gray-300 hover:text-rose-600"
                } inline-flex items-center px-1 pt-1 text-sm font-medium transition duration-200 ease-in-out`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 border-rose-500 text-rose-600"
                    : "text-gray-600 dark:text-gray-300 hover:text-rose-600"
                } inline-flex items-center px-1 pt-1 text-sm font-medium transition duration-200 ease-in-out`
              }
            >
              About
            </NavLink>
          </div>

          {/* Search and ModeToggle (Desktop) */}
          <div className="hidden sm:flex items-center space-x-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search recipes..."
                className="w-64 px-4 py-2 rounded-full bg-inherit text-inherit border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition duration-200"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-2 mr-2 text-gray-400 hover:text-gray-600"
              >
                <Search className="h-5 w-5 mr-1 mt-1" />
              </button>
            </form>
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-rose-50 border-l-4 border-rose-500 text-rose-700"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                } block pl-3 pr-4 py-2 text-base font-medium`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-rose-50 border-l-4 border-rose-500 text-rose-700"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                } block pl-3 pr-4 py-2 text-base font-medium`
              }
            >
              About
            </NavLink>
          </div>
          {/* Mobile Search */}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <form onSubmit={handleSearchSubmit} className="mt-3 px-2 space-y-1">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search recipes..."
                className="block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="mt-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
