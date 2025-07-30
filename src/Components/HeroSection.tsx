import { Box, Container, Typography } from "@mui/material"
import heroImg from "../assets/LW19904_2100_3.png"
import signatures from "../assets/Lauren_x.png"
const HeroSection = () => {
  return (
    <Container maxWidth={false} disableGutters className="flex gap-[150px] h-[100vh] items-center">
      <Box className="flex-1 hero-img">
        <img 
        src={heroImg}
        />
      </Box>
      <Box className="flex-1 justify-center ">
        <Typography className="Heading">We are Wilf & Friends. <br />A big <span className="span-heading">welcome</span>to the club!</Typography>
        <Box className="flex flex-col gap-4">
        <Typography className="heading-body">In a world full of choice yet short on time, Wilf & Friends is your one-stop children’s lifestyle shop for high quality, design-led clothing, decor and toys. 
</Typography>
        <Typography className="heading-body">
We’ve got the best products, not all the products, which are thoughtfully curated by me - a mum, teacher and interior designer. Our joyful collection of treasures is here to complement family life and delight grown-ups and little ones with stylish home accessories, imaginative play, memorable gifts and well-deserved treats. You’ll even find our website is designed for one-handed use … because what busy parent can spare two?!</Typography>
        <Typography className="heading-body">

From our family to yours,</Typography>
        </Box>
      <Box>
        <img  src={signatures}
        width={150}
        className="mt-10"/>
      </Box>
      </Box>


    </Container>
  )
}

export default HeroSection