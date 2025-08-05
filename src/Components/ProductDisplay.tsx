import {  Box, Button, Container, Typography } from '@mui/material'
import flower from "../assets/Flower.png"
import first from "../assets/Interior_Collection_image.jpg"
import sixth from "../assets/The_W_F_collection_Collection_image.jpg"
import fifth from "../assets/The_Play_Collection_image.jpg"
import fourth from "../assets/Gifts_Collection_image.jpg"
import third from "../assets/Travel_Collection_image.jpg"
import second from "../assets/Wear_Collection_image.jpg"
import quality from "../assets/quality (1).png"
const imagedata = [

    {
        imgsrc:first,
        button:"Interior"
    },
    {
        imgsrc:second,
        button:"wear"
    },
    {
        imgsrc:third,
        button:"Travel"
    },{
        imgsrc:fourth,
        button:"gifts"
    },{
        imgsrc:fifth,
        button:"play"
    },{
        imgsrc:sixth,
        button:"The W&F Collection"
    }
]
const ProductDisplay = () => {
  return (
    <>
    <Container maxWidth={false} disableGutters className='ProductDisplay flex flex-col gap-[40px] md:gap-[80px] relative'>
        <Container className='flex flex-col items-center gap-4 relative !z-10'>
            <img
            src={flower}
            className='absolute w-[80px] md:w-[130px] -top-[30%] md:-top-[60%]  left-[2%] md:left-[21%] !-z-10'
            />
            <Typography className='Heading !tracking-tighter productdisplay-heading'>The Wilf & Friends Shop</Typography>
            <Typography className="heading-body max-w-[100%] md:max-w-[58%] !m-auto !tracking-tight !font-medium text-center productdisplay-para"
            sx={{
                WebkitTextStrokeWidth:0.1
            }}>We've got the best products, not all the products, which are thoughtfully curated by me - a mum, teacher and interior designer. Our joyful collection of treasures is here to complement family life and delight grown ups and little ones with stylish home accessories, imaginative play, memorable gifts and well-deserved treats. Shop our collections below.</Typography>
        </Container>
        <Container  maxWidth={false} disableGutters className='grid grid-cols-8 md:grid-cols-9 gap-[20px] px-[20px] lg:px-[120px]'>
            {[imagedata.map((item) =>(
            <Box className=" col-span-4 md:col-span-3 relative">
            <Box className=" Buttontext big-bgshadow" sx={{

            }}>
                <img
                src={item.imgsrc}
                className='h-[260px] sm:h-[400px] lg:h-full object-cover'
                />
            </Box>
            <Button disableElevation disableRipple variant='contained' className=' flex m-auto Buttontext !absolute top-[73%] md:top-[84%] lg:top-[82%] left-[50%] -translate-x-[50%] smallbuttontext' sx={{
            padding:{xs:"0 1.8rem",md:"0 2.5rem"},
            height:{xs:"50px",md:"53.75px"},
        }}>{item.button}
        </Button>
            </Box>
            ))]}
        </Container>
        <img
        className='w-[120px] md:w-[200px] absolute top-[102%] left-[5%]'
         src={quality}
        />

    </Container>
    </>
  )
}

export default ProductDisplay