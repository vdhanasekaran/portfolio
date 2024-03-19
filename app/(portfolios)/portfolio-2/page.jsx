import HeaderTwo from "@/components/homes/headers/HeaderTwo";
import PortfolioTwo from "@/components/homes/portfolio/PortfolioTwo";

import ResumeTwo from "@/components/homes/resume/ResumeTwo";
import React from "react";
export const metadata = {
  title: "Vivek - Senior Software Engineer",
  description:
    "Reliable and detail-oriented professional"
};
export default function page() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <HeaderTwo />
        <PortfolioTwo />
      </div>
    </>
  );
}
