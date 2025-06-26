"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubSVG, ExternalLinkSVG } from "@/assets/svgs/socials-svg";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("app.Projects");
  // Project data with translation keys
  const projects = [
    {
      id: 1,
      key: "BestConnectClient",
      image: "/assets/images/bectconnect_client.png",
      liveUrl: "https://bestconnect.online",
    },
    {
      id: 2,
      key: "BestConnectAdmin",
      image: "/assets/images/bestconnect_admin.png",
      liveUrl: "https://admin.bestconnect.online",
    },
    {
      id: 3,
      key: "WeSparkle",
      image: "/assets/images/wesparkle_admin.png",
      liveUrl: "",
    },
    {
      id: 4,
      key: "MedConnect",
      image: "/assets/images/medconnect.png",
      liveUrl: "",
    },
    {
      id: 5,
      key: "TelecomProjects",
      image: "/assets/images/bfree.png",
      liveUrl: "",
    },
    {
      id: 6,
      key: "Portfolio",
      image: "/assets/images/portfolio.png",
      liveUrl: "https://zumarportfoliospa.netlify.app/",
    },
  ];

  return (
    <div className="min-h-screen md:py-20 px-4 sm:px-6 sm:py-5">
      <div className=" mx-auto">
        {/* Header Section */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-5">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 60 }}
                transition={{ duration: 0.7, delay: idx * 0.18, type: 'spring', stiffness: 70 }}
                whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(0,0,0,0.13)' }}
                className="relative rounded-2xl overflow-hidden group shadow-xl cursor-pointer flex flex-col justify-end md:min-h-[380px]"
              >
                <Image
                  src={project.image}
                  alt={t(`${project.key}.title`)}
                  width={800}
                  height={400}
                  className="w-full h-96 sm:h-60 object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-50"
                />
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="bg-black bg-opacity-0 group-hover:bg-opacity-40 w-full h-full flex items-center justify-center transition-all duration-300"
                    style={{ position: 'absolute', inset: 0 }}
                  >
                    <div
                      className="opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-75 transition-all duration-300 ease-in-out bg-white text-black w-12 h-12 rounded-full flex items-center justify-center shadow-md"
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
                </Link>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="absolute bottom-0 left-0 w-full bg-primary my-4 md:px-6 md:py-4 sm:text-sm sm:px-4 sm:py-2 text-white"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="md:text-lg font-semibold text-white">
                      {t(`${project.key}.title`)}
                    </h3>
                    <h3 className=" text-white">{t(`${project.key}.role`)}</h3>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl mb-6 opacity-90">
              Have a project in mind? I'd love to hear about it and help bring
              your ideas to life.
            </p>
            <Button
              as="navLink"
              type="PrimaryOutline"
              size="Large"
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Get In Touch
            </Button>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Projects;
