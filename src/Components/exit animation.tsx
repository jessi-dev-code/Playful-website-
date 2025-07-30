import { useState } from "react";
import { AnimatePresence, motion } from "motion/react"
import heart from "../assets/heart-icon.png"
import { Box, Typography } from "@mui/material";
export default function ExitAnimation(){
    const [isvisible,setIsVisible] = useState(true)
    return(
        <div style={container}>
<AnimatePresence initial={false}>
    {isvisible ? (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            style={box}
            key="box"
        >
            <Typography className="Wishlist flex justify-center items-center w-[140px] h-[40px]" > <a href="#">Wish List</a></Typography>
        </motion.div>
    ) : null}
</AnimatePresence>
<motion.div
    onClick={() => setIsVisible(!isvisible)}
    whileTap={{ y: 1 }}
>
    <img src={heart} />
</motion.div>
        </div>
    )
}

const container: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: 100,
    height: 160,
    position: "relative",
}
 
const box: React.CSSProperties = {
    width: 100,
    height: 100,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
}
 