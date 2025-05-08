import React from 'react'

import { WhatIDoCard } from '../whatido-card/whatido-card';
import { ReactSVG, VueSVG, PiniaSVG, MySqlSVG, CiCdSVG, DockerSVG, SequelizeSVG, MongoDBSVG, JavascriptSVG, TypescriptSVG, HtmlSVG, CssSVG, NodeSVG, TailwindSVG, BootstrapSVG, JwtSVG, NextSVG, ReduxSVG, ReduxSagaSVG, ExpressJsSVG, MongooseSVG, JiraSVG, GitSVG, PostmanSVG, FigmaSVG, MaterialUI, JestSVG } from '@/assets/svgs/tech-skills-svgs'
import {FullStackDevSVG,  FullStackDevSVGAlt } from '@/assets/svgs/tech-stack-svgs'
import MeWithCoding from '@/assets/images/menwithcoding.png'

function WhatIDo() {

    const Data = [
        {
            skillName: "Full-stack Web Development",
            MainSVG: MeWithCoding,
            iconsArr: [
                {
                    name: "React",
                    svg: <ReactSVG />
                },
                {
                    name: "Next.js",
                    svg: <NextSVG />
                },
               
                {
                    name: "Redux",
                    svg: <ReduxSVG />
                },
                // {
                //     name: "Redux Saga",
                //     svg: <ReduxSagaSVG />
                // },
               
                {
                    name: "JavaScript",
                    svg: <JavascriptSVG />
                },
                {
                    name: "TypeScript",
                    svg: <TypescriptSVG />
                },
                {
                    name: "Tailwind-CSS",
                    svg: <TailwindSVG />
                },
                {
                    name: "Material-UI",
                    svg: <MaterialUI />
                },
                {
                    name: "Bootstrap",
                    svg: <BootstrapSVG />
                },
                {
                    name: "HTML5",
                    svg: <HtmlSVG />
                },
                {
                    name: "CSS3",
                    svg: <CssSVG />
                },
                {
                    name: "Node.js",
                    svg: <NodeSVG />
                },
                {
                    name: "Express.js",
                    svg: <ExpressJsSVG />
                },
                {
                    name: "MongoDB",
                    svg: <MongoDBSVG />
                },
                {
                    name: "Mongoose",
                    svg: <MongooseSVG />
                },
                {
                    name: "MySQL",
                    svg: <MySqlSVG />
                },
               
            
                {
                    name: "JWT",
                    svg: <JwtSVG />
                },
                {
                    name: "Git",
                    svg: <GitSVG />
                },
                {
                    name: "Jira",
                    svg: <JiraSVG />
                },
                {
                    name: "Postman",
                    svg: <PostmanSVG />
                },
                {
                    name: "Figma",
                    svg: <FigmaSVG />
                },

            ],
            descriptionArr: [
                'Developing responsive single page web applications front end using React.js, Next.js, Redux.js, Angular, TailwindCSS, Material-UI,  HTML/CSS and Bootstrap.',
                'Creating secure and fast backends for application utilizing Node.js and Express.js',
                'Interacting with the databases like MongoDB, MySQL, PostgreSQL using ODMs/ORMs like Mongoose, Sequelize and Prisma respectively.',
                // 'Utilizing  GraphQL for efficient data querying and manipulation.',
                'Utilizing TypeScript for its powerful features like static typing etc to develop both front-end and back-end applications with enhanced code quality, maintainability, and scalability.',
                'Developing and consuming RESTful APIs, employing modern programming practices to ensure integration.',
                
            ]
        },
    ]

    return (
        <>
            <div>
                <h3 className='text-6xl sm:text-3xl text-center mb-4 sm:font-semibold'>{`< What I do? />`}</h3>
                <h4 className='text-4xl md:!text-2.5xl sm:text-xl sm:my-2 text-center'>I love to code for contract based projects and help companies expand their businesses.🤜🤛</h4>
                <h4 className='text-3xl sm:text-lg text-center'>My tech expertise are as follows:</h4>
                {   
                    Data.map((element, index) => {
                        
                        return (
                            <WhatIDoCard key={index} MainSVG={element.MainSVG} skillName={element.skillName} iconsArr={element.iconsArr} descriptionArr={element.descriptionArr} />
                        );
                    })

                }
            </div>
        </>
    )
}

export default WhatIDo