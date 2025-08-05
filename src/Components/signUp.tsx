import { Box, Button, Container, InputBase, Typography } from '@mui/material'
import {motion} from "motion/react"
import semicircle from "../assets/Semi_Circle_8.png"
const SignUp = () => {
  return (
    <>
    <Container maxWidth={false} disableGutters className='signupbg !h-[60vh] relative items-center justify-center'>
                <motion.img 
                  animate={{
                    y:[0,10,-10,0]
                  }}
                  transition={{
                    duration:3,
           repeat: Infinity
                  }}
                src={semicircle}
                width={"25%"}
                className=" md:w-[160px] absolute left-[60%] md:left-[80%] -top-[10%] "
                />

                <Container maxWidth="lg" className='flex flex-col gap-1 text-center items-center justify-center h-full'>
                    <Typography className='Heading !text-[45px] !leading-none !tracking-tighter signup-heading'> Fancy some  <span className='span-heading !md:text-[80px]'>VIP</span> treatment & 10% off?</Typography>
                    <Typography className='heading-body !leading-snug !tracking-tight !text-[16px] max-w-[540px]' 
                    sx={{
                    WebkitTextStrokeWidth:.1
                    
                    }}>Join the W&F Community and be the first to hear about special offers, new collection launches and BTS sneak peaks! Oh, and get 10% off as a little thank you from us for joining the crew!</Typography>
     <Box
      sx={{
        border: '2px solid black',
        backgroundColor: '#FCE5D8',
        display: 'flex',
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.8rem',
        width: '80%',
        minWidth:300,
        maxWidth: 600,
        mx: 'auto',
        mt: 2,
        flexWrap: 'wrap',
      }}
    >
      <InputBase
        placeholder="EMAIL ADDRESS"
        sx={{
          fontWeight: 'bold',
          flex: 1,
          paddingLeft: '0.8rem',
          maxWidth: '200px',
        }}
        fullWidth
      />
    <Button
          disableElevation
          disableRipple
          variant="contained"
          className="flex Buttontext"
          sx={{
            padding: "0 1.2em",
            height: "45.75px",
            lineHeight: "0.8",
            border:"2px solid black",
            bgcolor:"#C7B65E !important",
            boxShadow:"var(#BD863E) !important"
          }}
        >
          SIGN UP
        </Button>
    </Box>
                </Container>
    </Container>
    </>
  )
}

export default SignUp