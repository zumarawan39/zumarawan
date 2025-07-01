'use client';
import React, { useEffect, useRef, useState, useTransition } from 'react';
import Image from 'next/image';
import DownArrow from '@/assets/icons/downarrow.png';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';


import { usePathname, useRouter } from '@/libs/i18nNavigation';
import { useLocale } from 'next-intl';

import { motion } from 'motion/react';

import intailLogo from "../../../public/assets/images/intail-logo.png";


import { setLocale } from '@/store/slices/localSlice';

interface LanguageSelectorProps {}

const LanguageSelector: React.FC<LanguageSelectorProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { languages } = useSelector((state: RootState) => state.systemConfig);
  const { current_language } = useSelector((state: RootState) => state.locale);

  const reference = useRef<HTMLButtonElement | any>(null);
  const floatingRef = useRef<HTMLDivElement | any>(null);

  const dispatch = useDispatch();

  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const [isPending, startTransition] = useTransition();
   const theme = useSelector((state: RootState) => state?.theme?.mode);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const cLanguage = languages.find((lang: any) => lang.id === locale);
  
    if (cLanguage) {
      dispatch(setLocale(cLanguage));
    } else {
      console.warn("No matching language found for locale:", locale);
    }
  }, [languages, locale, dispatch]);
  

  //   // Handle outside clicks
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        reference.current &&
        floatingRef.current &&
        !reference.current.contains(event.target as Node) &&
        !floatingRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const switchLanguage = (lang: any) => {
    setIsOpen(false);
    startTransition(() => {
      dispatch(setLocale(lang));
      router.push(`/${lang.id}${pathname}`);
      router.refresh();
    });
  };

  return (
    <div className={`relative`}>
      {isPending && (
        <div className="fixed inset-0 flex items-center justify-center h-screen bg-gray-100 bg-opacity-65 z-50 backdrop-blur-sm">
          <div className="relative w-40 h-40 flex items-center justify-center">
            {/* Rotating Circle */}
            <motion.div
              className="absolute w-full h-full border-t-2 border-primary rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            />

            {/* Logo */}
            <div className="text-primary font-bold text-2xl">
              <Image src={intailLogo} alt="Logo" width={36} height={36} />
            </div>
          </div>
        </div>
      )}
      {/* Trigger for Dropdown */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        ref={reference}
        onClick={toggleDropdown}
      >
        <div className="rounded-full overflow-hidden w-7 h-7">
          <Image
            src={current_language.iconPath}
            alt="Flag"
            className="object-cover h-full w-full"
            height={28}
            width={28}
          />
        </div>
        <h2 className="text-base sm:hidden">{current_language.short}</h2>
        <Image
          src={DownArrow}
          alt="Down Arrow"
          className="w-4 h-4 sm:hidden"
          height={16}
          width={16}
        />
      </div>

      {/* Dropdown */}
      {
        <div
          ref={floatingRef}
          className={`mt-2 w-52 absolute flex flex-col gap-2 p-3 bg-white border border-gray-200 rounded-xl z-10 shadow-gray-light-md transition-all duration-300 transform sm:right-0 ${
            isOpen
              ? 'opacity-100 scale-100 translate-y-0 visible'
              : 'opacity-0 scale-95 -translate-y-2 invisible'
          }`}
        >
          {languages.map((lang: any) => (
            <div
              key={lang.id}
              className="py-2 px-3 cursor-pointer hover:bg-gray-100 flex items-center gap-x-2 "
              onClick={() => switchLanguage(lang)}
            >
              <Image
                src={lang.iconPath}
                alt="Flag"
                height={28}
                width={28}
                className="rounded-full"
              />
              <p className="text-lg text-black">{lang.name}</p>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default LanguageSelector;
