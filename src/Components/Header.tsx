import { Box, Container, ImageList, ImageListItem, Input, TextField, Typography } from "@mui/material"
import "../App.css"
import logo from "../assets/Wilf_and_Friends_logo.png"
import heart from "../assets/heart-icon.png"
import cartbg from "../assets/cart bg.svg"
import intagram from "../assets/Instagram svg.svg"
import facebook from "../assets/facebooksvg.svg"

const Header = () => {
  return (
    <>
    <Container  maxWidth={false} disableGutters className="px-[24px] py-[16px] flex justify-between">
      <Box className="flex gap-[8px]">

          <img
            src={facebook}
            alt={"logo"}
            loading="lazy"
          />
          <img
            src={intagram}
            alt={"logo"}
            loading="lazy"
          />
        <Box>
          <TextField variant="outlined"></TextField>
        </Box>
      </Box>
      <Box className="flex gap-[8px]">
      
          <img
            src={logo}
            alt={"logo"}
            loading="lazy"
          />
        
      </Box>
      <Box className="flex gap-[8px]">
        <Typography>Your Account</Typography>
                  <img
            src={heart}
            alt={"logo"}
            loading="lazy"
            width={50}
          />
          <div>
          <img 
           src={cartbg}
           className="relative"
          />
          </div>
      </Box>
    </Container>
    </>
  )
}

export default Header