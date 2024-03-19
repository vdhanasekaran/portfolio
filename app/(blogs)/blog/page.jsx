import Header from "@/components/homes/headers/Header";
import PersonalInfo from "@/components/homes/personalInfo/PersonalInfo";

import Blog from "@/components/homes/blogs/Blog";
import Resume from "@/components/homes/resume/Resume";
import React from "react";

import MenuTwo from "@/components/homes/menus/MenuTwo";
export const metadata = {
  title: "Vivek - Senior Software Engineer",
  description:
    "Reliable and detail-oriented professional"
};
export default function page() {
  return (
    <>
      <div className="page-wrapper home-1" id="blog">
        <Header />
        <div className="container z-index-3">
          <div className="row">
            <PersonalInfo />
            <Blog />
            <MenuTwo />
          </div>
        </div>
      </div>
    </>
  );
}
