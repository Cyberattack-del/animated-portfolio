//import { animate } from "framer-motion"
import "./Hero.scss"
import { motion } from "framer-motion"
 const textVariants = {
    initial:{
        x: -500,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        }
    },
scrollButton:{
    opacity: 0,
    y: 10,
    transition:{
        duration: 2,
        repeat: Infinity
    },
},
};
const sliderVariants = {
    initial:{
        x: 0,
    },
    animate:{
        x: "-200%",     
        transition:{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};
const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
        <motion.div className="textcontainer" variants={textVariants} initial="initial" animate="animate">
            <motion.div variants={textVariants} className="button">
            <motion.h2 variants={textVariants}>HARISH</motion.h2>
            <motion.h1 variants={textVariants}>Web Developer and UI designer</motion.h1>
                <motion.button variants={textVariants}>See the Lastest Work</motion.button>
                <motion.button variants={textVariants}>Contact</motion.button>
            </motion.div>
            <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt=""/>
        </motion.div>
        </div>
        <motion.div className="slidingTextConainer" variants={sliderVariants} initial="initial" animate="animate">
            Writer Content Creator Influencer
        </motion.div>
        <div className="imagecontainer">
        <img src="harish.png" alt=""/>
        </div>
        
    </div>
  )
}
export default Hero
