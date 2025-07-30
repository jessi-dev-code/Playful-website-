import { Box } from "@mui/material";
import "./App.css"
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Newsletters from "./Components/Newsletters";
import game from "./assets/Game_icon_67511f51-aa78-49b1-9f0c-8c92435da9fc.png"
import {animate, motion } from 'framer-motion';
function App() {
  return (
    <>
    <Box className="w-[100px] absolute bottom-10 right-10">
    <motion.img 
        animate={{ rotate: [0, 360] }}
        transition={{duration: 10, repeat: Infinity }} 
    className="absolute bottom-4 right-4 cursor-pointer"
    src={game}
    width={100}
    />
    </Box>
    <Newsletters />
    <Header />
    <Navbar />
    <HeroSection />

    </>
  );
}

export default App;
