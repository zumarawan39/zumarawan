
import ThemeWrapper from "@/components/ThemeWrapper";
import { Navbar , Footer} from "@/layout";
import React from "react";

const AppLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar/>
      <div className="app-layout">
      <ThemeWrapper>{children}</ThemeWrapper>
      </div>
      <Footer/>
   
    </>
  );
};

export default AppLayout;
