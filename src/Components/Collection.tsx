import { Container, Typography } from '@mui/material'
import React from 'react'
import sunglasses from "../assets/Sunglasses.png"
import {motion} from "motion/react"
import fifth from "../assets/Summer_styles.jpg"
import first from "../assets/Olivia_malmo_shoot-127_1.jpg"
import third from "../assets/LW19727_1111_5.png"
import second from "../assets/LW19956_9470_2.png"
import forth from "../assets/LW19266_2334_3.png"
const ProductCollection = () => {
  return (
    <Container maxWidth={false} disableGutters className='!h-[100vh] !mt-40 collection relative'>
        <motion.img
        animate={{
            y:[0,20,-20,20,0]
        }}
        transition={{
            duration:6,
            repeat:Infinity
        }}
        className='absolute -top-20 right-[300px]'
        width={250}
         src={sunglasses}
        />

        <Container className='text-center flex flex-col gap-[20px] !pt-20'>
            <Typography className='Heading'>Summer Style at Wilf & Friends</Typography>
            <Typography className="heading-body w-[60%] !m-auto" sx={{
                WebkitTextStrokeWidth:0.2
            }}>Celebrate the return of sunnier days with chic wear, accessories and outdoor fun! Our curated collection is chosen with an eye for quality, longevity, playfulness and joy, and has everything you need for this season and beyond.</Typography>
        </Container>
        <Container maxWidth={false} disableGutters className='flex mt-20 overflow-hidden relative'>
            <motion.div
                className='flex'
                style={{ width: 'max-content' }}
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: 'linear'
                }}
            >
                {[first, second, third, forth, fifth, first, second, third, forth, fifth].map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        className={`slide-image${idx % 2 === 1 ? ' slide-image-neg' : ''}`}
                        style={{ minWidth: 250, marginRight: 16 }}
                    />
                ))}
            </motion.div>
        </Container>
    </Container>
  )
}

export default ProductCollection