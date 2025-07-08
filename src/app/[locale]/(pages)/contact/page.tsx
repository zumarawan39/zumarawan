"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GithubSVG,
  LinkedInSVG,
  InstagramSVG,
  FacebookSVG,
  TwitterSVG,
  EmailSVG,
  PhoneSVG,
  LocationSVG,
} from "@/assets/svgs/socials-svg";

import Button from "@/components/Button";
import SocialIconWrapper from "@/components/SocialIconWrapper";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("app.Contact");
  const contactInfo = [
    {
      icon: <EmailSVG size="30" color="#1976d2" />,
      title: t("email"),
      value: "zumarawan39@gmail.com",
      link: "mailto:zumarawan39@gmail.com",
      // description: t("form.email"),
      bgColor: "bg-blue",
    },
    {
      icon: <PhoneSVG size="30" color="#43a047" />,
      title: t("phone"),
      value: "+92 325 8255993",
      link: "tel:+923258255993",
      // description: t("form.name"),
      bgColor: "bg-green",
    },
    {
      icon: <LocationSVG size="30" color="#e53935" />,
      title: "Location",
      value: "Lahore, Pakistan",
      link: "#",
      description: "Available for remote work worldwide",
      bgColor: "bg-red",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <GithubSVG size="30" color="#333" />,
      url: "https://github.com/zumarawan39",
      description: "Check out my code and projects",
      bgColor: "hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      icon: <LinkedInSVG size="30" color="#0077B5" />,
      url: "https://www.linkedin.com/in/zumar-awan/",
      description: "Connect professionally",
      bgColor: "hover:bg-blue-700",
    },
    {
      name: "Instagram",
      icon: <InstagramSVG size="30" color="#E1306C" />,
      url: "https://www.instagram.com/zumar_awan_g/",
      description: "Follow my daily updates",
      bgColor: "hover:bg-pink-600",
    },
    {
      name: "Twitter",
      icon: <TwitterSVG size="30" color="#1DA1F2" />,
      url: "https://twitter.com/zumar_awan",
      description: "Tech thoughts and insights",
      bgColor: "hover:bg-blue-400",
    },
    {
      name: "Facebook",
      icon: <FacebookSVG size="30" color="#1877F2" />,
      url: "https://www.facebook.com/zumar.awan.54",
      description: "Personal updates and networking",
      bgColor: "hover:bg-blue-600",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ">
            {t("title")}
          </h1>
          <p className="text-xl  max-w-3xl mx-auto">{t("description")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-center font-bold mb-6">
                {t("subtitle")}
              </h2>
              <p className="text-lg sm:text-center mb-8">{t("reachout")}</p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white text-black  rounded-xl md:p-2 sm:p-2 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 sm:space-x-2">
                    <SocialIconWrapper bgcolor={""}>
                      {info.icon}
                    </SocialIconWrapper>

                    <div className="flex-1">
                      <h3 className="text-lg sm:text-sm text-black font-semibold md:mb-1">
                        {info.title}
                      </h3>
                      <a
                        href={info.link}
                        className="font-medium transition-colors text-sm"
                      >
                        {info.value}
                      </a>
                      <p className="text-sm sm:text-xs text-gray-300 md:mt-1">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8 sm:space-y-4"
          >
            <div>
              <h2 className="text-3xl sm:text-2xl font-bold mb-6">
                {t("reachout")}
              </h2>
            </div>

            {/* Social Cards */}
            <div className="grid grid-cols-1 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className=" rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white text-black"
                >
                  <div className="flex text-black sitems-center space-x-4">
                    {/* <div className={`w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} `}> */}
                    <SocialIconWrapper bgcolor={social.bgColor}>
                      {social.icon}
                    </SocialIconWrapper>
                    {/* </div> */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-black transition-colors duration-300">
                        {social.name}
                      </h3>
                      <p className="text-sm text-black">{social.description}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-primary to-emerald-600 rounded-xl p-6 text-white border-gray-300"
            >
              <div className="flex items-center space-x-3 md:mb-3">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <h3 className="text-lg font-semibold">
                  Available for Opportunities
                </h3>
              </div>
              <p className="text-white">
                I'm currently open to new projects, collaborations, and exciting
                opportunities. Let's discuss how we can work together!
              </p>
            </motion.div>
          </motion.div>
        </div>

       {/* Call to Action */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="text-center md:mt-24 sm:mt-10 md:px-4"
>
  <div className="relative bg-gradient-to-br from-blue-700 via-purple-700 to-purple-500 rounded-3xl p-10 sm:p-8 text-white overflow-hidden shadow-xl border border-white/10">
    {/* Decorative gradients and shapes */}
    <div className="pointer-events-none absolute inset-0 z-0">
      {/* Soft purple blur left */}
      <div className="absolute -top-24 -left-20 w-72 h-72 bg-purple-400 rounded-full filter blur-2xl opacity-30"></div>
      {/* Soft blue blur right */}
      <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-blue-400 rounded-full filter blur-2xl opacity-25"></div>
      {/* Subtle overlay lines */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/0 [mask-image:linear-gradient(to_top,transparent_60%,white_100%)]"></div>
    </div>

    <div className="relative z-10">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-xl">
        {t("cta_title")}
      </h2>
      <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed text-white/90 drop-shadow">
        {t("cta_description")}
      </p>

      <div className="flex  sm:flex-col gap-4 justify-center hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
        <Button
          type="PrimaryOutline"
          className=""
          icon={<EmailSVG color="#1976d2" size="1em" />}
          onClick={() => window.open("mailto:zumarawan39@gmail.com", "_blank")}
        >
          {t("cta_send_email")}
        </Button>

        <Button
          type="SecondaryOutline"
          className="font-semibold hover:bg-white hover:text-blue-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          icon={<GithubSVG color="currentColor" size="1em" />}
          onClick={()=>window.open("https://github.com/zumarawan39","_blank")}
        >
          {t("cta_view_projects")}
        </Button>
      </div>

      <div className="mt-10 pt-6 border-t border-white/15">
        <p className="text-sm opacity-80 tracking-wide">
          <span className="font-semibold">{t("cta_response_time")}</span>
        </p>
      </div>
    </div>
  </div>
</motion.div>
      </div>
    </div>
  );
};

export default Contact;
