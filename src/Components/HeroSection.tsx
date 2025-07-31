import { Box, Container, Typography } from "@mui/material"
import heroImg from "../assets/LW19904_2100_3.png"
import signatures from "../assets/Lauren_x.png"
import {motion} from "motion/react"
import "../App.css"
import flower from "../assets/Group_2303_1_c4524871-3b2f-48dd-b829-8564ffe78de2 (2).png"
import halfmoon from "../assets/Half_Moon_8.png"
import wave from "../assets/Wave_4 (1).png"
import diamond from "../assets/Diamond_5.png"
import semicircle from "../assets/Semi_Circle_4.png"
const HeroSection = () => {
  return (
    <Container maxWidth={false} disableGutters className=" !h-[100vh] grid grid-cols-12 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 mt-[150px] relative z-0">
      <Container maxWidth={false} disableGutters className="col-span-12  md:col-span-5 lg:col-span-6 relative">
        <img
          src={heroImg}
          width={"120%"}
          className="relative -z-0 h-[100%] !md:min-h-[100vh]"
        />
        <motion.img 
          animate={{
            rotate:[-20,0,10,0,-20]
          }}
          transition={{
            duration:3,
   repeat: Infinity
          }}
        src={halfmoon}
        width={"20%"}
        className="absolute -top-[80px] left-[100px]"
        />
        <img 
        src={semicircle}
         width={"20%"}
        className="absolute -bottom-20 left-40 rotate-6"
        />
        <motion.img
                  animate={{
            rotate:[-20,0,10,0,-20]
          }}
          transition={{
            duration:3,
   repeat: Infinity
          }}
        src={diamond}
         width={"28%"}
        className="absolute -right-[200px] bottom-4"
        />
      </Container>
      <Container maxWidth={false} disableGutters className="col-span-12  md:col-span-5 lg:col-span-6 flex flex-col  text-left !pt-[10px] !md:pt-[30px] !pb-[10px] !md:pb-[30px] relative">
        <img 
          src={wave}
          width={200}
          className="absolute -right-0 top-5 "
        />
        <Box className="flex flex-col md:max-w-[400px] lg:max-w-[700px] relative !gap-[40px]"
        sx={{
          
          padding:{xs:"0 0.24rem",md:"0 5rem"}, margin:"auto",
        
        marginTop:{xs:"40px",md:"60px"}
        
        }}>
          <Typography className="Heading">We are Wilf & Friends. <br />
            A big <span className="span-heading">
              WELCOME</span> to the club!</Typography>
          <Box className="relative">
            <Typography className="heading-body">In a world full of choice yet short on time, Wilf & Friends is your one-stop children's lifestyle shop for high quality, design-led clothing, decor and toys</Typography>
            <Typography className="heading-body">We've got the best products, not all the products, which are thoughtfully curated by me - a mum, teacher and interior designer. Our joyful collection of treasures is here to complement family life and delight grown-ups and little ones with stylish home accessories, imaginative play, memorable gifts and well-deserved treats. You'll even find our website is designed for one-handed use … because what busy parent can spare two?!</Typography>
            <Typography className=" heading-body">From our family to yours,</Typography>
            <motion.img 
                initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            src={signatures}
            width={150}
            className="flex items-start absolute -bottom-20 !left-0"
            />
            <motion.img
            initial={{
              x:0
            }}
       whileHover={{
            rotate:[0,-8,0,4,0,-8,0]
          }}
          transition={{
            duration:3,
   repeat: Infinity
          }}
             src={flower}
             width={"55%"}
             className="absolute !left-[40%] top-[120%]"
            >

            </motion.img>
          </Box>
        </Box>
      </Container>
    </Container>
  )
}

export default HeroSection