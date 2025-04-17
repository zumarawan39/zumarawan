  "use client";

  import { useEffect, useState } from "react";
  import { useSelector } from "react-redux";
  import { RootState } from "@/store";

  export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
    const theme = useSelector((state: RootState) => state.theme.mode);

    useEffect(() => {
      const root = window.document.documentElement;
  
      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark"); 
      }
    }, [theme]);

  
    return (
      <div className="min-h-screen">
        {children}
      </div>
    );
  }
  