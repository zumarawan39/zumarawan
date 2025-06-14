import React from "react";
import Image from "next/image";
import ContentLoader from "react-content-loader";

// This is your custom skeleton loader, matching the design in your image.
export const ExperienceCardLoader = () => (
  <ContentLoader
    speed={2}
    width={1000}
    height={360}
    viewBox="0 1000 360"
   backgroundColor="#a7ece4"
    foregroundColor="#202727"
    style={{ width: "100%", maxWidth: 1000 }}
  >
    <rect x="99" y="13" rx="3" ry="3" width="324" height="23" />
    <rect x="101" y="45" rx="3" ry="3" width="159" height="8" />
    <rect x="-71" y="97" rx="3" ry="3" width="410" height="6" />
    <rect x="-50" y="113" rx="3" ry="3" width="380" height="6" />
    <rect x="-20" y="148" rx="3" ry="3" width="178" height="6" />
    <circle cx="44" cy="44" r="44" />
    <circle cx="68" cy="90" r="2" />
    <rect x="103" y="60" rx="0" ry="0" width="138" height="6" />
    <rect x="372" y="43" rx="0" ry="0" width="27" height="7" />
    <rect x="-2" y="129" rx="0" ry="0" width="303" height="6" />
    <rect x="208" y="127" rx="0" ry="0" width="3" height="2" />
  </ContentLoader>
);
