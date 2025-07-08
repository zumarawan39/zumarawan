"use client";
import { useTranslations } from "next-intl";
import { Calendar } from "lucide-react";
import React, { useRef } from "react";
import Image from "next/image";
import MyImage2 from "../../../../../public/assets/images/zumar-dark.png";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { motion, useInView } from "motion/react";
import { slideInLeft, slideInRight } from "@/utils/animation";
import ScrollIndicator from "@/components/ScrollIndicator";
import Button from "@/components/Button";
import WhatIDo from "@/components/WhatIdo";

const Home = () => {
  const t = useTranslations("app.Home");
  const ref = useRef(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const scrollToNextSection = () => {
    const currentSection = document.querySelector(".current-section");
    if (currentSection?.nextElementSibling) {
      (currentSection.nextElementSibling as HTMLElement).scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      className="flex items-center flex-col sm:px-4"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="relative lg:mb-28">
        <div className="flex items-center justify-between sm:flex-col md:!py-6 lg:py-14 w-full  current-section " ref={sectionRef}>
          {/* Left div with left animation */}
          <motion.div
            className="flex flex-col items-start  gap-4 sm:my-10"
            variants={slideInLeft}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-6xl sm:text-xl font-semibold">{t("greeting")}</h1>
            <h2 className="text-4xl md:!text-2.5xl sm:text-xl font-semibold">{t("title")}</h2>
            <h2 className="2xl:text-2.5xl  md:!text-2xl ">{t("subtitle")}</h2>
            <Button
              type="Primary"
              className="md:mt-10 sm:mt-5 "
              onClick={() =>
                window.open("https://calendly.com/zumarawan39/30min", "_blank")
              }
            >
              <div className="flex items-center gap-4 text-lg sm:text-sm sm:gap-2 ">
                {t("book_a_call")}
                <Calendar className="w-6 h-6 mr-2 inline sm:w-3 sm:h-3" />
              </div>
            </Button>
          </motion.div>

          {/* Right div with right animation */}
          <motion.div
            variants={slideInRight}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-end md:ml-5"
          >
            <Image src={MyImage2} height={600} width={800} alt="Zumar Awan" />
          </motion.div>
        </div>
        <div onClick={scrollToNextSection} className="hover:cursor-pointer flex justify-center md:mt-10 lg:mt-24 ">
          <ScrollIndicator />
        </div>
      </div>
      <div>
        <WhatIDo/>
      </div>
    </motion.div>
  );
};

export default Home;