import Hero from "@/components/preview/Hero";
import Buy from "@/components/preview/Buy";
import CopyRight from "@/components/preview/CopyRight";
import Demo from "@/components/preview/Demo";
import Features from "@/components/preview/Features";
import Home1 from "./(homes)/home-1/page";

import "../public/assets/css/style.css";

export const metadata = {
  title: "Vivek - Software Engineer",
  description:
    "Reliable and detail-oriented professional",
};
export default function page() {
  return (
    <>
    <Home1/>
      {/* <Hero />
      <Demo />
      <Features />
      <Buy />
      <CopyRight /> */}
    </>
  );
}
