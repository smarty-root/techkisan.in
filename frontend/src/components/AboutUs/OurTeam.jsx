import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa";
import placeholder from "../../assets/user.jpg"

const teamMembers = [
  {
    name: "KOUSTUBH DEOKATE",
    position: "Co-Founder And CFO",
    description: "Strategic leader driving financial growth and technological innovation at Techkisan Automation.",
    image: placeholder,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://www.facebook.com",
    Instagram: "htpps://www.instagram.com",
  },
  {
    name: "SWAPNIL AMBULE",
    position: "Founder And CEO",
    description: "Visionary leader driving innovation, growth, and automation at Techkisan Automation.",
    image: placeholder,
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://www.facebook.com",
    Instagram: "htpps://www.instagram.com",
  },
];

const TeamMemberCard = ({ member }) => (
  <div className="bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out p-6 rounded-lg">
    <img className="w-24 h-24 rounded-full mx-auto" src={member.image} alt={member.name} />
    <h2 className="text-xl font-semibold mt-4 text-center">{member.name}</h2>
    <p className="text-gray-600 text-center">{member.position}</p>
    <p className="text-gray-700 mt-2 text-center">{member.description}</p>
    <div className="flex justify-center mt-4">
      {/* <a href={member.linkedin} className="text-blue-500 mx-2">
        <FaLinkedin size={20} />
      </a>
      <a href={member.twitter} className="text-blue-400 mx-2">
        <FaTwitter size={20} />
      </a>
      <a href={member.facebook} className="text-blue-500 mx-2">
        <FaFacebook size={20} />
      </a>
      <a href={member.instagram} className="text-pink-700 mx-2">
        <FaInstagram size={20} />
      </a> */}
    </div>
  </div>
);

const OurTeam = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Our Team</h1>
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation
          spaceBetween={30}
          slidesPerView={2} 
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 }, 
          }}
          className="py-6 pb-10"
        >
        
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <TeamMemberCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurTeam;
