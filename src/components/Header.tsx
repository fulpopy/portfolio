"use client";
import { useState, useRef, useEffect } from "react";
import { NavItems } from "@/models/NavItem";
import { user, navItems } from "../constants/constant";
import { BiMenu } from "react-icons/bi";
import { Link as ScrollLink } from "react-scroll";
const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const headerRef = useRef<HTMLInputElement>(null);
  const onClickOutside = (e: MouseEvent) => {
    if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
      setShowMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [showMenu]);
  return (
    <header
      ref={headerRef}
      className="bg-white p-4 md:p-6 justify-between w-full z-10 fixed top-0 md:flex"
    >
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold flex items-center">{user.name}</h1>
        <BiMenu
          className="md:hidden cursor-pointer hover:bg-gray-400 hover:rounded-full p-1"
          size={40}
          onClick={() => setShowMenu((prevState) => !prevState)}
        />
      </div>
      <div
        className={`mr-8 md:space-x-6 mt-3 md:mt-0 md:block ${
          showMenu ? "block" : "hidden"
        } flex flex-col md:flex-row space-y-2 md:space-y-0 align-right items-end`}
      >
        {Object.keys(navItems).map((item) => (
          <ScrollLink
            to={navItems[item as keyof NavItems].path}
            smooth={true}
            className="block md:inline-block cursor-pointer"
            spy={true}
            key={navItems[item as keyof NavItems].label}
            onClick={() => setShowMenu(false)}
          >
            {navItems[item as keyof NavItems].label}
          </ScrollLink>
        ))}
      </div>
    </header>
  );
};

export default Header;
