"use client";
import Image from "next/image";
import React from "react";
import LightLogo from "../../../public/assets/images/1.png";
import DarkLogo from "../../../public/assets/images/2.png";
import { NavLinks } from "@/utils/constant";
import Link from "next/link";
import {
  FiSun,
  FiMoon,
  FiHome,
  FiMessageSquare,
  FiLogOut,
} from "react-icons/fi";

import { RootState } from "@/store";
import { setTheme } from "@/store/slices/themeSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state?.theme?.mode);
  console.log("theme=====>", theme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
  };

  return (
    <div>
      <nav className="container mx-auto border-2 flex justify-between items-center">
        {/* Nav logo  */}

        <div className="border-2">
          <Image
            src={theme === "light" ? DarkLogo : LightLogo}
            alt="logo"
            width={120}
            height={80}
            className="object-contain object-center w-full h-full"
          />
        </div>
        {/* NavLinks  */}
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-4">
            {NavLinks.map((link, idx) => (
              <li key={idx}>
                <Link href={link.link}>{link.lable}</Link>
              </li>
            ))}
          </ul>
          <div>
            {/* theme changing  */}
            <button
              onClick={toggleTheme}
              className={`flex items-center bg-gray-700 hover:bg-gray-600  px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out ${theme === "light" ? "text-black" : "text-white"}`}
            >
              {theme === "light" ? (
                <FiMoon className="mr-2" />
              ) : (
                <FiSun className="mr-2" />
              )}
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
