import { useState } from 'react';
import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import fifth from "../assets/Summer_styles.jpg"
import first from "../assets/Olivia_malmo_shoot-127_1.jpg"
import third from "../assets/LW19727_1111_5.png"
import second from "../assets/LW19956_9470_2.png"
import forth from "../assets/LW19266_2334_3.png"
import wilflove from "../assets/Wilf_Loves.png"
import cherryleft from "../assets/Cherry_left.png"
import {motion} from "motion/react"
const dslides = [first, fifth, third, second, forth];
const slides = [...dslides,...dslides]

const productdata = [
    {
        heading:"Silicon Suction Plate",
        price:"$15.00",

    }
]
function Slideshow() {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 5;

    const paginate = (direction: number) => {
        setStartIndex((prev) => {
            let next = prev + direction;
            if (next < 0) return slides.length-1;
            if (next > slides.length-1) return 0;
            return next;
        });
    };

    const visibleSlides = slides.slice(startIndex, startIndex + visibleCount);

    return (
        <>


        <Container maxWidth={false} disableGutters className='mt-[60%] sm:mt-[24%] pb-20 lg:mt-[12%] collection collection-2 relative'>
                    <motion.img 
          animate={{
            rotate:[-20,0,10,0,-20]
          }}
          transition={{
            duration:3,
   repeat: Infinity
          }}
        src={wilflove}
        width={"14%"}
        className="absolute -top-[8%] left-[74%] "
        />
        <Container maxWidth="xl" className='text-center flex flex-col gap-[16px] !pt-10'>
            <Typography className='Heading !tracking-tighter !text-[56.89px]'
        >New & <span className='span-heading'>Trending</span></Typography>
            <Typography className="heading-body max-w-[100%] md:max-w-[60%] !m-auto !tracking-tight !font-medium"
            sx={{
                WebkitTextStrokeWidth:0.1
            }}>The Mushie Collection is new and flying! Shop spoons, cups, bibs and pacifier clips in soft, muted tones, made with non-toxic, food-grade silicone. They're sure to add a little calm, quality and beauty to your home.</Typography>
            </Container>
        <Box 
        className="!pt-20"
        sx={{ position: 'relative',
         height:"100%",
         display: 'flex',
          alignItems: 'center' }}
          
          >
            <IconButton
                onClick={() => paginate(-1)}
                sx={{ position: 'absolute', left:"20px", zIndex: 1 }}
                className='!bg-pink-200'
            >
                <ArrowBackIosIcon />
            </IconButton>
            <Box sx={{ display: 'flex', height: '100%' }} className="!gap-4 ">
                {visibleSlides.map((src, idx) => (
            <Box className="flex flex-col gap-2 items-center">
                    <Box className="big-bgshadow" sx={{transition:"all 0.4s ease"}}>
                        <img
                            key={idx}
                            src={src}
                            style={{height: '460px',minWidth:'420px', objectFit: 'cover'
                                ,
                                
                            }}
                            alt={`slide-${idx}`}
                        />
                    </Box>
        <Box className="flex flex-col items-center gap-0 w-full">
            {productdata.map((item)=>(
                            <>
                                <Typography className='Heading text-center  !text-[32px] !leading-none'>{item.heading}</Typography>
                                <Typography className='heading-body !font-bold text-center'>{item.price}</Typography>
                            </>
            ))}
        <Button
          disableElevation
          disableRipple
          variant="contained"
          className="flex Buttontext cartbutton"
          sx={{
            width:"80%",
            height: "40.75px",
            lineHeight: "0.8",
          }}
        >
          CHOOSE OPTION
        </Button>
    </Box>
            </Box>
                        
                ))}
            </Box>
            <IconButton
                onClick={() => paginate(1)}
                sx={{ position: 'absolute', right: "19px", zIndex: 1 }}
                className='!bg-pink-200'
            >
                <ArrowForwardIosIcon  />
            </IconButton>
        </Box>
              <img src={cherryleft} className="absolute bottom-[90%] md:bottom-[75%] w-[180px] lg:w-[240px]  left-[76%] top-[90%] rotate-[32deg]" />
        </Container>
        </>
    );
}

export default Slideshow;
