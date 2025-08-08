import { Box, Container, List, ListItem, Typography } from "@mui/material";
import logo from "../assets/Orange_logo.png";
import { motion } from "motion/react";
import cherryleft from "../assets/Cherry_left.png"
import tulips from "../assets/Tulip_Duo (1).png"
import "../styles/App.css"
import "../styles/mediaquery.css"
const Footer = () => {
  return (
    <>
    <Container
      maxWidth={false}
      disableGutters
      className=" grid grid-cols-12  items-center justify-between gap-[60px] md:gap-[20px] py-[4%] md:py-0 px-[5%] md:px-[2%] md:h-[40vh] Footer mt-[4%] relative"
    >
      <img src={cherryleft} className="absolute bottom-[90%] md:bottom-[85%] w-[180px] lg:w-[240px]  left-[4%]" />
   <Box className="col-span-10 sm:col-span-12 md:col-span-6 grid grid-cols-12 sm:grid-cols-12 grid-flow-row-dense md:grid-cols-3 items-center justify-center gap-[20px]">
        <Box className="col-span-12 sm:col-span-6 md:col-span-1 flex flex-col gap-[16px] items-center justify-center text-center mx-auto heading-body !leading-none !text-[14px] !cursor-pointer ">
          <Typography className="px-2 span-heading !leading-none !text-[64px] footerlist !cursor-pointer">SHOP</Typography>
          <Typography className="px-2 link-font hover-color footerlist !cursor-pointer"
           sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}
            >Interior</Typography>
          <Typography className="px-2 link-font hover-color footerlist !cursor-pointer"
           sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>Play</Typography>
          <Typography className="px-2 link-font hover-color footerlist !cursor-pointer" sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>Wear</Typography>
          <Typography className="px-2 link-font hover-color footerlist !cursor-pointer" sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>Travel</Typography>
          <Typography className="px-2 link-font hover-color footerlist !cursor-pointer" sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>Gifts</Typography>
        </Box>
        <Box className="col-span-12 sm:col-span-6 md:col-span-1 flex flex-col gap-[16px] items-center justify-center text-center mx-auto heading-body !leading-none !text-[14px] !cursor-pointer ">
          <Typography className="px-2 span-heading !leading-none !text-[64px] footerlist !cursor-pointer">HELP</Typography>
                    <Typography className="px-2 link-font hover-color footerlist !cursor-pointer"
           sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}
            >Delivery</Typography>
          <Typography className="px-2 link-font hover-color footerlist !cursor-pointer"
           sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}
            >Returns</Typography>
          <Typography className="px-2 link-font hover-color footerlist !cursor-pointer"
           sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>Contact</Typography>
          <Typography className="px-2 link-font hover-color footerlist !cursor-pointer" sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>FAQ</Typography>
          <Typography className="px-2 link-font hover-color footerlist !cursor-pointer" sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>Privacy policy</Typography>
          <Typography className="px-2 link-font hover-color footerlist !cursor-pointer" sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>Terms of service</Typography>
        </Box>
        <Box className="col-span-12 sm:col-span-6 md:col-span-1 flex flex-col gap-[16px] items-center justify-center text-center mx-auto heading-body !leading-none !text-[14px] !cursor-pointer relative z-10 ">
          <Typography className="px-2 span-heading !leading-none !text-[64px] footerlist !cursor-pointer">CONNECT</Typography>
          <Typography className="px-2 link-font hover-color footerlist !cursor-pointer"
           sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}
            >About us</Typography>
          <Typography className="px-2 link-font hover-color footerlist !cursor-pointer"
           sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>blog</Typography>
          <Typography className="px-2 link-font hover-color footerlist !cursor-pointer" sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>Instagram</Typography>
          <Typography className="px-2 link-font hover-color footerlist !cursor-pointer" sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>Facebook</Typography>
        </Box>
        <Box className="col-span-12 sm:col-span-6 md:col-span-1 relative items-start justify-start"
        sx={{
          display:{xs:"flex",md:"none"}
        }}
        >
        <img
         src={tulips}
         className="relative mx-auto"
         width={240}
        />
      </Box>
      </Box>
    <Box className="col-span-12 sm:col-span-12  md:col-span-6">
      <Box 
      sx={{
        
        display:{xs:"none",md:"block"},
        width:{xs:"100px",md:"240px"}
      }}
      >
        <motion.img
        animate={{
          y:[0,-40,40,-40,0],
        }}
        transition={
          {
            duration:10,
            repeat:Infinity
          }
        }
         src={tulips}
         className="absolute top-[70%] left-[42%] mx-auto"
         width={240}
        />
      </Box>
        <motion.div
          initial={{
            rotate: [0],
            x: [0],
          }}
          whileHover={{
            x: [-80, -60, 0, 60, 80, -60, -80],
            rotate: [-6, -4, 0, 4, 6, -4, -6],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >

          <img src={logo}
          className="logoimage mx-auto"
          
          />
        </motion.div>
    </Box>
    </Container>


    <div className="NewsletterSection relative z-10">
              <Container sx={{
                  height:{xs:"60px",md:"45px"}
              }} className=" flex items-center justify-center">
                  <Typography className="!tracking-tighter" sx={{ mx: 2 }}>
        © 2025, Wilf & Friends   |   Branding & Website credit
                  </Typography>
              </Container>
    </div>
    </>
  );
};

export default Footer;
