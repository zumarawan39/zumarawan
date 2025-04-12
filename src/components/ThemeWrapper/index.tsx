"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const theme = useSelector((state: RootState) => state.theme.mode);
  console.log("theme==>",theme);
  

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    } 
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-8">

      {children}
    </div>
  );
}
