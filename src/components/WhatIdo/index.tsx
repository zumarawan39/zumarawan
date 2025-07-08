"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { WhatIDoCard } from "../whatido-card/whatido-card";
import MeWithCoding from "@/assets/images/menwithcoding.png";
import { ReactSVG, NextSVG, ReduxSVG, JavascriptSVG, TypescriptSVG, TailwindSVG, MaterialUI, BootstrapSVG, HtmlSVG, CssSVG, NodeSVG, ExpressJsSVG, MongoDBSVG, MongooseSVG, MySqlSVG, JwtSVG, GitSVG, JiraSVG, PostmanSVG, FigmaSVG } from "@/assets/svgs/tech-skills-svgs";

function WhatIDo() {
  const t = useTranslations("app.WhatIDo");

  // For descriptions, fetch as an array for i18n support
  const descriptionArr = t.raw("FullStackDev.descriptionArr") as string[];

  const Data = [
    {
      skillName: t("FullStackDev.skillName"),
      MainSVG: MeWithCoding,
      iconsArr: [
        { name: "React", svg: <ReactSVG /> },
        { name: "Next.js", svg: <NextSVG /> },
        { name: "Redux", svg: <ReduxSVG /> },
        { name: "JavaScript", svg: <JavascriptSVG /> },
        { name: "TypeScript", svg: <TypescriptSVG /> },
        { name: "Tailwind-CSS", svg: <TailwindSVG /> },
        { name: "Material-UI", svg: <MaterialUI /> },
        { name: "Bootstrap", svg: <BootstrapSVG /> },
        { name: "HTML5", svg: <HtmlSVG /> },
        { name: "CSS3", svg: <CssSVG /> },
        { name: "Node.js", svg: <NodeSVG /> },
        { name: "Express.js", svg: <ExpressJsSVG /> },
        { name: "MongoDB", svg: <MongoDBSVG /> },
        { name: "Mongoose", svg: <MongooseSVG /> },
        { name: "MySQL", svg: <MySqlSVG /> },
        { name: "JWT", svg: <JwtSVG /> },
        { name: "Git", svg: <GitSVG /> },
        { name: "Jira", svg: <JiraSVG /> },
        { name: "Postman", svg: <PostmanSVG /> },
        { name: "Figma", svg: <FigmaSVG /> }
      ],
      descriptionArr
    }
  ];

  return (
    <div>
      <h3 className="text-6xl sm:text-3xl text-center mb-4 sm:font-semibold">{t("title")}</h3>
      <h4 className="text-4xl md:!text-2.5xl sm:text-xl sm:my-2 text-center">{t("subtitle")}</h4>
      <h4 className="text-3xl sm:text-lg text-center">{t("techExpertise")}</h4>
      {Data.map((element, index) => (
        <WhatIDoCard
          key={index}
          MainSVG={element.MainSVG}
          skillName={element.skillName}
          iconsArr={element.iconsArr}
          descriptionArr={element.descriptionArr}
        />
      ))}
    </div>
  );
}

export default WhatIDo;