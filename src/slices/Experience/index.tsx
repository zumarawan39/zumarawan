  "use client";
  import { FC, useEffect, useState, useRef } from "react";
  import { Content } from "@prismicio/client";
  import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
  import Image from "next/image";
  import { Slide } from "react-awesome-reveal";
  import { ExperienceCardLoader } from "@/components/ExperienceCard";
  import { useTranslations } from "next-intl";
  import { PrismicNextImage } from "@prismicio/next";

  /**
   * Props for `Experience`.
   */
  export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>;

  const Experience: FC<ExperienceProps> = ({ slice }) => {
    const items = slice.primary.seebiz || [];
    const [loading, setLoading] = useState(true);
    const [visibleCards, setVisibleCards] = useState<number[]>([]);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const t = useTranslations("app.Experience");

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(
                entry.target.getAttribute("data-index") || "0"
              );
              setVisibleCards((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.3, rootMargin: "0px 0px -100px 0px" }
      );

      cardRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });

      return () => observer.disconnect();
    }, [loading]);
    const getCardZigzagClass = (idx: number) => {
      const isEven = idx % 2 === 0;
    
      return `w-1/2 ${
        isEven ? "mr-auto " : "ml-auto "
      } sm:w-full sm:ml-0 sm:mr-0 sm:text-left`;
    };
    

    return (
      <div className="sm:px-4">
        {/* Header Section */}
        <div className="grid grid-cols-2 sm:grid-cols-1 justify-between items-center w-full ">
          <Slide triggerOnce direction="left">
            <div className="flex flex-col items-center justify-center object-cover">
              <Image
                src="/assets/images/experience.png"
                alt="Experience illustration"
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
        
        {/* Zigzag Card Section */}
        <div className="flex flex-col gap-8 mt-8 w-full">
          {(loading ? Array(items.length || 3).fill({}) : items).map(
            (item: any, idx: number) => (
              <div
                key={idx}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                data-index={idx}
                className={`
                  mb-10 
                  ${getCardZigzagClass(idx)}
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
                  <div
                    className="
                      flex items-start sm:flex-col gap-4 border-gray-200 border-2 rounded-md px-4 lg:py-16 sm:py-8 shadow-lg 
                      backdrop-blur-sm
                      transition-all duration-300 ease-in-out
                      hover:shadow-2xl hover:border-green-400 hover:bg-white/20
                      transform hover:scale-105 hover:-translate-y-1
                    "
                  >
                    <div
                      className="
                          bg-white rounded-md px-2 py-4 cursor-pointer shadow-md
                          transition-all duration-300 ease-in-out
                          hover:scale-110 hover:shadow-lg
                          active:scale-95
                        "
                      onClick={() =>
                        window.open(item.company_name?.url || "#", "_blank")
                      }
                    >
                      {item.logo?.url && (
                        <div >
                          <PrismicNextImage field={item.logo} width={200} height={200} />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 lg:items-start justify-center sm:justify-between w-full">
                      <div className="flex justify-between w-full">
                        <h3 className="text-2xl font-semibold sm:text-xl">
                          {item.role?.[0]?.text || "Role"}
                        </h3>
                        <div className="text-sm text-gray-400 mb-2 sm:text-xs">
                          {item.date_to} / {item.data_from || "Present"}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 sm:justify-between">
                        <span className="text-lg font-medium sm:text-sm">
                          {item.company_name?.text || "Company Name"}
                        </span>
                        {item.mode && (
                          <span className="text-xs px-2 py-0.5 rounded bg-primary text-white md:ml-2 sm:text-xsm">
                            {item.mode}
                          </span>
                        )}
                      </div>

                      {item.duties && (
                        <ul className="flex  flex-col gap-2 sm:gap-x-12 items-start list-disc sm:text-sm text-start">
                          {/* <li> */}
                            <PrismicRichText field={item.duties} />
                          {/* </li> */}
                        </ul>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    );
  };

  export default Experience;