
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrolltoTop";
import ThemeWrapper from "@/components/ThemeWrapper";
import { Navbar , Footer} from "@/layout";
import React from "react";


const AppLayout = async (props: {
  children: React.ReactNode;
  params?: { locale: string };
}) => {
  return (
    <>
      {/* <CustomCursor /> */}
      <Navbar/>
      <div className="app-layout  mx-auto">
      <ThemeWrapper>{props.children}</ThemeWrapper>
      </div>
      <Footer/>
      <ScrollToTop />
   
    </>
  );
};

export default AppLayout;
