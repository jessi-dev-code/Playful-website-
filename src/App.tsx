import { Box } from "@mui/material";
import "./App.css"
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Newsletters from "./Components/Newsletters";
import game from "./assets/Game_icon_67511f51-aa78-49b1-9f0c-8c92435da9fc.png"
import { motion } from 'framer-motion';
import HeroSection from "./Components/HeroSection";
import ProductCollection from "./Components/Collection";
function App() {
  return (
    <>
    <Box className="w-[100px] absolute bottom-10 right-10 !overflow-hidden">
    <motion.img 
        animate={{ rotate: [0, 360] }}
        transition={{duration: 10, repeat: Infinity }} 
    className="fixed bottom-8 -right-10 z-1000"
    src={game}
    width={200}
    />
    </Box>
    <Newsletters />
    <Header />
    <Navbar />
    <HeroSection />
    <ProductCollection />
    </>
  );
}

export default App;
