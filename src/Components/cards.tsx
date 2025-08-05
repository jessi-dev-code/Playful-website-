import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import quality from "../assets/quality (1).png";
import play from "../assets/play.png";
import education from "../assets/education.png";
import practicality from "../assets/practicality.png";
import asthethics from "../assets/aesthetics.png";
import community from "../assets/community.png";
import {motion} from "motion/react";

const content = [
    {
        title: "Quality",
        disc: "Safety, durability and longevity are non-negotiables for us, which is why we thoughtfully hand-pick every piece.",
        imgsrc: quality,
        className: "card-pink card-display",
    },
    {
        title: "Play",
        disc: "We capture imagination, spark joy and celebrate creativity in childhood, and believe shopping should be just as fun.",
        imgsrc: play,
        className: " card-display-reverse card-orange",
    },
    {
        title: "Education",
        disc: "We believe in learning through play to support intellectual and emotional development, and to help children make sense of their world.",
        imgsrc: education,
        className: "card-display card-yellow",
    },
    {
        title: "Practicality",
        disc: "We believe style and substance can coexist, and you'll find both in all of our design-led  products that make family life easier and more enjoyable.",
        imgsrc: practicality,
        className: "card-display-reverse card-lightgreen",
    },
    {
        title: "Aesthetics",
        disc: "Having a baby doesn't have to change your home and style. Our beautifully-made pieces are a testament to that.",
        imgsrc: asthethics,
        className: "card-display card-brown",
    },
    {
        title: "Community",
        disc: "We're here to bring like-minded people together, to share tips, ideas and conversation and support each other along this journey.",
        imgsrc: community,
        className: "card-display-reverse card-green",
    },
];

const Cards = () => {
    return (
        <Container disableGutters maxWidth={false} className="flex flex-col gap-[10px] md:gap-[30px] !px-[20px] md:p-[10px]">
            <Box className="text-center mt-[200px]">
                <Typography className="Heading !text-[30px] !tracking-tight"
                sx={{
                    WebkitTextStrokeWidth:"0.02rem"
                }}>
                    What we are all <span className="span-heading">about</span> <br />
                    at Wilf & Friends
                </Typography>
            </Box>
            <Container disableGutters maxWidth={false} className="grid md:grid-cols-12 gap-[16px] md:gap-[10px] !mt-[20px]"
            sx={{
                padding:{xs:"0 1rem",md:"0 5rem"},
                maxWidth:"120rem"
            }}>
                {content.map((item,index) => (
                    
                    <motion.div
                    initial={{
                        rotate:-5,
                        y:-5
                    }}
                    whileHover={{
                        rotate:0,
                        y:0,
                        scale:1.05
                    }}

                    transition={{
                        duration:0.25
                    }}
                    className='col-span-4'
                    >
                    <Card
                        key={item.title}
                        elevation={0}
                        className={` flex flex-col items-center !md:col-span-4 !rounded-none ${item.className}`}
                    >
                        <CardContent className="flex flex-col">
                            <Typography className="card-heading">{item.title}</Typography>
                            <Typography className="card-para !tracking-tighter">{item.disc}</Typography>
                        </CardContent>
                        <img width={60} height={60} src={item.imgsrc} />
                    </Card>
                    </motion.div>
                ))}
            </Container>
        </Container>
    );
};

export default Cards;
