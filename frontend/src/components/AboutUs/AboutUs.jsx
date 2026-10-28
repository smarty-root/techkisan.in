import React from "react";
import { Helmet } from "react-helmet";
import WhyChooseUs from "./WhyChooseUs";
import Info from "./Info";
import Testimonials from "./Testimonials";
import OurTeam from "./OurTeam";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  return (
    <>
    <Helmet>
        <title>About Us | Techkisan Automation – Automation, Solar & Security Solutions</title>
        <meta
          name="description"
          content="Learn about Techkisan Automation, our mission, expert team, and why we are the trusted provider of automation, solar, security, and IT services in Maharashtra and beyond."
        />
        <meta
          name="keywords"
          content="Techkisan Automation, about us, automation services, solar solutions, security systems, IT services, Maharashtra service provider"
        />
        <link rel="canonical" href="https://www.techkisan.com/aboutus" />
        <meta property="og:title" content="About Us | Techkisan Automation – Automation, Solar & Security Solutions" />
        <meta
          property="og:description"
          content="Meet the expert team at Techkisan Automation and discover our wide range of services including automation, solar energy, security solutions, and IT services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.techkisan.com/aboutus" />
        <meta property="og:image" content="https://www.techkisan.com/assets/about-us-banner.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Us",
            "url": "https://www.techkisan.com/aboutus",
            "description": "Learn about Techkisan Automation, our mission, expert team, and services including automation, solar, security, and IT.",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.techkisan.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About Us",
                  "item": "https://www.techkisan.com/aboutus"
                }
              ]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Techkisan Automation",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.techkisan.com/logo.png"
              }
            }
          })}
        </script>
      </Helmet>
      <Info />
      <WhyChooseUs />
      <OurTeam />
      <Testimonials />
      <Footer />
    </>
  );
};

export default AboutUs;
