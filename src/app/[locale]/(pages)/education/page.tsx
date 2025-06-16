"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { Slide } from "react-awesome-reveal";
import { useTranslations } from "next-intl";
import EducationPageSVG from "../../../../../public/assets/images/degree.png";
import Modal from "@/components/Modal";
import ModalHeader from "@/components/Modal/Header";
import ModalBody from "@/components/Modal/Body";
import ModalFooter from "@/components/Modal/Footer";
import Carousel from "@/components/Carousel";
import Link from "next/link";

interface Education {
  degree: string;
  institution: string;
  location: string;
  date: string;
  logo: string;
  link: string;
  details: string[];
}

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  logo: string;
  link: string;
  description: string[];
  mode: string; // "onsite" or "remote"
  certificate: string;
}

const Education = () => {
  const t = useTranslations("app.Education");
  const [openSection, setOpenSection] = useState<string | null>("remote");
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Get education from translations
  const education: Education[] = [
    {
      degree: t("education.0.degree"),
      institution: t("education.0.institution"),
      location: t("education.0.location"),
      date: t("education.0.date"),
      logo: "/assets/images/vu.png",
      link: "https://www.vu.edu.pk/",
      details: t.raw("education.0.details"),
    },
  ];

  // Get certificates from translations
  const certificates: Certificate[] = [
    {
      name: t("certificates.0.name"),
      issuer: t("certificates.0.issuer"),
      date: t("certificates.0.date"),
      logo: "/assets/images/litelogo.jpg",
      certificate: "/assets/images/litecollege.jpeg",
      link: "https://www.facebook.com/p/Lahore-Institute-of-Technical-Education-LITE-100080356542660/",
      description: t.raw("certificates.0.description"),
      mode: "onsite",
    },
    {
      name: t("certificates.1.name"),
      issuer: t("certificates.1.issuer"),
      date: t("certificates.1.date"),
      logo: "/assets/images/corvitlogo.png",
      link: "https://corvit.com/systems/",
      certificate: "/assets/images/corvitcertificate.jpg",
      description: t.raw("certificates.1.description"),
      mode: "onsite",
    },
    {
      name: t("certificates.2.name"),
      issuer: t("certificates.2.issuer"),
      date: t("certificates.2.date"),
      logo: "/assets/images/corvitlogo.png",
      link: "https://corvit.com/systems/",
      certificate: "/assets/images/aws_corvit.jpg",
      description: t.raw("certificates.2.description"),
      mode: "onsite",
    },
    {
      name: t("certificates.3.name"),
      issuer: t("certificates.3.issuer"),
      date: t("certificates.3.date"),
      logo: "/assets/images/tierslimited.jpg",
      link: "#",
      certificate: "/assets/images/Tiers_limted_Certificate.png",
      description: t.raw("certificates.3.description"),
      mode: "remote",
    },
    {
      name: t("certificates.4.name"),
      issuer: t("certificates.4.issuer"),
      date: t("certificates.4.date"),
      logo: "/assets/images/ciscologo.png",
      link: "#",
      certificate: "/assets/images/CiscoC++.png",
      description: t.raw("certificates.4.description"),
      mode: "remote",
    },
    {
      name: t("certificates.5.name"),
      issuer: t("certificates.5.issuer"),
      date: t("certificates.5.date"),
      certificate: "/assets/images/seebiz.jpeg", 
      logo: "",
      link: "https://see.biz/",
      mode: "",
      description: t.raw("certificates.5.description"),
    },
    {
      name: t("certificates.6.name"),
      issuer: t("certificates.6.issuer"),
      date: t("certificates.6.date"),
      certificate: "/assets/images/Boltech_Solution_Certificate.jpg", 
      description: t.raw("certificates.6.description"),
        logo: "",
        link: "https://boltechsolutions.com/",
        mode: ""
    },
  ];

  // Group certificates by mode
  const remoteCertificates = certificates.filter(
    (cert) => cert.mode === "remote"
  );
  const onsiteCertificates = certificates.filter(
    (cert) => cert.mode === "onsite"
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Handle certificate modal
  const handleViewCertificate = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  const openCarousel = () => {
    setIsCarouselOpen(true);
  };

  const nextSlide = () => {
    console.log("Next slide clicked, current slide:", currentSlide);
    setCurrentSlide((prev) => (prev + 1) % certificates.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isCarouselOpen || !isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [isCarouselOpen, isAutoPlaying, currentSlide]);

  
  // Log all certificate image paths
  certificates.forEach((cert, index) => {
    console.log(`Certificate ${index}: ${cert.name} - Image: ${cert.certificate}`);
  });

  // Render certificate image for carousel
  const renderCertificateImage = (cert: Certificate, index: number) => (
    <div className="flex items-center justify-center h-full p-4">
      <div className="relative group max-w-full max-h-full cursor-pointer" onClick={() => handleViewCertificate(cert)}>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-gray-200 shadow-lg">
          <Image
            src={cert.certificate}
            alt={`${cert.name} certificate`}
            width={800}
            height={600}
            className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          />
        </div>
        
        {/* Certificate info overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl font-bold mb-2 text-white">{cert.name}</h3>
            <p className="text-lg font-semibold mb-2 text-white">{cert.issuer}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90 text-white">{cert.date}</p>
                {cert.mode && (
                  <span className="text-xs bg-primary px-2 py-1 rounded-full inline-block mt-1">
                    {cert.mode}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm" onClick={()=>window.open(cert.link, "_blank")}>
                  {t("clickToViewDetails")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-1 justify-between items-center w-full lg:py-14 ">
        <Slide triggerOnce direction="left">
          <div className="flex flex-col items-center justify-center object-cover">
            <Image
              src={EducationPageSVG}
              alt="svg"
              width={500}
              height={500}
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

      {/* Degree Section */}
      <div className="py-16">
        <Slide triggerOnce direction="up">
          <div className="text-center mb-12">
            <h3 className="text-6xl  mb-4">{`{ ${t("aboutDegree")} }`}</h3>
          </div>
        </Slide>

        {education.map((edu, index) => (
          <Slide key={index} triggerOnce direction="up" delay={index * 200}>
            <div className=" mx-auto bg-white border border-gray-100 rounded-lg shadow-lg p-8 mb-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-6">
                <div className="">
                  <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      width={100}
                      height={100}
                      className=" shadow-xl transition-transform duration-700 ease-in-out hover:rotate-360"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="lg:text-4xl sm:text-2xl text-3xl text-black">
                      {edu.degree}
                    </h4>
                    <span className="text-md  md:text-sm text-sm bg-primary px-3 py-1 rounded-full text-black">
                      {edu.date}
                    </span>
                  </div>
                  <h5 className="lg:text-2xl sm:text-xl text-lg font-semibold text-blue-600 mb-2 text-black">
                    {edu.institution}
                  </h5>
                  <p className="text-gray-600 mb-4 text-black">
                    {edu.location}
                  </p>
                  <div className="space-y-2">
                    {edu.details.map((detail, detailIndex) => (
                      <p
                        key={detailIndex}
                        className="!text-gray-300 leading-relaxed text-lg"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                  <div className="mt-6">
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      {t("visitInstitution")}
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        ))}
      </div>

      {/* Certificates Section */}
      <div className="py-16 bg-gray-50">
        <Slide triggerOnce direction="up">
          <div className="text-center mb-12">
            <h3 className="text-6xl  mb-4">{`{ ${t("aboutCourses")} }`}</h3>
            <p className="text-gray-600 lg:text-lg sm:text-sm text-sm mx-auto">
              {t("coursesDescription")}
            </p>
          </div>
        </Slide>

        {/* Accordion UI */}
        <div className=" mx-auto mb-8">
          {/* Onsite Courses Accordion */}
          <div className="border shadow-md border-gray-200">
            <button
              className={`w-full flex justify-between items-center py-4 px-6 text-left text-2xl font-semibold transition-colors duration-300 ${openSection === "onsite" ? "bg-primary text-white" : "bg-white text-gray-800 hover:bg-gray-100"}`}
              onClick={() =>
                setOpenSection(openSection === "onsite" ? null : "onsite")
              }
            >
              {t("onsiteCourses")}
              <span
                className={`transition-transform duration-300 ${openSection === "onsite" ? "rotate-180 text-white" : "rotate-0 "} `}
              >
                {openSection === "onsite" ? "-" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${openSection === "onsite" ? "max-h-[2000px] py-6" : "max-h-0 py-0"}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 px-4">
                {onsiteCertificates.length === 0 && (
                  <div className="col-span-full text-center text-gray-400 py-8 text-lg">
                    {t("noOnsiteCourses")}
                  </div>
                )}
                {onsiteCertificates.map((cert, index) => (
                  <div key={index} className="flex  flex-col gap-6">
                    <div className="rounded-xl shadow-md hover:scale-y-105 hover:shadow-lg transition-all duration-300 transform  border border-gray-100">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="bg-white p-2 rounded-lg">
                            <Image
                              src={cert.logo}
                              alt={`${cert.issuer} logo`}
                              width={50}
                              height={50}
                              className="rounded-lg"
                            />
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="text-sm  bg-gray-100 px-2 py-1 rounded-md text-black">
                              {cert.date}
                            </span>
                            <span className="text-xs px-2 py-1 rounded bg-primary text-white mt-3">
                              {cert.mode}
                            </span>
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold  mb-2  transition-colors duration-200">
                          {cert.name}
                        </h4>
                        <p className="font-medium mb-3">{cert.issuer}</p>
                        <div className="text-sm mb-4 leading-relaxed">
                          {cert.description.map((desc, descIndex) => (
                            <p key={descIndex} className="mb-1">{desc}</p>
                          ))}
                        </div>
                        <div className="flex justify-end">
                          <button
                            onClick={() => handleViewCertificate(cert)}
                            className="group relative inline-flex items-center justify-center px-4 py-2 text-lg font-semibold border border-gray-300 transition-all duration-500 ease-in-out bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 overflow-hidden"
                          >
                            {/* Animated background overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>

                            {/* Shimmer effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                            {/* Button content */}
                            <span className="relative z-10 flex items-center text-sm gap-2">
                              {t("viewCertificate")}
                              <svg
                                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                            </span>

                            {/* Ripple effect on click */}
                            <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-active:scale-100 transition-transform duration-200 ease-out"></div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Remote Courses Accordion */}
          <div className="border my-4 shadow-md border-gray-200">
            <button
              className={`w-full flex justify-between items-center py-4 px-6 text-left text-2xl font-semibold transition-colors duration-300 ${openSection === "remote" ? "bg-primary text-white" : "bg-white text-gray-800 hover:bg-gray-100"}`}
              onClick={() =>
                setOpenSection(openSection === "remote" ? null : "remote")
              }
            >
              {t("certificate")}
              <span
                className={`transition-transform duration-300 ${openSection === "remote" ? "rotate-180  text-white" : "rotate-0"}`}
              >
                {openSection === "remote" ? "-" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${openSection === "remote" ? "max-h-[2000px] py-6" : "max-h-0 py-0"}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 px-4">
                {remoteCertificates.length === 0 && (
                  <div className="col-span-full text-center text-gray-400 py-8 text-lg">
                    {t("noRemoteCertificates")}
                  </div>
                )}
                {remoteCertificates.map((cert, index) => (
                  <div key={index} className="flex flex-col gap-6">
                    <div className="rounded-xl shadow-md hover:scale-y-105 hover:shadow-lg transition-all duration-300 transform border border-gray-100">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="bg-white p-2 rounded-lg">
                            <Image
                              src={cert.logo}
                              alt={`${cert.issuer} logo`}
                              width={50}
                              height={50}
                              className="rounded-lg"
                            />
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="text-sm bg-gray-100 px-2 py-1 rounded-md text-black">
                              {cert.date}
                            </span>
                            <span className="text-xs px-2 py-1 rounded bg-primary text-white mt-3">
                              {cert.mode}
                            </span>
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold mb-2 transition-colors duration-200">
                          {cert.name}
                        </h4>
                        <p className="font-medium mb-3">{cert.issuer}</p>
                        <div className="text-sm mb-4 leading-relaxed">
                          {cert.description.map((desc, descIndex) => (
                            <p key={descIndex} className="mb-1">{desc}</p>
                          ))}
                        </div>
                        <div className="flex justify-end">
                          <button
                            onClick={() => handleViewCertificate(cert)}
                            className="group relative inline-flex items-center justify-center px-4 py-2 text-lg font-semibold border border-gray-300 transition-all duration-500 ease-in-out bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 overflow-hidden"
                          >
                            {/* Animated background overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>

                            {/* Shimmer effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                            {/* Button content */}
                            <span className="relative z-10 flex items-center text-sm gap-2">
                              {t("viewCertificate")}
                              <svg
                                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                            </span>

                            {/* Ripple effect on click */}
                            <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-active:scale-100 transition-transform duration-200 ease-out"></div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center py-8">
        <button
          onClick={openCarousel}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-xl font-semibold text-white transition-all duration-500 ease-in-out bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 overflow-hidden"
        >
          {/* Animated background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>

          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {/* Button content */}
          <span className="relative z-10 flex items-center gap-3">
            {t("viewAllCertificates")}
            <svg
              className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>

          {/* Ripple effect on click */}
          <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-active:scale-100 transition-transform duration-200 ease-out"></div>
        </button>
      </div>

      {/* Certificate Carousel Modal */}
      {isCarouselOpen && (
        <Modal size="lg" id="carouselModal" className="modal-wrapper">
          <ModalHeader onClose={() => setIsCarouselOpen(false)}>
            <div>
              <h3 className="text-3xl text-center sm:text-xl">{t("allCertificates")}</h3>
              <p className="text-center font-medium">
                {t("browseCertificates")}
              </p>
            </div>
          </ModalHeader>
          <ModalBody>
            <div >
              <Carousel
                items={certificates}
                renderItem={renderCertificateImage}
                autoPlay={true}
                autoPlayInterval={4000}
                showDots={true}
                showArrows={true}
                className="p-4"
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <button
              onClick={() => setIsCarouselOpen(false)}
              className="px-6 py-2 border-primary border text-gray-700 rounded-lg hover:text-white hover:bg-primary transition-colors duration-200"
            >
              {t("close")}
            </button>
          </ModalFooter>
        </Modal>
      )}

      {/* Certificate Modal */}
      {isModalOpen && selectedCertificate && (
        <Modal size="sm" id="activeModal" className="modal-wrapper">
          <ModalHeader onClose={closeModal}>
            <div>
              <h3 className="text-3xl">{selectedCertificate.name}</h3>
              <p className=" text-center font-medium">
                {`(${selectedCertificate.issuer})`}
              </p>
            </div>
          </ModalHeader>
          <ModalBody>
            <div >
              {/* Certificate Image */}
              <div className="relative group">
                <div className="rounded-xl p-4 border border-gray-200">
                  <Image
                    src={selectedCertificate.certificate}
                    alt={`${selectedCertificate.name} certificate`}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <button
              onClick={closeModal}
              className="px-6 py-2 border-primary border text-gray-700 rounded-lg hover:text-white hover:bg-primary transition-colors duration-200 "
            >
              {t("close")}
            </button>
            <button
              onClick={() => window.open(selectedCertificate.link, "_blank")}
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary text-white ml-4 rounded-lg  transition-colors duration-200 flex items-center gap-2"
            >
              {t("visitInstitution")}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>
          </ModalFooter>
        </Modal>
      )}

     
    </>
  );
};

export default Education;
