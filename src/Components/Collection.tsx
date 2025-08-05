import { Button, Container, Typography } from '@mui/material'
import sunglasses from "../assets/Sunglasses.png"
import {motion} from "motion/react"
import fifth from "../assets/Summer_styles.jpg"
import first from "../assets/Olivia_malmo_shoot-127_1.jpg"
import third from "../assets/LW19727_1111_5.png"
import second from "../assets/LW19956_9470_2.png"
import forth from "../assets/LW19266_2334_3.png"
import wave from "../assets/Wave_8.png"
const ProductCollection = () => {
  return (
    <Container maxWidth={false} disableGutters className=' mt-[60%] pb-20 md:mt-[12%] collection relative mb-[60px] md:mb-[140px]'>
        <motion.img
        animate={{
            y:[0,25,-25,25,0]
        }}
        transition={{
            duration:4,
            repeat:Infinity
        }}
        className='absolute -top-[8%] -md:top-[27%]  md:right-[15%] max-w-[250px] min-w-[120px]'
         src={sunglasses}
        />
        <Container className='text-center flex flex-col gap-[16px] !pt-20'>
            <Typography className='Heading !tracking-tighter !text-[56.89px]'
        >Summer Style at Wilf & Friends</Typography>
            <Typography className="heading-body max-w-[100%] md:max-w-[60%] !m-auto !tracking-tight !font-medium"
            sx={{
                WebkitTextStrokeWidth:0.1
            }}>Celebrate the return of sunnier days with chic wear, accessories and outdoor fun! <br />Our curated collection is chosen with an eye for quality, longevity, playfulness and joy, and has everything you need for this season and beyond.</Typography>
        </Container>
        <Container maxWidth={false} disableGutters className='flex mt-20 relative'>
            <motion.div
                className='flex'
                style={{ width: 'mim-content' }}
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                    repeat: Infinity,
                    duration: 25,
                    ease: 'linear'
                }}
            >
                {[first, second, third, forth, fifth,second,first,  third, forth, fifth].map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        className={`slide-image${idx % 2 === 1 ? ' slide-image-neg' : ''}`}
                        style={{ minWidth: 300, marginRight: 16 }}
                    />
                ))}
            </motion.div>
        </Container>
        <Container maxWidth="xl" disableGutters className='flex justify-center items-center'>
        <Button disableElevation disableRipple variant='contained' className='!mt-[4%] flex m-auto Buttontext !tracking-tight' sx={{
            padding:"0 2.5rem",
            height:"53.75px",
        }}>Shop the collection now!</Button>
        </Container>
        <motion.img
        animate={{
            rotate:[0,-20,20,0]
            
        }}
        transition={{
            duration:2,
            delay:2,
            repeat:Infinity
        }}
         src={wave}
         className='absolute top-[94%] md:top-[88%] max-w-[120px] md:max-w-[260px] right-[12%]'
        />
    </Container>
  )
}

export default ProductCollection