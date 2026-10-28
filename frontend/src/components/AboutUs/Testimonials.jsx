import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import styles from "../../styles/Testimonials.module.css";
import "swiper/css/pagination";
import placeholder from "../../assets/user.jpg";

const Testimonials = () => {
  return (
    <section
      className={`${styles.section__container} ${styles.client__container}`}
      id="client"
    >
      <h2 className={styles.section__header}>
        OUR <span className="text-primary">TESTIMONIALS</span>
      </h2>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        className={styles.swiper}
      >
        <SwiperSlide>
          <div className={styles.client__card}>
            <img src={placeholder} alt="client" />
            <div>
              <i className="ri-double-quotes-r"></i>
            </div>
            <p>
              I've been using their automation services for over a year now, and
              I couldn't be happier with my experience. The range of solutions
              they offer is impressive—from smart home automation to advanced
              security systems, there's something for every need.
            </p>
            <h4>Sumita chouhan</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.client__card}>
            <img src={placeholder} alt="client" />
            <div>
              <i className="ri-double-quotes-r"></i>
            </div>
            <p>
              The solar services provided were top-notch and highly efficient.
              The team ensured a seamless installation process and guided me
              through every step. I'm truly grateful to have found such a
              reliable and knowledgeable provider for my solar energy needs.
            </p>
            <h4>Amit Soni</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.client__card}>
            <img src={placeholder} alt="client" />
            <div>
              <i className="ri-double-quotes-r"></i>
            </div>
            <p>
              I've explored many home automation solutions before, but none
              compare to this. From the moment I integrated their system, I felt
              a new level of convenience, security, and efficiency. The team
              provided exceptional support, making the entire process seamless
              and stress-free.
            </p>
            <h4>Ayush Goel</h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
