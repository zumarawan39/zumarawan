
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubSVG, ExternalLinkSVG } from "@/assets/svgs/socials-svg";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function Projects() {
  const client = createClient();
  const page = await client.getSingle("projects");
  

  return (
    <div className="min-h-screen md:py-20 px-4 sm:px-6 sm:py-5">
      <div className="mx-auto">
      
        {/* Render Prismic Slices */}
        {page?.data?.slices?.length > 0 ? (
          <SliceZone slices={page.data.slices} components={components} />
        ) : (
          <div>No projects slices found.</div>
        )}
      </div>
    </div>
  );
}
