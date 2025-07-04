"use client";

import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";


/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects: FC<ProjectsProps> = ({ slice }) => {
const t = useTranslations("app.Projects");

  const projects = slice.primary.projects || [];
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span>
              {t("title")}
            </span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>
      <AnimatePresence>
        <div className="grid !grid-cols-2 lg:grid-cols-2 " style={{
          gap:"20px"
        }}>
          {projects.map((item: any, idx: number) => (
          <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{
            type: 'spring',
            stiffness: 250,      // much faster
            damping: 25,         // less bouncy
            delay: idx * 0.02    // much shorter stagger
          }}
          whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(0,0,0,0.13)' }}
          className="relative  rounded-xl overflow-hidden group shadow-xl cursor-pointer md:min-h-[380px] flex items-center content-center justify-center "
        >
              <PrismicNextImage
                field={item.project_image}
                className="w-full h-96 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-50"
              />
              {item.project_link?.url && (
                <PrismicNextLink
                  field={item.project_link}
                  className="absolute inset-0 flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className=" bg-black bg-opacity-65 group-hover:bg-black-opacity-6 w-full h-full flex items-center justify-center transition-all duration-300 "
                    style={{ position: 'absolute', inset: 0}}
                  >
                    <div
                      className="opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-75 transition-all duration-300 ease-in-out bg-primary text-white w-12 h-12  sm:text-sm  rounded-full flex items-center justify-center shadow-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5 transform rotate-[-45deg]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </motion.div>
                </PrismicNextLink>
              )}
              <motion.div
                initial={{ opacity: 0, y: 1 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="absolute bottom-0 w-4/5 sm:w-full px-4 !mx-auto bg-primary my-4  sm:text-sm sm:px-2 sm:py-2"
              >
                <div className="flex justify-between items-center">
                  <h2 className="md:text-lg font-semibold sm:text-nowrap"  style={{
                    color:"white",
                    padding:"10px",
                      whiteSpace: "nowrap"
                  }}>
                    <PrismicRichText field={item.project_name} />
                  </h2>
                  <h2  style={{
                    color:"white",
                   whiteSpace: "nowrap"
                  }}>
                    <PrismicRichText field={item.project_role}  />
                  </h2>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </section>
  );
};

export default Projects;
