import { ChevronLeft } from "@mui/icons-material"
import { Box, Container, Link, Typography, } from "@mui/material"
import { AnimatePresence } from "framer-motion"
import { motion } from "motion/react"
import { useState } from "react"
import semicricle from "../assets/Vector_3.png"
import filledflower from "../assets/Flower_1.png"
import flowers from "../assets/Group_2303_1_c4524871-3b2f-48dd-b829-8564ffe78de2 (2).png"
import diamond from "../assets/Diamond_4 (1).png"
import sunglasses from "../assets/Sunglasses (1).png"
import education from "../assets/education.png"
import tulip from "../assets/Tulip_2.png"
import smallheart from "../assets/smallheart.png"
const Navbar = () => {
  const [isvisible, setIsVisible] = useState(true)
  const [isvisible1, setIsVisible1] = useState(true)
  const [isvisible2, setIsVisible2] = useState(true)
  const [isvisible3, setIsVisible3] = useState(true)
  const [isvisible4, setIsVisible4] = useState(true)
  const [isvisible5, setIsVisible5] = useState(true)
  const [isvisible6, setIsVisible6] = useState(true)
  const [isvisible7, setIsVisible7] = useState(true)
  const [isvisible8, setIsVisible8] = useState(true)
  return (
    <Container maxWidth={false} disableGutters className="flex  items-center justify-center pt-5 pb-5 navbar"
    sx={{gap:{xs:"10px",md:"20px",lg:"50px"}}}
    >

    <div className="flex flex-col relative">
    <AnimatePresence initial={false}>
          <motion.div
            onClick={() => setIsVisible(!isvisible)}
          >
      <Link
        component="button"
        variant="body1"
        className="link-font link-nav-font"
      >
       
        Collections <ChevronLeft className="link-font" style={{ rotate: "270deg" }} />
      </Link>
          </motion.div>
          {!isvisible ? (
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              key="box"
              className="absolute top-[60px] nav-sublinks-container !z-50"
            >
              <Box className="flex flex-col relative justify-between">
                <Link className="Navsublinks">SHOP ALL</Link>
                <Link className="Navsublinks">Fairies & Florals</Link>
                <Link className="Navsublinks">Dinasaurs & Aniamls</Link>
                <Link className="Navsublinks">Mad About Vechicles</Link>
                <Link className="Navsublinks">Mini Astonaout</Link>
                <Link className="Navsublinks">Party bag or pocket money treat</Link>
                <Link className="Navsublinks flex items-center gap-4">The W&F Collection 
                <motion.img 
                  whileHover={{
                  rotate:[0,20,0]
                }}
                className="w-[20px] h-[20px]" src={smallheart} />
                </Link>
                <Link className="Navsublinks">Sale</Link>
                <motion.img 
                initial={{rotate:[0]}}
                whileHover={{
                      x:[0,-30,0],
                      rotate:[-8,0,8]
                }}
                transition={{
                      duration:1,
                      delay:0.1
                    }}
                className="absolute bottom-0 !right-0 w-[130px] h-[130px]"
                src={flowers}
                />
              </Box>

            </motion.div>
          ) : null}

    </AnimatePresence>
    </div>
    <div className="flex flex-col relative">
    <AnimatePresence initial={false}>
          <motion.div
            onClick={() => setIsVisible1(!isvisible1)}
          >
      <Link
        component="button"
        variant="body1"
        className="link-font link-nav-font"
      >
       
        Interior <ChevronLeft className="link-font" style={{ rotate: "270deg" }} />
      </Link>
          </motion.div>
          {!isvisible1 ? (
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              key="box"
              className="absolute top-[60px] nav-sublinks-container !z-50"
            >
              <Box className="flex flex-col relative justify-between">
                <Typography className="Navsublinks navpara">Whether it's decor for the new nursery or stylish storage solutions for toys, we've got what you need. Explore our interior collection today.</Typography>
                <Link className="Navsublinks" sx={{
                      padding: "0.8rem 2rem 0.4rem"

                }}>Shop All</Link>
                <Link className="Navsublinks" sx={{
                      padding: "0.8rem 2rem 0.4rem"

                }}>Bathroom</Link>
                <Link className="Navsublinks" sx={{
                      padding: "0.8rem 2rem 0.4rem"

                }}>Kitchen</Link>
                <Link className="Navsublinks" sx={{
                      padding: "0.8rem 2rem 0.4rem"

                }}>Nursery</Link>
                <motion.img 
                initial={{rotate:[0]}}
                whileHover={{
                      x:[0,-30,0],
                      rotate:[-8,0,8]
                }}
                transition={{
                      duration:1,
                      delay:0.1
                    }}
                className="absolute -bottom-6 !right-2 w-[130px] h-[130px]"
                src={filledflower}
                />
              </Box>

            </motion.div>
          ) : null}

    </AnimatePresence>
    </div>
    <div className="flex flex-col relative">
    <AnimatePresence initial={false}>
          <motion.div
            onClick={() => setIsVisible2(!isvisible2)}
          >
      <Link
        component="button"
        variant="body1"
        className="link-font link-nav-font"
      >
       Play <ChevronLeft className="link-font" style={{ rotate: "270deg" }} />
      </Link>
          </motion.div>
          {!isvisible2 ? (
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              key="box"
              className="absolute top-[60px] nav-sublinks-container !z-50"
            >
              <Box className="flex flex-col relative justify-between">
                <Typography className="Navsublinks navpara !-tracking-normal">We believe play is SUPER important for little ones, as is making sure it's developmentally appropriate (what can I say, it's the teacher in me). That's why we've tagged all of our play items by age to help you choose the right toy for your little one or when picking out a gift..</Typography>
                <Link className="Navsublinks" sx={{
                      padding: "0.8rem 2rem 0.4rem"

                }}>Shop All</Link>
                <Link className="Navsublinks" sx={{
                      padding: "0.8rem 2rem 0.4rem"

                }}>Shop by product type</Link>
                <Link className="Navsublinks" sx={{
                      padding: "0.8rem 2rem 0.4rem"

                }}>Play development</Link>
                <motion.img 
                initial={{rotate:[0]}}
                whileHover={{
                      x:[0,-30,0],
                      rotate:[-8,0,8]
                }}
                transition={{
                      duration:1,
                      delay:0.1
                    }}
                className="absolute -bottom-6 !right-2 w-[130px] h-[130px]"
                src={semicricle}
                />
              </Box>

            </motion.div>
          ) : null}

    </AnimatePresence>
    </div>
    <div className="flex flex-col relative">
    <AnimatePresence initial={false}>
          <motion.div
            onClick={() => setIsVisible3(!isvisible3)}
          >
      <Link
        component="button"
        variant="body1"
        className="link-font link-nav-font"
      >
       Wear <ChevronLeft className="link-font" style={{ rotate: "270deg" }} />
      </Link>
          </motion.div>
          {!isvisible3 ? (
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              key="box"
              className="absolute top-[60px] nav-sublinks-container !z-50"
            >
              <Box className="flex flex-col relative justify-between">
                <Typography className="Navsublinks navpara">Kidswear should be an extension of your sense of style, so you'll find our clothing comes with all the design details you'd expect for yourself. Browse daywear, nightwear, outerwear, swimwear and accessories.</Typography>
                <Link className="Navsublinks" sx={{
                      
                }}>Shop All</Link>
                <Link className="Navsublinks" sx={{
                      
                }}>Tops & JACKETS</Link>
                <Link className="Navsublinks" sx={{
                     

                }}>Body & Sleep Suits</Link>
                <Link className="Navsublinks" sx={{
                      
                }}>Dungarees & Overalls</Link>
                <Link className="Navsublinks" sx={{
                      
                }}>Accessories</Link>
                <motion.img 
                initial={{rotate:[0]}}
                whileHover={{
                      x:[0,-30,0],
                      rotate:[-8,0,8]
                }}
                transition={{
                      duration:1,
                      delay:0.1
                    }}
                className="absolute -bottom-6 !right-2 w-[130px] h-[130px]"
                src={sunglasses}
                />
              </Box>

            </motion.div>
          ) : null}

    </AnimatePresence>
    </div>
    <div className="flex flex-col relative">
    <AnimatePresence initial={false}>
          <motion.div
            onClick={() => setIsVisible4(!isvisible4)}
          >
      <Link
        component="button"
        variant="body1"
        className="link-font link-nav-font"
      >
       Travel <ChevronLeft className="link-font" style={{ rotate: "270deg" }} />
      </Link>
          </motion.div>
          {!isvisible4 ? (
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              key="box"
              className="absolute top-[60px] nav-sublinks-container !z-50"
            >
              <Box className="flex flex-col relative justify-between">
                <Typography className="Navsublinks navpara">Make travelling with kids a breeze with our travel accessories. Check out our travel changing mats, snack pots and water bottles and never get caught short again. You'll even find mini backpacks and toys made for on-the-go adventures too.</Typography>
                <Link className="Navsublinks" sx={{
                      
                }}>Shop All</Link>
                <Link className="Navsublinks" sx={{
                      
                }}>Changing Mats</Link>
                <Link className="Navsublinks" sx={{
                     

                }}>Kids Bags</Link>
                <Link className="Navsublinks" sx={{
                      
                }}>Snacking on the go</Link>
                <Link className="Navsublinks" sx={{
                      
                }}>toys that travel</Link>
                <Link className="Navsublinks" sx={{
                      
                }}>Water Bottles</Link>
                <motion.img 
                initial={{rotate:[0]}}
                whileHover={{
                      x:[0,-30,0],
                      rotate:[-8,0,8]
                }}
                transition={{
                      duration:1,
                      delay:0.1
                    }}
                className="absolute -bottom-8 !right-0 w-[140px] h-[140px]"
                src={diamond}
                />
              </Box>

            </motion.div>
          ) : null}

    </AnimatePresence>
    </div>
    <div className="flex flex-col relative">
    <AnimatePresence initial={false}>
          <motion.div
            onClick={() => setIsVisible5(!isvisible5)}
          >
      <Link
        component="button"
        variant="body1"
        className="link-font link-nav-font"
      >
       
        Gifts <ChevronLeft className="link-font" style={{ rotate: "270deg" }} />
      </Link>
          </motion.div>
          {!isvisible5 ? (
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              key="box"
              className="absolute top-[60px] nav-sublinks-container !z-50"
            >
              <Box className="flex flex-col relative justify-between">
                <Link className="Navsublinks" sx={{
                      padding: "0.8rem 2rem 1.1rem"

                }}>SHOP ALL</Link>
                <Link className="Navsublinks" sx={{
                      padding: "0.8rem 2rem 1.1rem"

                }}>Gifts For a newborn</Link>
                <Link className="Navsublinks" sx={{
                      padding: "0.8rem 2rem 1.1rem"

                }}>gifts for a 1 year old</Link>
                <Link className="Navsublinks" sx={{
                      padding: "0.8rem 2rem 1.1rem"

                }}>gifts for a 2 year old</Link>
                <Link className="Navsublinks" sx={{
                      padding: "0.8rem 2rem 1.1rem"

                }}>gifts for a 3 year old</Link>
                <Link className="Navsublinks" sx={{
                      padding: "0.8rem 2rem 1.1rem"

                }}>gifts for grown ups</Link>
                <Link className="Navsublinks" sx={{
                      padding: "0.8rem 2rem 1.1rem"

                }}>gifts under $20</Link>
                <Link className="Navsublinks" sx={{
                      padding: "0.8rem 2rem 1.1rem"

                }}>gifts under $50</Link>
                <Link className="Navsublinks" sx={{
                      padding: "0.8rem 2rem 1.1rem"

                }}>gifts cards</Link>
                <Link className="Navsublinks">cards</Link>
                <motion.img 
                initial={{rotate:[0]}}
                whileHover={{
                      x:[0,-30,0],
                      rotate:[-8,0,8]
                }}
                transition={{
                      duration:1,
                      delay:0.1
                    }}
                className="absolute bottom-0 !right-0 w-[130px] h-[130px]"
                src={tulip}
                />
              </Box>

            </motion.div>
          ) : null}

    </AnimatePresence>
    </div>

    <div className="flex flex-col relative">
      <AnimatePresence initial={false}>
        <motion.div
          onClick={() => setIsVisible6(!isvisible6)}
          > 
      <Link
        component="button"
        variant="body1"
        className="link-font link-nav-font blog "
        >
        Blogs
        
        {!isvisible6 ? (
          <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              key="box"
              >
                <img className="absolute top-3 max-w-100 z-100"
           src={education} alt="" />
              </motion.div>
                  ):null}
      </Link>
        </motion.div>
        </AnimatePresence>
    </div>
    <div className="flex flex-col relative">
      <AnimatePresence initial={false}>
        <motion.div
          onClick={() => setIsVisible7(!isvisible7)}
          > 
      <Link
        component="button"
        variant="body1"
        className="link-font link-nav-font blog"
        >
        About
        
        {!isvisible7 ? (
          <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              key="box">
                <img className="absolute top-3 z-100 max-w-[60%] h-[35px] left-3"
           src={education} alt="" />
              </motion.div>
                  ):null}
      </Link>
        </motion.div>
        </AnimatePresence>
    </div>
    <div className="flex flex-col relative">
      <AnimatePresence initial={false}>
        <motion.div
          onClick={() => setIsVisible8(!isvisible8)}
          > 
      <Link
        component="button"
        variant="body1"
        className="link-font link-nav-font blog"
        >
      Contact 
        
        {!isvisible8 ? (
          <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              key="box">
                <img className="absolute top-3 z-100 max-w-[60%] h-[35px] left-4"
           src={education} alt="" />
              </motion.div>
                  ):null}
      </Link>
        </motion.div>
        </AnimatePresence>
    </div>


    </Container>
  )
}

export default Navbar 