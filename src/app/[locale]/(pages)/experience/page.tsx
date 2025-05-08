import ExperiencePageSVG from '@/assets/svgs/experience-page-svg'
import React from 'react'
import { Slide } from 'react-awesome-reveal'

const Experience = () => {
  return (
    <div className="flex">
    <Slide triggerOnce direction="left" className="svg-div w-100% xl:w-50% 2xl:w-50% 2xl:ml-6 sm:flex sm:flex-col sm:justify-center sm:items-center md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-col lg:justify-center lg:items-center self-start mt-4">
        <ExperiencePageSVG />
    </Slide>
    <div className="sm:mb-2 md:mb-2 lg:mb-2 xl:w-50% 2xl:w-50% flex flex-col items-center justify-center pt-14 xl:pt-12 2xl:pt-0">
        <Slide triggerOnce direction="right" >
            <h4 className='text-6xl sm:text-xl font-semibold text-center'>Experience</h4>
            <h5 className='text-4xl md:!text-2.5xl sm:text-xl font-semibold text-center'>Work, Internship and Volunteership</h5>
            <p className='text-lg justify-self-center text-center py-1'>I'm a passionate software engineer who loves crafting creative solutions with code. My main area of expertise revolves around building scalable applications using the MERN stack. Additionally, I have a strong enthusiasm for fostering tech communities and actively engage in various tech events. Guiding and supporting aspiring developers as they begin their career paths brings me immense joy because we all know the struggle of finding the missing semicolon. 😉</p>
        </Slide>
    </div>
</div>
  )
}

export default Experience