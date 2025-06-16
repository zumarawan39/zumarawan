"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import ModalHeader from "@/components/Modal/Header";
import ModalBody from "@/components/Modal/Body";
import ModalFooter from "@/components/Modal/Footer";

interface Certificate {
  name: string;
  issuer: string;
  date: string;
  certificate: string; // Image path
  description: string;
}

const professionalCertificates: Certificate[] = [
  {
    name: "Basic Training Program - Web Development",
    issuer: "SeeBiz Pvt Ltd",
    date: "31/07/2024",
    certificate: "/images/seeBiz_certificate.jpg", // Refer to image1
    description:
      "Completed one year of Basic Training Program in Web Development at SeeBiz Pvt Ltd, covering fundamental concepts and hands-on projects.",
  },
  {
    name: "MERN Stack Bootcamp",
    issuer: "Boltech Solutions",
    date: "2024",
    certificate: "/images/boltech_certificate.jpg", // Refer to image2
    description:
      "Successfully completed the Summer Boot Camp 2024 at Boltech Solutions, focused on practical MERN Stack development and industry-relevant project work.",
  },
];

const ProfessionalCertificatesCarousel = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Carousel auto-play effect
  useEffect(() => {
    if (!isCarouselOpen || !isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % professionalCertificates.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isCarouselOpen, isAutoPlaying, currentSlide]);

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + professionalCertificates.length) %
        professionalCertificates.length
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % professionalCertificates.length
    );
  };

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
  };

  // You must place the uploaded images in your public directory as:
  // - /public/images/seeBiz_certificate.jpg  (for image1)
  // - /public/images/boltech_certificate.jpg (for image2)
  // Or adjust the paths as needed.

  return (
    <>
      <div className="text-center py-8">
        <button
          className="group relative inline-flex items-center justify-center px-8 py-4 text-xl font-semibold text-white transition-all duration-500 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 overflow-hidden"
          onClick={() => setIsCarouselOpen(true)}
        >
          <span className="relative z-10 flex items-center gap-3">
            View All Professional Certificates
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </span>
        </button>
      </div>

      {isCarouselOpen && (
        <Modal size="sm" id="professionalCertificatesCarousel">
          <ModalHeader onClose={() => setIsCarouselOpen(false)}>
            <div>
              <h3 className="text-3xl text-center mb-2">Professional Certificates</h3>
              <p className="text-center font-medium">
                Browse through my professional certification achievements
              </p>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="relative  flex flex-col items-center justify-center">
              {/* Certificate Slide */}
              <div className="w-full max-w-xl mx-auto">
                <div className="flex flex-col items-center gap-6">
                  <div className="relative group w-full flex flex-col items-center">
                    <Image
                      src={professionalCertificates[currentSlide].certificate}
                      alt={professionalCertificates[currentSlide].name}
                      width={600}
                      height={430}
                      className="rounded-xl shadow-lg object-contain bg-white"
                      priority
                      style={{ maxHeight: 350, width: "auto" }}
                    />
                    <div className="absolute bottom-2 right-2 bg-primary text-white text-xs px-3 py-1 rounded shadow">
                      {professionalCertificates[currentSlide].date}
                    </div>
                  </div>
                  <div className="w-full text-center">
                    <h4 className="text-xl font-bold mb-1 text-primary">
                      {professionalCertificates[currentSlide].name}
                    </h4>
                    <p className="font-medium mb-2">{professionalCertificates[currentSlide].issuer}</p>
                    <p className="text-gray-700 text-sm">{professionalCertificates[currentSlide].description}</p>
                  </div>
                </div>
              </div>
              {/* Carousel Controls */}
              <div className="flex items-center justify-center ">
                <button
                  onClick={prevSlide}
                  className="bg-white border-2 border-primary rounded-full p-4 shadow-lg hover:bg-blue-50 transition-all duration-200 hover:scale-110"
                  aria-label="Previous"
                >
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                  </svg>
                </button>
                {/* Pagination Dots */}
                <div className="flex gap-3 ">
                  {professionalCertificates.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      onMouseEnter={() => setIsAutoPlaying(false)}
                      onMouseLeave={() => setIsAutoPlaying(true)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        idx === currentSlide
                          ? "bg-primary scale-125"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextSlide}
                  className="bg-white border-2 border-primary rounded-full p-4 shadow-lg hover:bg-blue-50 transition-all duration-200 hover:scale-110"
                  aria-label="Next"
                >
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
              {/* Auto-play Toggle */}
              <div className="flex justify-center ">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  {isAutoPlaying ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6"/>
                      </svg>
                      <span className="text-sm">Pause</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-6.518-3.759A1 1 0 007 8.118v7.764a1 1 0 001.234.97l6.518-1.179A1 1 0 0016 14.882V9.12a1 1 0 00-1.248-.952z"/>
                      </svg>
                      <span className="text-sm">Play</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <button
              onClick={() => setIsCarouselOpen(false)}
              className="px-6  border-primary border text-gray-700 rounded-lg hover:text-white hover:bg-primary transition-colors duration-200"
            >
              Close
            </button>
          </ModalFooter>
        </Modal>
      )}
    </>
  );
};

export default ProfessionalCertificatesCarousel;