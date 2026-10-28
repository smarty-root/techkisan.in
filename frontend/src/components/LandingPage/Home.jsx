import React, { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Automation from "../../components/Banner/Automation";
import Solar from "../../components/Banner/Solar";
import Security from "../../components/Banner/Security";
import ITservices from "../../components/Banner/ITservices";
import ScrollToTop from "../../components/Scroller/ScrollToTop";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";


function Home() {
  return (
    <>
      <Helmet>
        <title>Techkisan Automation | Smart Automation, Solar, Security & IT Services</title>
        <meta
          name="description"
          content="Welcome to Techkisan Automation - We provide professional home automation, solar energy solutions, IT services, and advanced security systems across India."
        />
        <meta
          name="keywords"
          content="home automation, solar panel installation, IT services, security solutions, smart home, Techkisan"
        />
        <link rel="canonical" href="https://techkisan.com/" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Techkisan Automation | Smart Automation, Solar, Security & IT Services" />
        <meta
          property="og:description"
          content="Professional home automation, solar energy, IT services, and advanced security solutions provided by Techkisan across India."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.techkisan.com/" />
        <meta property="og:image" content="https://www.techkisan.com/assets/home-banner.jpg" /> {/* Replace with actual OG image */}

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Techkisan Automation",
            "url": "https://www.techkisan.com",
            "logo": "https://www.techkisan.com/logo.png", // replace with real logo path if different
            "sameAs": [
              "https://www.facebook.com/techkisanautomation", // Optional
              "https://www.instagram.com/techkisan",          // Optional
              "https://www.linkedin.com/company/techkisan"    // Optional
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-7972025213",
              "contactType": "Customer Service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            }
          })}
        </script>
      </Helmet>

      <Hero />
      <Services />
      <Automation />
      <Solar />
      <Security />
      <ITservices />
      <Footer />
    </>
  );
}

export default Home;
