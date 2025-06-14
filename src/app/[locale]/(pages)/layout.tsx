import React from "react";
import { routing } from "@/libs/i18nNavigation";
import AppLayout from "../Applayout";
import SocialIconWrapper from "@/components/SocialIconWrapper";
import Link from "next/link";
import {
  GithubSVG,
  LinkedInSVG,
  InstagramSVG,
  FacebookSVG,
  TwitterSVG,
} from "@/assets/svgs/socials-svg";

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function Layout(props: {
  children: React.ReactNode;
  params: { locale?: string };
}) {

  const locale = props.params?.locale ?? routing.defaultLocale;
  return (
    <AppLayout params={{ locale }}>
      <div className="flex  justify-between relative">
        <div className="flex flex-col items-center gap-16  w-1/12 fixed bottom-0 sm:hidden">
          <div>
            <Link
              href="https://github.com/zumarawan39"
              passHref={true}
              target="_blank"
            >
              <SocialIconWrapper bgcolor={"black"}>
                <GithubSVG />
              </SocialIconWrapper>
            </Link>
            <Link
              href="https://www.linkedin.com/in/zumar-awan/"
              passHref={true}
              target="_blank"
            >
              <SocialIconWrapper bgcolor={"rgb(0, 119, 181)"}>
                <LinkedInSVG />
              </SocialIconWrapper>
            </Link>
            <Link
              href="https://www.instagram.com/zumar_awan_g/"
              passHref={true}
              target="_blank"
            >
              <SocialIconWrapper bgcolor={"rgb(214,41,118)"}>
                <InstagramSVG />
              </SocialIconWrapper>
            </Link>
            <Link
              href="https://twitter.com/iamhurera"
              passHref={true}
              target="_blank"
            >
              <SocialIconWrapper bgcolor={"rgb(29, 161, 242)"}>
                <TwitterSVG />
              </SocialIconWrapper>
            </Link>
            <Link
              href="https://www.facebook.com/zumar.awan.54"
              passHref={true}
              target="_blank"
            >
              <SocialIconWrapper bgcolor={"rgb(24, 119, 242)"}>
                <FacebookSVG />
              </SocialIconWrapper>
            </Link>
          </div>
          {/* <div className="h-28 w-1 !bg-black dark:bg-white"> */}
          <div className="2xl:h-56 md:h-40  w-0.5 bg-primary ransition-colors duration-300"></div>
        </div>
        <div className=" mx-auto md:w-10/12 sm:w-full">
          {props.children}
        </div>
        <div className="flex flex-col items-center w-1/12 fixed lg:top-96 lg:h-96 right-0 sm:hidden">
          <div className="2xl:h-56 md:h-40 w-0.5 bg-primary ransition-colors duration-300 absolute lg:-top-96"></div>
           
          <Link
            href="mailto:zumarawan39@gmail.com"
            className="transform -rotate-90 origin-bottom whitespace-nowrap tracking-widest lg:mt-16 md:mt-8  cursor-pointer  lg:text-lg md:text-sm lg:ml-5"
            style={{
              letterSpacing: "8px",
            }}
          >
            zumarawan39@gmail.com
          </Link>
        </div>
        <div>
          
        </div>
      </div>
    </AppLayout>
  );
}
