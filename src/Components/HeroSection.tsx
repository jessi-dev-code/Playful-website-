import { Box, Container, Typography } from "@mui/material"
import heroImg from "../assets/LW19904_2100_3.png"
import signatures from "../assets/Lauren_x.png"
import "../App.css"
const HeroSection = () => {
  return (
    <Container maxWidth={false} disableGutters className=" !h-[80vh] grid grid-cols-12">
      <Container maxWidth={false} disableGutters className="col-span-6">
        <img
          src={heroImg}
          width={"100%"}
          height={"100%"}
        />
      </Container>
      <Container maxWidth={false} disableGutters className="col-span-6 flex flex-col items-center !px-[56.6px]">
        <Box className="flex flex-col !w-[65%] items-center justify-center !h-[100vh]">
          <Typography className="Heading">We are Wilf & Friends. <br />
            A big <span className="span-heading">
              WELCOME</span> to the club!</Typography>
          <Box>
            <Typography className="heading-body">In a world full of choice yet short on time, Wilf & Friends is your one-stop children's lifestyle shop for high quality, design-led clothing, decor and toys</Typography>
            <Typography className="heading-body">We've got the best products, not all the products, which are thoughtfully curated by me - a mum, teacher and interior designer. Our joyful collection of treasures is here to complement family life and delight grown-ups and little ones with stylish home accessories, imaginative play, memorable gifts and well-deserved treats. You'll even find our website is designed for one-handed use … because what busy parent can spare two?!</Typography>
            <Typography className=" heading-body">From our family to yours,</Typography>
          </Box>
        </Box>
      </Container>
    </Container>
  )
}

export default HeroSection