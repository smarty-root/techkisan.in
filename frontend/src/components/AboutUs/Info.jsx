import React from "react";
import aboutus from "../../assets/aboutus.jpg"

const Info = () => {
  return (
    <>
      <div class="sm:flex items-center max-w-screen-xl">
        <div class="sm:w-1/2 p-10">
          <div class="image object-center text-center">
            <img src={aboutus} alt="About Techkisan Automation" />
          </div>
        </div>
        <div class="sm:w-1/2 p-5">
          <div class="text">
            <span class="text-gray-500 border-b-2 border-primary uppercase">
              About us
            </span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">
              About <span class="text-primary">Our Company</span>
            </h2>
            <p class="text-gray-700">
            Welcome to <strong>Techkisan Automation</strong>, your trusted partner in delivering innovative and reliable technology solutions. Founded with the vision to make advanced automation accessible to everyone, we specialize in home and building automation, security systems, solar energy solutions, and IT services. Our mission is to enhance everyday living and working environments with cutting-edge technology that ensures convenience, safety, and sustainability. <br /><br />

At Techkisan Automation, we are driven by a commitment to quality and customer satisfaction. From smart home systems to eco-friendly energy solutions, our services are designed to transform your spaces into smarter, safer, and more efficient environments. Guided by our founder and co-founder, we take pride in combining expertise, innovation, and integrity to exceed client expectations.<br /><br />

With a strong focus on delivering tailored solutions, we work closely with you to understand your unique needs and provide results that make a meaningful difference. As we continue to grow, we remain dedicated to staying ahead of technological advancements, ensuring that our offerings are always at the forefront of the industry.<br /><br />

Choose <span className="text-primary">Techkisan Automation</span> for expert solutions that redefine how you live, work, and connect with technology. Together, let's create a smarter and more sustainable future.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
