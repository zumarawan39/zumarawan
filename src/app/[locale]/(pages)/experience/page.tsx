"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { Slide } from "react-awesome-reveal";
import ExperiencePageSVG from "../../../../../public/assets/images/experience.png";
import { ExperienceCardLoader } from "@/components/ExperienceCard";

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

const experiences: Experience[] = [
  {
    title: "Jr Software Developer",
    company: "AiGROS Tech",
    location: "",
    date: "11/2024 – Present",
    mode: "Hybrid",
    logo: "/assets/images/cropped-aigros-logo-1.png",
    link:"https://aigros.com/",
    details: [
      "Developing and enhancing web applications for efficiency and usability.",
      "Collaborating with team to ensure seamless user experience.",
      "Building skills in front-end and back-end technologies.",
    ],
  },
  {
    title: "Fresh Graduates Bootcamp",
    company: "BolTech Solutions",
    location: "",
    date: "07/2024 – 10/2024",
    mode: "Onsite",
    logo:"/assets/images/logo-boltech.png",
    link:"https://boltechsolutions.com/",
    details: [
      "Completed a 2-month bootcamp focused on MERN Stack development.",
      "Worked on real-world projects alongside React professionals.",
    ],
  },
  {
    title: "Software Engineer Trainee",
    company: "Secliz Pvt Ltd",
    location: "",
    date: "06/2023 – 07/2024",
    mode: "Onsite",
    logo:"/assets/images/seebiz_logo.svg",
    link:"https://see.biz/",
    details: [
      "Completed 1 year Full Stack training under senior mentorship.",
      "Worked on several projects (mentioned in the portfolio).",
      "Built dynamic web apps using Angular, React JS and Node.js.",
    ],
  },
];

const Experience = () => {
  const [loading, setLoading] = useState(true);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    <>
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
                <h4 className="text-6xl sm:text-xl font-semibold">
                  Experience
                </h4>
                <h5 className="text-4xl md:!text-2.5xl sm:text-xl font-semibold">
                  Work, Internship and Volunteership
                </h5>
                <p className="lg:!text-lg  md:!text-lg text-center">
                  I'm a passionate software engineer who loves crafting creative
                  solutions with code. My main area of expertise revolves around
                  building scalable applications using the MERN stack.
                  Additionally, I have a strong enthusiasm for fostering tech
                  communities and actively engage in various tech events.
                  Guiding and supporting aspiring developers as they begin their
                  career paths brings me immense joy because we all know the
                  struggle of finding the missing semicolon.
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
                    flex items-start gap-4 border-gray-200 border-2 rounded-md px-4 py-16 shadow-lg 
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
                    <div className="flex flex-col gap-2 items-start justify-center">
                  
                    <div className="flex justify-between w-full">
                      {" "}
                      <h3 className="text-2xl font-semibold text-green-400">
                        {(exp as Experience).title}
                      </h3>
                      <div className="text-sm text-gray-400 mb-2">
                        {(exp as Experience).date}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-lg font-medium ">
                        {(exp as Experience).company}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded bg-primary ml-2">
                        {(exp as Experience).mode}
                      </span>
                    </div>
                    <ul className="flex flex-col gap-2 items-start  list-disc ml-5 ">
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
    </>
  );
};

export default Experience;
