import { Container, Typography } from "@mui/material"
import "../App.css"
import "../mediaquery.css"
import { useState, useEffect } from "react";
const Newsletters = () => {
  const slides = [
    "Sign up to our newsletter for VIP treatment & 10% off",
    "Free delivery on orders over £35"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    },3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="NewsletterSection">
        <Container sx={{
            height:{xs:"60px",md:"45px"}
        }} className=" flex items-center justify-center">
            <Typography className="NewsletterSlideshow" sx={{ mx: 2 }}>
              {slides[currentSlide]}
            </Typography>
        </Container>
    </div>
  )
}

export default Newsletters