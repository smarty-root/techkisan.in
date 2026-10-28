import React from "react";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const WhyChooseUs = () => {
  return (
    <>
      <section class="">
        <div class="py-12 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
              <h2 class="font-heading mb-4 bg-primary opacity-80 text-black px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                Why choose us?
              </h2>
              <p class="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Innovating Automation, Enhancing Security – Your Trusted Technology Partner.
              </p>
              <p class="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
              We specialize in automation and security solutions, ensuring seamless integration and efficiency for our customers. Your safety and convenience are our priority.
              </p>
            </div>

            <div class="mt-10">
              <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://www.svgrepo.com/show/339451/professional-marketplace.svg" />
                     
                    </div>
                    <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Professional Service
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                  We delivers expert services with precision and quality. Our skilled team ensures every solution is tailored to your needs. We are committed to providing reliable and efficient results.
                  </dd>
                </div>
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://www.svgrepo.com/show/486865/support.svg" />
                    </div>
                    <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Great Support
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    Our dedicated support team provides quick responses and effective solutions. We ensure seamless service and ongoing assistance for all your needs. Your satisfaction is our priority.
                  </dd>
                </div>
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://www.svgrepo.com/show/141137/black-printer.svg" />
                    </div>
                    <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Affordable Prices
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    We offer high-quality services at prices that fit your budget. Our solutions are cost-effective without compromising on performance. Techkisan Automation makes advanced technology accessible for everyone.
                  </dd>
                </div>
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://www.svgrepo.com/show/375235/warranty-term.svg" />
                    </div>
                    <p class="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Service Warranty
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    All our services include a trusted warranty for your peace of mind. We guarantee quality and long-lasting performance in every solution. Techkisan Automation stands by its commitment to excellence.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
