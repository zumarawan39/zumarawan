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
      icon: <EmailSVG size="30" color="#1976d2" />,
      title: "Email",
      value: "zumarawan39@gmail.com",
      link: "mailto:zumarawan39@gmail.com",
      description: "Send me an email anytime",
      bgColor: "bg-blue"
    },
    {
      icon: <PhoneSVG size="30" color="#43a047" />,
      title: "Phone",
      value: "+92 325 8255993",
      link: "tel:+923258255993",
      description: "Call me during business hours",
      bgColor: "bg-green"
    },
    {
      icon: <LocationSVG size="30" color="#e53935" />,
      title: "Location",
      value: "Lahore, Pakistan",
      link: "#",
      description: "Available for remote work worldwide",
      bgColor: "bg-red"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <GithubSVG size="30" color="#333" />,
      url: "https://github.com/zumarawan39",
      description: "Check out my code and projects",
      bgColor: "hover:bg-gray-800"
    },
    {
      name: "LinkedIn",
      icon: <LinkedInSVG size="30" color="#0077B5" />,
      url: "https://www.linkedin.com/in/zumar-awan/",
      description: "Connect professionally",
      bgColor: "hover:bg-blue-700"
    },
    {
      name: "Instagram",
      icon: <InstagramSVG size="30" color="#E1306C" />,
      url: "https://www.instagram.com/zumar_awan_g/",
      description: "Follow my daily updates",
      bgColor: "hover:bg-pink-600"
    },
    {
      name: "Twitter",
      icon: <TwitterSVG size="30" color="#1DA1F2" />,
      url: "https://twitter.com/zumar_awan",
      description: "Tech thoughts and insights",
      bgColor: "hover:bg-blue-400"
    },
    {
      name: "Facebook",
      icon: <FacebookSVG size="30" color="#1877F2" />,
      url: "https://www.facebook.com/zumar.awan.54",
      description: "Personal updates and networking",
      bgColor: "hover:bg-blue-600"
    }
  ];



  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
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
                  className="bg-white text-black  rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                      <SocialIconWrapper bgcolor={""}>
                        {info.icon}
                        </SocialIconWrapper>
                        
                    <div className="flex-1">
                      <h3 className="text-lg text-black font-semibold mb-1">
                        {info.title}
                      </h3>
                      <a
                        href={info.link}
                        className="font-medium transition-colors"
                      >
                        {info.value}
                      </a>
                      <p className="text-sm text-gray-300 mt-1">
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
                  className=" rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white text-black"
                >
                  <div className="flex text-black sitems-center space-x-4">
                    {/* <div className={`w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} `}> */}
                      <SocialIconWrapper bgcolor={social.bgcolor}>
                        {social.icon}
                      </SocialIconWrapper>
                    {/* </div> */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-black transition-colors duration-300">
                        {social.name}
                      </h3>
                      <p className="text-sm text-black">
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
  <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-0 left-0 w-full h-full opacity-10">
      <div className="absolute top-1/4 -left-20 w-40 h-40 bg-purple-300 rounded-full filter blur-xl"></div>
      <div className="absolute bottom-1/3 -right-20 w-48 h-48 bg-blue-300 rounded-full filter blur-xl"></div>
    </div>
    
    <div className="relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Start a <span className="text-yellow-300">Project</span>?
      </h2>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
        Let's collaborate and bring your vision to life. I'm here to help you build something amazing.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          as="a"
          type="PrimaryOutline"
          size="Large"
          to="mailto:zumarawan39@gmail.com"
          className="bg-white text-blue-600 hover:bg-gray-50 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          icon={<EmailSVG color="#1976d2" className="w-5 h-5 mr-2" />}
        >
          Send Email
        </Button>
        
        <Button
          as="a"
          type="SecondaryOutline"
          size="Large"
          to="https://github.com/zumarawan39"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-white text-white hover:bg-white hover:text-blue-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          icon={<GithubSVG color="currentColor" className="w-5 h-5 mr-2" />}
        >
          View Projects
        </Button>
      </div>
      
      <div className="mt-8 pt-6 border-t border-white/20">
        <p className="text-sm opacity-80">
          Typically respond within <span className="font-semibold">24 hours</span>
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