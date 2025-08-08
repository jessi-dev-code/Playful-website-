import { Box, Container, Typography } from "@mui/material"
import heroImg from "../assets/LW19904_2100_3.png"
import signatures from "../assets/Lauren_x.png"
import {motion} from "motion/react"
import "../styles/App.css"
import flower from "../assets/Group_2303_1_c4524871-3b2f-48dd-b829-8564ffe78de2 (2).png"
import halfmoon from "../assets/Half_Moon_8.png"
import wave from "../assets/Wave_4 (1).png"
import diamond from "../assets/Diamond_5.png"
import semicircle from "../assets/Semi_Circle_4.png"
const HeroSection = () => {
  return (
    <Container maxWidth={false} disableGutters className=" !md:h-[80vh] grid grid-cols-12 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12  relative z-0 "
    sx={{
      marginTop:{xs:"50px",md:"120px"}
    }}
    >
      <Container maxWidth={false} disableGutters className="col-span-12  md:col-span-5 lg:col-span-6 relative ">
        <img
          src={heroImg}
          width={"100%"}
          className="relative -z-0 h-[100%] !md:min-h-[80vh] object-cover"
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
        className="absolute -top-[8%] left-[100px] "
        />
        <img 
        src={semicircle}
         width={"20%"}
        className="absolute top-[95%] left-[16%] rotate-8"
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
        className="absolute left-[80%] md:left-[90%] bottom-4"
        />
      </Container>
      <Container maxWidth={false} disableGutters className="col-span-12  md:col-span-5 lg:col-span-6 flex flex-col  text-left !pt-[10px] !lg:pt-[30px] !pb-[10px] !lg:pb-[30px] relative">
        <img 
          src={wave}
          width={190}
          className="absolute -right-0 top-5 "
        />
        <Box className="flex flex-col max-w-[765px] relative !gap-[20px]"
        sx={{
          
          padding:{xs:"0 2rem",lg:"0 5rem"}, margin:"auto",
        
        marginTop:{xs:"10%",xl:"20%"}
        
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
            width={200}
            className="flex items-start absolute -md:bottom-20 !left-0 w-[150px] md:w-[200px]"
            />
            <motion.img
            initial={{
              x:0,
              rotate:[0]
            }}
       whileHover={{
            rotate:[0,-8,0,4,0,-8,0]
          }}
          transition={{
            duration:3,
   repeat: Infinity
          }}
             src={flower}
             className="absolute left-[30%] !md:left-[36%] top-[110%] md:top-[100%] w-[40%]"
            
            >

            </motion.img>
          </Box>
        </Box>
      </Container>
    </Container>
  )
}

export default HeroSection