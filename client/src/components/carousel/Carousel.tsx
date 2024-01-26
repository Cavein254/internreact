import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box>
      <Slider {...settings}>
        <Box>
          <img src="https://images.unsplash.com/photo-1624555130882-dcfa8ecb17ce?q=80&w=450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </Box>
        <Box>
          <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </Box>
        <Box>
          <img src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </Box>
      </Slider>
    </Box>
  );
};

export default Carousel;
