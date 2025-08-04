import { Box, Container, List, ListItem, Typography } from "@mui/material";
import logo from "../assets/Orange_logo.png";
import { motion } from "motion/react";
const Footer = () => {
  return (
    <Container
      maxWidth="xl"
      disableGutters
      className=" grid grid-cols-10 items-center justify-between gap-[10px] px-[5%] md:px-[6%] h-[70vh] Footer mt-[4%]"
    >
    <Box className="col-span-5 grid grid-cols-6">
        <Box className="col-span-2 items-center flex flex-col">
          <List className="heading-body !leading-none !text-[14px] flex flex-col justify-center items-center !text-center footerlist !cursor-pointer">
            <ListItem className="span-heading !leading-none !text-[64px] footerlist !cursor-pointer">
              Shop
            </ListItem>
            <ListItem className="link-font hover-color footerlist !cursor-pointer" sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>Interior</ListItem>
            <ListItem className="link-font hover-color footerlist !cursor-pointer" sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>Play</ListItem>
            <ListItem className="link-font hover-color footerlist !cursor-pointer" sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>Wear</ListItem>
            <ListItem className="link-font hover-color footerlist !cursor-pointer" sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>Travel</ListItem>
            <ListItem className="link-font hover-color footerlist !cursor-pointer" sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>Gifts</ListItem>
          </List>
        </Box>
        <Box className="col-span-2 items-center flex flex-col">
          <List className="heading-body !leading-none !text-[14px] flex flex-col justify-center items-center !text-center footerlist !cursor-pointer">
            <ListItem className="span-heading !leading-none !text-[64px] footerlist !cursor-pointer">
              Help
            </ListItem>
            <ListItem  className="link-font hover-color footerlist !cursor-pointer" sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>Delivery</ListItem>
            <ListItem  className="link-font hover-color footerlist !cursor-pointer" sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>Returns</ListItem>
            <ListItem  className="link-font hover-color footerlist !cursor-pointer" sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>Contact</ListItem>
            <ListItem  className="link-font hover-color footerlist !cursor-pointer" sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>FAQ</ListItem>
            <ListItem  className="link-font hover-color footerlist !cursor-pointer" sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>Privacy policy</ListItem>
            <ListItem  className="link-font hover-color footerlist !cursor-pointer" sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>Terms of service</ListItem>
          </List>
        </Box>
        <Box className="col-span-2 items-center flex flex-col">
          <List className="heading-body !leading-none !text-[14px] flex flex-col justify-center items-center !text-center footerlist !cursor-pointer">
            <ListItem className="span-heading !leading-none !text-[64px] footerlist !cursor-pointer">
              Connect
            </ListItem>
            <ListItem className="link-font hover-color footerlist !cursor-pointer" sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>About us</ListItem>
            <ListItem className="link-font hover-color footerlist !cursor-pointer" sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>Blog</ListItem>
            <ListItem className="link-font hover-color footerlist !cursor-pointer" sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>Instagram</ListItem>
            <ListItem className="link-font hover-color footerlist !cursor-pointer" sx={{textTransform:"capitalize",
                fontSize:"16px"
            }}>Facebook</ListItem>
          </List>
        </Box>
    </Box>

      <Box className="col-span-5">
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
          {" "}
          <img src={logo} />
        </motion.div>
      </Box>
    </Container>
  );
};

export default Footer;
