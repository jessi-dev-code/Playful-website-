import { Button, Container, Typography } from "@mui/material";
import sunglasses from "../assets/Sunglasses.png";
import { motion } from "motion/react";
import wearwilf from "../assets/Wearing_WILF.webp";
import first from "../assets/IMG_2872.jpeg";
import second from "../assets/backpacks_boats-2_1.jpeg";
import assetcard from "../assets/Asset_1.png";
import third from "../assets/IMG_6548.jpeg";
import forth from "../assets/image1.jpeg";
import fifth from "../assets/Screenshot_2024-04-25_at_11.54.43_907dec76-de1f-4248-9765-93946547bc56.jpeg";
// import sixth from "../assets/Screenshot_2024-04-25_at_11.54.43_907dec76-de1f-4248-9765-93946547bc56.jpeg"
import seventh from "../assets/image1.jpeg";
import eigth from "../assets/borisbear.jpeg";
import nine from "../assets/IMG_1325.jpeg";
import ten from "../assets/Seen_on_extra_image.jpeg";
const images = [first, second, third, forth, fifth, seventh, eigth, nine, ten];
const duplicate_images = [...images, ...images];
import wave from "../assets/Diamond_3.png";
const Wearningwilf = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      className=" mt-[40%] pb-20 md:mt-[12%] collection relative mb-[60px] md:mb-[140px]"
    >
      <motion.img
        animate={{
          rotate: [0, -20, 20, 0],
        }}
        transition={{
          duration: 2,
          delay: 2,
          repeat: Infinity,
        }}
        src={wave}
        className="absolute -top-[6%] md:top-[88%] max-w-[150px] md:max-w-[260px] left-[4%] md:left-[40px]"
      />
      <motion.img
        animate={{}}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute -top-[6%]  left-[70%] md:left-[80%] max-w-[100px] md:max-w-[220px] !z-[200]"
        src={assetcard}
      />
      <Container className="text-center  flex items-center justify-center !pt-20">
        <img className="hastag" src={wearwilf} alt="" />
      </Container>
      <Container
        maxWidth={false}
        disableGutters
        className="flex mt-20 relative !z-0"
      >
        <motion.div
          className="flex"
          style={{ width: "max-width" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {duplicate_images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              className={`slide-image${
                idx % 2 === 1 ? " slide-image-neg" : ""
              }`}
              style={{
                width: "500px",
                minWidth: "20vw",
                height: "auto",
                maxWidth: "24vw",
                marginRight: 12,
                objectFit: "contain",
              }}
            />
          ))}
        </motion.div>
      </Container>
      <Container
        maxWidth="xl"
        disableGutters
        className="flex flex-col justify-center items-center gap-6 mt-20"
      >
        <Typography
          className="Heading !tracking-tighter !text-[50px] text-center wearing-heading"
          sx={{
            lineHeight: "0.4",
          }}
        >
          Enjoyed by them <br />
          Shared by <span className="span-heading  !text-[70px]">you</span>
        </Typography>
        <Button
          disableElevation
          disableRipple
          variant="contained"
          className="flex m-auto Buttontext"
          sx={{
            padding: "0 1rem",
            height: "43.75px",
            lineHeight: "0.8",
          }}
        >
          View the full gallery
        </Button>
      </Container>
    </Container>
  );
};

export default Wearningwilf;
