import React from "react";

import { Carousel, Image } from "react-bootstrap";

const ProjectImage = ({ images }) => {
  const Images = images.map((image, i) => (
    <Carousel.Item interval={3000} key={i}>
      <Image src={image} fluid />
    </Carousel.Item>
  ));
  return (
    <Carousel nextIcon="" nextLabel="" prevIcon="" prevLabel="" fade>
      {Images}
    </Carousel>
  );
};

export default ProjectImage;
