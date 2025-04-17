
import ThemeWrapper from "@/components/ThemeWrapper";
import { Navbar , Footer} from "@/layout";
import React from "react";


const AppLayout = async (props: {
  children: React.ReactNode;
  params?: { locale: string };
}) => {
  return (
    <>
      <Navbar/>
      <div className="app-layout  mx-auto">
      <ThemeWrapper>{props.children}</ThemeWrapper>
      </div>
      <Footer/>
   
    </>
  );
};

export default AppLayout;
