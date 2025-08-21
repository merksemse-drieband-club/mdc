// components/Navbar.js

// Declaring that this file uses client-side rendering
"use client";

// Importing React hooks and Link component from Next.js
import { useState } from "react"; // useState hook is used to manage state in functional components
import Link from "next/link"; // Link component for navigation between pages
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Over ons" },
  { href: "/teams", label: "Ploegen" },
  { href: "/calendar", label: "Kalender" },
  { href: "/board", label: "Bestuur" },
  { href: "/contact", label: "Contact" },
  { href: "/bonus", label: "Bonusberekening" },
];

const Navbar = () => {
  const pathname = usePathname();
  // State to control the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the state of the mobile menu (open or closed)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky shadow-md p-4 mb-5">
      {" "}
      {/* Main navigation bar container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {" "}
        {/* Flexbox layout for the navbar */}
        {/* Logo Section */}
        <div className="text-black font-bold text-xl">
          <Link href="/">
            <img src="/mdcdnl.png" alt="" width={100} height={60} />
          </Link>{" "}
          {/* A link to the homepage */}
        </div>
        {/* Desktop Menu (visible on medium and larger screens) */}
        <div className="hidden md:flex space-x-6">
          {" "}
          {/* Hidden on small screens, flex for larger screens */}
          {/* Navigation links */}
          {NAV_ITEMS.map(({ href, label }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`${
                  isActive
                    ? "text-red-600/50 font-bold"
                    : "text-black hover:bg-red-600/50"
                } text-lg`}
              >
                {label}
              </Link>
            );
          })}
        </div>
        {/* Mobile Menu Button (visible only on small screens) */}
        <button className="md:hidden text-black" onClick={toggleMenu}>
          {/* Mobile hamburger icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu (displayed when the menu is open) */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        {/* A vertically stacked menu for small screens */}
        <div className="space-y-4 py-4 px-6 bg-(background)">
          {/* Mobile navigation links */}
          {NAV_ITEMS.map(({ href, label }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`${
                  isActive
                    ? "text-red-600/50 font-bold"
                    : "text-black hover:bg-red-600/50"
                } text-sm block`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
