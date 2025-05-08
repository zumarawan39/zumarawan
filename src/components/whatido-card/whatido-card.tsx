import { ReactSVG, MongoDBSVG, JavascriptSVG, TypescriptSVG } from '@/assets/svgs/tech-skills-svgs'
import { FullStackDevSVG } from '@/assets/svgs/tech-stack-svgs';
import React, { FC } from 'react'
import { Icon } from '@iconify/react';
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import Image from 'next/image';

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";


export interface Props {
    key: number;
    skillName: string;
    MainSVG: JSX.Element;
    iconsArr: {
        name: string;
        svg: any;
    }[];
    descriptionArr: string[];
}

export const WhatIDoCard: FC<Props> = ({ skillName, MainSVG, iconsArr, descriptionArr }) => {
    return (
        <>
            <div className="flex justify-between sm:flex-col my-20 gap-5">
                <div className='flex-1'>
                <Slide triggerOnce direction="left" className="svg-div w-100% xl:w-50% 2xl:w-50% 2xl:ml-6 sm:flex sm:flex-col sm:justify-center sm:items-center md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-col lg:justify-center lg:items-center self-start mt-4">
                   <Image src={MainSVG} alt={skillName} width={650} />
                </Slide>
                </div>

                <div className="flex-1 sm:mb-2 md:mb-2 lg:mb-2 xl:w-50% 2xl:w-50% flex flex-col items-center justify-center">
                    <Slide triggerOnce direction="right" >
                        <h4 className='text-6xl sm:text-xl  justify-self-center text-center py-6'>{skillName}</h4>
                        <div className=" flex flex-row items-center justify-center gap-4 flex-wrap justify-self-center text-center py-1">
                            {
                                iconsArr.map((element, index) => {
                                    return (
                                        <div key={index} >
                                            <span id={`id-${index}`} className=''>
                                                {element.svg}
                                            </span>
                                            <ReactTooltip
                                                anchorId={`id-${index}`}
                                                place="top"
                                                content={`${element.name}`}
                                            />

                                        </div>
                                    );
                                })
                            }
                        </div>
                        <div className=' my-4'>
                            {
                                descriptionArr.map((element, index) => {
                                    return (
                                        <>
                                            <p key={index} className='lg:text-lg my-3 '>
                                                👉 {element}
                                            </p>
                                        </>
                                    );
                                })
                            }
                        </div>
                    </Slide >
                </div>


            </div>
        </>
    )
}

