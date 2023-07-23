import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import ProfilePic1 from "../../img/Profile1.jpg";
import ProfilePic2 from "../../img/Profile2.jpg";
import ProfilePic3 from "../../img/Profile3.jpg";
import ProfilePic4 from "../../img/Profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: ProfilePic1,
      review:
        "Hi Everyone! I had completed my Highschool from New R S J Public School Prayagraj with 9.1 CGPA in Year 2017. ",
    },
    {
      img: ProfilePic2,
      review:
        "Namaste Everyone! I had completed my Intermediate from Uma Inter College Prayagraj with 77.40 % in Year 2019.",
    },
    {
      img: ProfilePic3,
      review:
        "Hi! Currently I'm pursuing Bachelor of Technology (Btech) in computer science and engineering from Vellore institute of Technology (VIT) University with 8.03 CGPA from 2020.",
    },
    {
      img: ProfilePic4,
      review:
        "During my internship at [IIIT Allahabad, AWS, Microsoft...etc], I had the opportunity to work in [Full-Stack development, Data Analytics....etc.], where I actively participated in various projects, collaborated with talented teams, and applied my skills in [web development,database,security,...etc.].This experience provided invaluable learning and personal growth, enhancing my understanding of the industry. I am grateful for the hands-on exposure and the chance to contribute meaningfully to the organization's goals, setting a strong foundation for my future career endeavors.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>My Educational </span>
        <span>Qualifications </span>
        <span>...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
