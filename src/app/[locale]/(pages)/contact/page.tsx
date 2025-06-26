'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  GithubSVG, 
  LinkedInSVG, 
  InstagramSVG, 
  FacebookSVG, 
  TwitterSVG,
  EmailSVG,
  PhoneSVG,
  LocationSVG
} from '@/assets/svgs/socials-svg';

import Button from '@/components/Button';
import SocialIconWrapper from '@/components/SocialIconWrapper';

const Contact = () => {
  const contactInfo = [
    {
      icon: <EmailSVG />,
      title: "Email",
      value: "zumarawan39@gmail.com",
      link: "mailto:zumarawan39@gmail.com",
      description: "Send me an email anytime",
      // color: "#1976d2" // blue for email
    },
    {
      icon: <PhoneSVG />,
      title: "Phone",
      value: "+92 300 1234567",
      link: "tel:+923001234567",
      description: "Call me during business hours",
      // color: "#43a047" // green for phone
    },
    {
      icon: <LocationSVG />,
      title: "Location",
      value: "Lahore, Pakistan",
      link: "#",
      description: "Available for remote work worldwide",
      // color: "#fbc02d" // yellow for location
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <GithubSVG />,
      url: "https://github.com/zumarawan39",
      color: "hover:bg-gray-900",
      bgcolor: "#181717", // GitHub official color
      description: "Check out my code and projects"
    },
    {
      name: "LinkedIn",
      icon: <LinkedInSVG />,
      url: "https://www.linkedin.com/in/zumar-awan/",
      color: "hover:bg-blue-600",
      bgcolor: "#0077B5", // LinkedIn official color
      description: "Connect with me professionally"
    },
    {
      name: "Instagram",
      icon: <InstagramSVG />,
      url: "https://www.instagram.com/zumar_awan_g/",
      color: "hover:bg-pink-600",
      bgcolor: "#E1306C", // Instagram official color
      description: "Follow my daily updates"
    },
    {
      name: "Twitter",
      icon: <TwitterSVG />,
      url: "https://twitter.com/zumar_awan",
      color: "hover:bg-blue-400",
      bgcolor: "#1DA1F2", // Twitter official color
      description: "Tech thoughts and insights"
    },
    {
      name: "Facebook",
      icon: <FacebookSVG />,
      url: "https://www.facebook.com/zumar.awan.54",
      color: "hover:bg-blue-700",
      bgcolor: "#1877F3", // Facebook official color
      description: "Personal updates and networking"
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl  max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
          </p>
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
              <h2 className="text-3xl font-bold mb-6">
                Let's Connect
              </h2>
              <p className="text-lg  mb-8">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white  rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="">
                      <SocialIconWrapper bgcolor={info.color}>
                        {info.icon}
                        </SocialIconWrapper>
                      </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">
                        {info.title}
                      </h3>
                      <a
                        href={info.link}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
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
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Follow Me
              </h2>
              <p className="text-lg mb-8">
                Connect with me on social media to stay updated with my latest projects, tech insights, and professional journey.
              </p>
            </div>

            {/* Social Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className=" rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} `}>
                      <SocialIconWrapper bgcolor={social.bgcolor}>
                        {social.icon}
                      </SocialIconWrapper>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold   transition-colors duration-300">
                        {social.name}
                      </h3>
                      <p className="text-sm ">
                        {social.description}
                      </p>
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
              className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <h3 className="text-lg font-semibold">Available for Opportunities</h3>
              </div>
              <p className="text-green-100">
                I'm currently open to new projects, collaborations, and exciting opportunities. 
                Let's discuss how we can work together!
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start a Project?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Let's discuss your ideas and turn them into reality. I'm here to help you build something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as="a"
                type="PrimaryOutline"
                size="Large"
                to="mailto:zumarawan39@gmail.com"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Send Email
              </Button>
              <a
                href="https://github.com/zumarawan39"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;