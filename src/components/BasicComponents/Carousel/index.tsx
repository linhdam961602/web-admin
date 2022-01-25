import React from 'react';
import AntdCarousel, { CarouselProps } from 'antd/es/carousel';
import 'antd/es/carousel/style/css';

const Carousel: React.FC<CarouselProps> = ({ children, ...props }) => (
  <AntdCarousel {...props}>{children}</AntdCarousel>
);

export default Carousel;
