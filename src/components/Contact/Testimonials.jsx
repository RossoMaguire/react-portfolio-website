import React, { useContext } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import PortfolioContext from '../../context/context';

const Testimonials = () => {
  const { testimonials } = useContext(PortfolioContext);
  return (
    <Carousel showArrows showIndicators showThumbs={false}>
      {testimonials.map((testimonial) => {
        const { company, quote } = testimonial;
        return (
          <div className="testimonial-wrapper">
            <blockquote className="testimonial-wrapper__quote">{quote}</blockquote>
            <p className="testimonial-wrapper__company">{company}</p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default Testimonials;
