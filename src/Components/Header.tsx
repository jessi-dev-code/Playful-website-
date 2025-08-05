import { Box, Container, InputAdornment, InputBase, TextField, Typography } from "@mui/material"
import "../App.css"
import logo from "../assets/Wilf_and_Friends_logo.png"
import heart from "../assets/heart-icon.png"
import cartbg from "../assets/cart bg.svg"
import intagram from "../assets/Instagram svg.svg"
import facebook from "../assets/facebooksvg.svg"
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Search } from "@mui/icons-material"
import { useState } from "react"

const Header = () => {
  const [isvisible,setIsVisible] = useState(true)
    return (
      <>
    <Container  maxWidth={false}   disableGutters className="sticky top-0">
      <Container disableGutters maxWidth={false} className="Header flex items-center justify-between">
      <Box className="flex items-center" 
      sx={{
        marginLeft:{xs:"10px",md:"40px",lg:"60px"}
      }}>
        <Menu fontSize="small" style={{ width:"1.4rem",height:"2rem",}} className="Menulink"/>
          <img
            src={facebook}
            alt={"logo"}
            loading="lazy"
            width="45px" 
            className=" p-[5px] hover-color left-header"    
          />
          <img
              src={intagram}
              className=" rotatesvg p-[5px] hover-color left-header"
                 alt={"logo"}
                 width="45px" 
             />
        <Box className=" left-header">
          <TextField variant="outlined" 
           className="input-box link-font"
           placeholder="Search..."
          slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          },

        }}
          sx={{
            "& fieldset": { border: 'none' },
            width:"205px",
            height:"50px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            marginLeft:{xs:"5px",md:"10px",lg:"20px"}
            ,
          }}>
    

          </TextField>
        </Box>
      </Box>
      <Box className="flex gap-[8px] items-center">
<motion.div
initial={{
  rotate:[0],
  x:[0]
}}
  whileHover={{
    x: [-80,-60,0,60, 80,-60,-80],       
    rotate: [-6,-4,0, 4,6,-4,-6],   
  }}
  transition={{
    duration: 1.6,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut"
  }}
>
  <img
    src={logo}
    alt="logo"
    loading="lazy"
    width="200px"
  />
</motion.div>
      </Box>
      <Box className="flex gap-[24px] items-center justify-end " 
      sx={{
        marginRight:{xs:"10px",md:"40px",lg:"60px"}
      }}>
        <Typography className="link-font hover-color left-header">Your Account</Typography>

        <div className="flex flex-col relative">



<AnimatePresence initial={true}>
<motion.div
    onClick={() => setIsVisible(!isvisible)}
    whileTap={{ y: -10 }}
>
          <img
            src={heart}
            alt={"logo"}
            loading="lazy"
            width={40}
          />
</motion.div>
    {!isvisible ? (
          <motion.a 
          initial={{ opacity: 0, scale: 0 ,visibility:0 }}
            animate={{ opacity: 1, scale: 1 ,visibility:1}}
            exit={{ opacity: 0, scale: 0 }}
            key="box"
            className="absolute top-[40px] -left-[50px] -z-[10] Wishlist flex justify-center items-center w-[140px] h-[40px]"
          href="#">Wish List</motion.a>
    ) : null}

</AnimatePresence>


        </div>
          <div className="relative w-max">
            <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] link-font">1</p>
        <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{duration: 30, repeat: Infinity }}
                >
          <img 
           src={cartbg}
           className="relative"
          />
          </motion.div>
          </div>
      </Box>
      </Container>
    </Container>
    </>
  )
}

export default Header

