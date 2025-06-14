"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { Slide } from "react-awesome-reveal";
import ExperiencePageSVG from "../../../../../public/assets/images/experience.png";
import { ExperienceCardLoader } from "@/components/ExperienceCard";
import { useTranslations } from "next-intl";

interface Experience {
  title: string;
  company: string;
  location: string;
  date: string;
  mode: string;
  logo: string;
  link: string;
  details: string[];
}

const Experience = () => {
  const t = useTranslations("app.Experience");
  const [loading, setLoading] = useState(true);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Get experiences from translations
  const experiences: Experience[] = [
    {
      title: t("experiences.0.title"),
      company: t("experiences.0.company"),
      location: "",
      date: t("experiences.0.date"),
      mode: t("experiences.0.mode"),
      logo: "/assets/images/cropped-aigros-logo-1.png",
      link: "https://aigros.com/",
      details: t.raw("experiences.0.details"),
    },
    {
      title: t("experiences.1.title"),
      company: t("experiences.1.company"),
      location: "",
      date: t("experiences.1.date"),
      mode: t("experiences.1.mode"),
      logo: "/assets/images/logo-boltech.png",
      link: "https://boltechsolutions.com/",
      details: t.raw("experiences.1.details"),
    },
    {
      title: t("experiences.2.title"),
      company: t("experiences.2.company"),
      location: "",
      date: t("experiences.2.date"),
      mode: t("experiences.2.mode"),
      logo: "/assets/images/seebiz_logo.svg",
      link: "https://see.biz/",
      details: t.raw("experiences.2.details"),
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [loading]);

  return (
    <div className="sm:px-4">
      <div className="grid grid-cols-2 sm:grid-cols-1 justify-between items-center w-full ">
        <Slide triggerOnce direction="left">
          <div className="flex flex-col items-center justify-center object-cover">
            <Image
              src={ExperiencePageSVG}
              alt="svg"
              width={600}
              height={600}
              className="svg-image"
            />
          </div>
        </Slide>
        <Slide triggerOnce direction="right">
          <div className="sm:mb-2 md:mb-2 lg:mb-2 flex flex-col items-center justify-center pt-14 xl:pt-12 2xl:pt-0">
            <Slide triggerOnce direction="right">
              <div className="flex flex-col items-center justify-center content-center gap-4">
                <h4 className="text-6xl sm:text-4xl font-semibold">
                  {t("title")}
                </h4>
                <h5 className="text-4xl md:!text-2.5xl sm:text-xl font-semibold">
                  {t("subtitle")}
                </h5>
                <p className="lg:!text-lg  md:!text-lg text-center">
                  {t("description")}
                </p>
              </div>
            </Slide>
          </div>
        </Slide>
      </div>
      <div className="flex flex-col gap-8 mt-8 w-full">
        <div className="w-full p-8">
          {(loading ? Array(3).fill({}) : experiences).map(
            (exp: Experience | {}, idx: number) => (
              <div
                key={idx}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                data-index={idx}
                className={`
                  mb-10 w-1/2
                  ${idx % 2 === 0 ? "ml-0 mr-auto text-left" : "ml-auto mr-0 text-right"}
                  sm:w-full sm:ml-0 sm:mr-0 sm:text-left
                  transition-all duration-1000 ease-out
                  ${visibleCards.includes(idx) 
                    ? 'opacity-100 transform translate-y-0 scale-100' 
                    : 'opacity-0 transform translate-y-20 scale-95'
                  }
                  ${idx % 2 === 0 
                    ? visibleCards.includes(idx) ? 'translate-x-0' : '-translate-x-20'
                    : visibleCards.includes(idx) ? 'translate-x-0' : 'translate-x-20'
                  }
                  hover:scale-105 hover:-translate-y-2 hover:shadow-2xl
                `}
                style={{
                  transitionDelay: `${idx * 200}ms`
                }}
              >
                {loading ? (
                  <ExperienceCardLoader />
                ) : (
                  <div className="
                    flex items-start sm:flex-col gap-4 border-gray-200 border-2 rounded-md px-4 lg:py-16 sm:py-8 shadow-lg 
                    bg-white/50 backdrop-blur-sm
                    transition-all duration-300 ease-in-out
                    hover:shadow-2xl hover:border-green-400 hover:bg-white/70
                    transform hover:scale-105 hover:-translate-y-1
                  ">
                   <div 
                     className="
                       bg-white rounded-md px-2 py-4 cursor-pointer shadow-md
                       transition-all duration-300 ease-in-out
                       hover:scale-110 hover:shadow-lg
                       active:scale-95
                     " 
                     onClick={()=>window.open((exp as Experience).link, "_blank")}
                   >
                      <Image src={(exp as Experience).logo} alt="logo" width={100} height={100} />
                    </div>
                    <div className="flex flex-col gap-2  lg:items-start justify-center sm:justify-between w-full">
                  
                    <div className="flex justify-between w-full">
                      {" "}
                      <h3 className="text-2xl font-semibold sm:text-xl">
                        {(exp as Experience).title}
                      </h3>
                      <div className="text-sm text-gray-400 mb-2 sm:text-xs">
                        {(exp as Experience).date}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:justify-between">
                      <span className="text-lg font-medium sm:text-sm">
                        {(exp as Experience).company}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded bg-primary md:ml-2 sm:text-xsm">
                        {(exp as Experience).mode}
                      </span>
                    </div>
                    <ul className="flex flex-col gap-2 sm:gap-x-12 items-start list-disc ml-5 sm:text-sm">
                      {(exp as Experience).details?.map(
                        (item: string, i: number) => <li key={i}>{item}</li>
                      )}
                    </ul>
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
