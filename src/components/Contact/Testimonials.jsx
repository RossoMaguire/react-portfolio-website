import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { testimonialData } from '../../content/data';

const Testimonials = () => {
  return (
    <Carousel showArrows showIndicators showThumbs={false}>
      {testimonialData.map((testimonial) => {
        const { company, quote } = testimonial;
        return (
          <div className="testimonial-wrapper" key={`testimonial-${company}`}>
            <blockquote className="testimonial-wrapper__quote">{quote}</blockquote>
            <p className="testimonial-wrapper__company">{company}</p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Testimonials;
