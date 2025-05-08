"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LightLogo from "../../../public/assets/images/2.png";
import DarkLogo from "../../../public/assets/images/1.png";
import { NavLinks } from "@/utils/constant";
import Link from "next/link";
import styles from "./navbar.module.scss";
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
import LanguageSelector from "@/components/LanguageSelector";
import Cross from "@/assets/icons/cross.png";
import AppLogo from "@/components/Applogo";
import { FaBars } from "react-icons/fa";
import { usePathname, useRouter } from "@/libs/i18nNavigation";
import { playClickSound } from "@/utils/playSound";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state?.theme?.mode);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme));
  };
  const router = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isMobileMenuOpen]);

  const activeLink = (path: string) => {
    return router === path ? "activeLink" : "";
  };
  return (
    <div>
      <nav className="md:w-10/12 mx-auto flex justify-between items-center -mt-2 sm:w-full">
        {/* Nav logo  */}

        <div>
          <div className="md:hidden">
            <AppLogo />
          </div>
          <Link href="/" className="hover:cursor-pointer sm:hidden">
            <div className="logo">
              <Image
                src={theme === "light" ? DarkLogo : LightLogo}
                alt="Zumar Awan"
                width={120}
                height={100}
              />
            </div>
          </Link>
        </div>
        {/* NavLinks  */}
        <div>
          <ul className="flex items-center gap-6 text-lg sm:hidden ">
            {NavLinks.map((link, idx) => (
              <li key={idx}>
                 <Link
                    href={link.link}
                    className={`${styles.underlineTransition} ${activeLink(link.link)}`}
                    onClick={()=> playClickSound()}
                  >
                    {link.lable}
                  </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Languagae Translate and theme changing  */}
        <div className="flex items-center gap-4 sm:hidden">
          <div>
            <LanguageSelector />
          </div>
          <div>
            {/* theme changing  */}
            <button
              onClick={toggleTheme}
              className={`flex items-center text-nowrap px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out ${theme === "dark" ? "text-black bg-secondary" : "text-white bg-primary"}`}
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
        <div className="flex items-center gap-5 md:hidden">
          <LanguageSelector />

          <button
            onClick={toggleTheme}
            className="p-1 rounded-full bg-primary dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? (
              // Sun icon (for light mode)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 bg-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m8.66-12.34l-.7.7M4.34 19.66l-.7.7m16.36 0l-.7-.7M4.34 4.34l-.7-.7M21 12h1M2 12H1m11-3a3 3 0 100 6 3 3 0 000-6z"
                />
              </svg>
            ) : (
              // Moon icon (for dark mode)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 bg-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293a8 8 0 11-10.586-10.586A8 8 0 0017.293 13.293z" />
              </svg>
            )}
          </button>

          <button
            className="md:hidden p-2"
            onClick={() => {
              playClickSound()
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }}
          >
            <FaBars className="w-7 h-7 " />
          </button>
        </div>
      </nav>
      {
        <>
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 top-0 bg-black bg-opacity-60 z-10 transition-opacity duration-300 "
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
          <div
            className={`md:hidden fixed left-0 w-4/5 bg-white shadow-md transition-all duration-300 z-20 h-screen top-0 ${isScrolled ? "top-0" : ""} ${
              isMobileMenuOpen
                ? "opacity-100  translate-X-0 visible"
                : "opacity-0  -translate-X-2 invisible"
            }`}
          >
            <div className="flex justify-between px-8 py-14 items-center">
              <AppLogo />
              <div
                className="border border-primary rounded-full p-3"

                onClick={() => {
                  playClickSound()
                  setIsMobileMenuOpen(!isMobileMenuOpen)
                }}
                
              >
                <Image
                  src={Cross}
                  height={13}
                  width={12}
                  alt="cross-icon"
                  className=""
                />
              </div>
            </div>
            <ul className="flex items-center gap-6 text-lg sm:hidden ">
              {NavLinks.map((link, idx) => (
                <li key={idx}>
                  {/* <Link
                    href={link.link}
                    className={`${styles.underlineTransition} ${activeLink(link.link)}`}
                  >
                    {link.lable}
                  </Link> */}
                  <Link
                    href={link.link}
                    className={`${styles.underlineTransition} ${activeLink(link.link)}`}
                    onClick={()=> playClickSound()}
                  >
                    {link.lable}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      }
    </div>
  );
};

export default Navbar;
