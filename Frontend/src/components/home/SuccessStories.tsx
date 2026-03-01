// components/SuccessStories.tsx
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const SuccessStories: React.FC = () => {
  useEffect(() => {
    const successSwiper = new Swiper('.success-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        }
      }
    });

    return () => {
      successSwiper.destroy();
    };
  }, []);

  const stories = [
    {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600",
      university: "Started at community college, transferred to University",
      testimony: "I wasn't sure I could afford college. CollegeFinder helped me find scholarships and a transfer path that saved me thousands!",
      achievements: ["First-generation student", "Graduated debt-free"]
    },
    {
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600",
      university: "Went back to school at age 28",
      testimony: "After working in retail for years, I thought college wasn't for me. The advisors helped me find an adult education program that fit my schedule.",
      achievements: ["Career changer", "Evening program graduate"]
    }
  ];

  return (
    <section className="success-stories">
      <div className="container">
        <h2 data-aos="fade-up">Student Experiences</h2>
        <p className="section-subtitle" data-aos="fade-up">Hear from students who were once in your position</p>

        <div className="swiper success-slider">
          <div className="swiper-wrapper">
            {stories.map((story, index) => (
              <div className="swiper-slide" key={index}>
                <div className="story-card">
                  <img src={story.image} alt={story.name} />
                  <div className="story-content">
                    <h3>{story.name}</h3>
                    <p className="university">{story.university}</p>
                    <p className="testimony">"{story.testimony}"</p>
                    <div className="achievements">
                      {story.achievements.map((achievement, i) => (
                        <span key={i}>{achievement}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;