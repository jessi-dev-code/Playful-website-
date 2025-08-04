import { motion } from 'framer-motion';
import { Box, Typography, Container, Button, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
// import fifth from "../assets/Summer_styles.jpg"/
import first from "../assets/Olivia_malmo_shoot-127_1.jpg"
import third from "../assets/LW19727_1111_5.png"
import second from "../assets/LW19956_9470_2.png"
import forth from "../assets/LW19266_2334_3.png"
import { useState } from 'react';
// import wave from "../assets/Wave_8.png"
const products = [
  {
    name: 'Star Nesting Cups (Original)',
    price: '£13.50',
    image: first,
  },
  {
    name: 'Flower Press Toy',
    price: '£14.00',
    image: second,
  },
  {
    name: 'Dinosaur Mushie Silicone Bib',
    price: '£13.00',
    image: third
  },
  {
    name: 'Rainbow Stacking Toy',
    price: '£15.00',
    image:forth,
  },
];

// export default function TrendingProducts() {
//   return (
//     <Box className="TrendingProducts py-12 !h-[100vh] mt-[150px]">
//         <Box className="pt-[2%] flex flex-col ">
//         <Typography
//           className="text-center Heading !tracking-tighter"
//         >
//           New &<span className="italic span-heading"> Trending</span>
//         </Typography>
//         <Container maxWidth="lg">
//         <Typography className="text-center mb-10 heading-body !text-[15.23px] "
//         sx={{
//             WebkitTextStrokeWidth:0.2
//         }}>
//           The Mushie Collection is new and flying! Shop spoons, cups, bibs and pacifier clips in soft, muted tones, made with
//           non-toxic, food-grade silicone. They're sure to add a little calm, quality and beauty to your home.
//         </Typography>
        
//         </Container>
//         </Box>
//         <Container maxWidth={false} disableGutters>
//             <Box>
//             <img />
//             <Box>
//                 <Typography>Star Nesting Cups (Original)</Typography>
//                 <Typography>$13.50</Typography>
//                         <Button disableElevation disableRipple variant='contained' className='!mt-[4%] flex m-auto Buttontext !tracking-tight CTA-btn' sx={{
//             padding:"0 2.5rem",
//             height:"53.75px",
//         }}>ADD TO CART</Button>
//             </Box>
//             </Box>
//         </Container>
//     </Box>
//   );
// }
export default function TrendingProducts() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index + 4 < products.length) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const visibleProducts = products.slice(index, index + 4);

  return (
    <Box className="bg-pink-200 py-12 relative">
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          className="text-center font-serif mb-4"
        >
          New <span className="italic">& Trending</span>
        </Typography>
        <Typography className="text-center text-gray-800 mb-10">
          The Mushie Collection is new and flying! Shop spoons, cups, bibs and pacifier clips in soft, muted tones, made with
          non-toxic, food-grade silicone. They’re sure to add a little calm, quality and beauty to your home.
        </Typography>

        <Box className="relative overflow-hidden">
          <Box className="flex gap-6 overflow-x-auto scrollbar-hide">
            {visibleProducts.map((product, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="min-w-[250px] bg-white rounded-2xl shadow-xl p-4 text-center"
              >
                <Box className="w-full h-[200px] rounded-xl overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </Box>
                <Typography className="font-semibold text-lg">
                  {product.name}
                </Typography>
                <Typography className="text-sm text-gray-700">
                  {product.price}
                </Typography>
                <Button
                  disableElevation
                  variant="contained"
                  className="!mt-4 !bg-blue-600 hover:!bg-blue-700 !text-white !tracking-tight"
                  sx={{ padding: '0.75rem 2rem' }}
                >
                  ADD TO CART
                </Button>
              </motion.div>
            ))}
          </Box>
          <IconButton
            className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 bg-white shadow-md"
            onClick={handlePrev}
          >
            <ArrowBackIos />
          </IconButton>
          <IconButton
            className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2 bg-white shadow-md"
            onClick={handleNext}
          >
            <ArrowForwardIos />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

