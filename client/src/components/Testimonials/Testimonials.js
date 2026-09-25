import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { GiMedicalDrip } from 'react-icons/gi';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Mysuru',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    service: 'Dental Implants',
    text: 'I had been suffering with missing teeth for years. Dr. Priya gave me a beautiful smile back with dental implants. The process was explained thoroughly, the clinic is spotless, and the results are beyond what I imagined. Absolutely worth every rupee!',
  },
  {
    name: 'Anitha Reddy',
    location: 'Bengaluru',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    service: 'Neurosurgery Consultation',
    text: 'Dr. Arun diagnosed my chronic back pain as a herniated disc that two other doctors had missed. His expertise and the detailed MRI review changed my life. Six months post-treatment and I am completely pain-free. This clinic is truly a blessing.',
  },
  {
    name: 'Mohammed Farhan',
    location: 'Hassan',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    service: 'Root Canal Treatment',
    text: 'I was terrified of root canals, but Dr. Priya made the entire experience comfortable and painless. The clinic environment is so peaceful and professional. The staff treated me like family. I will never go anywhere else for dental care.',
  },
  {
    name: 'Lakshmi Narayanan',
    location: 'Mysuru',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    service: 'Smile Makeover',
    text: 'My smile transformation was handled with such artistry and care. The veneers look completely natural and my confidence has soared. I get compliments everywhere I go. Dr. Priya is not just a dentist — she is a true artist.',
  },
  {
    name: 'Suresh Gowda',
    location: 'Mandya',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    service: 'Spine Surgery Consultation',
    text: 'Dr. Arun provided the most thorough spinal consultation I have ever received. He explained my CT scan in simple terms and outlined a clear treatment roadmap. His care and patience gave me the confidence to proceed with treatment. Outstanding doctor.',
  },
  {
    name: 'Deepa Srinivasan',
    location: 'Mysuru',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80',
    service: 'Pediatric Dentistry',
    text: 'Bringing my 6-year-old here was the best decision. The staff made my daughter feel so at ease — she actually looks forward to her dental appointments now! The clinic is child-friendly and the team is incredibly gentle. Highly recommend for families.',
  },
];

const StarRating = ({ count }) => (
  <div className="star-row">
    {[1,2,3,4,5].map(s => (
      <FiStar key={s} size={14} fill={s <= count ? 'var(--gold)' : 'none'} color="var(--gold)" />
    ))}
  </div>
);

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="testimonials" className="testimonials section-padding bg-beige">
      <div className="container">
        <div className="section-center" data-aos="fade-up">
          <span className="section-tag"><GiMedicalDrip size={14} /> Testimonials</span>
          <h2 className="section-title">What Our Patients Say</h2>
          <div className="gold-divider center"></div>
          <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Real stories from real patients who trusted Dr Ahalya's Dento Neuro Clinic with their health — and never looked back.
          </p>
        </div>

        <div className="swiper-wrapper-outer" data-aos="fade-up" data-aos-delay="100">
          <button ref={prevRef} className="swiper-nav-btn prev" aria-label="Previous">
            <FiChevronLeft size={22} />
          </button>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640:  { slidesPerView: 1 },
              900:  { slidesPerView: 2 },
              1100: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={swiper => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            loop={true}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial-card">
                  <div className="testimonial-top">
                    <img src={t.avatar} alt={t.name} className="testimonial-avatar" loading="lazy" />
                    <div className="testimonial-meta">
                      <strong>{t.name}</strong>
                      <span className="t-location">{t.location}</span>
                      <StarRating count={t.rating} />
                    </div>
                  </div>
                  <div className="testimonial-service-tag">{t.service}</div>
                  <p className="testimonial-text">"{t.text}"</p>
                  <div className="testimonial-google">
                    <span>★ Google Review</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button ref={nextRef} className="swiper-nav-btn next" aria-label="Next">
            <FiChevronRight size={22} />
          </button>
        </div>

        <div className="custom-pagination"></div>
      </div>
    </section>
  );
};

export default Testimonials;
