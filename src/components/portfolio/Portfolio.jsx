import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/30312761/pexels-photo-30312761/free-photo-of-delicious-hummus-dish-with-chickpeas-and-crackers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nostrum quidem architecto rerum et minus saepe sapiente!",
    },
    {
        id: 2,
        title: "Next.js Blog",
        img: "https://images.pexels.com/photos/29343550/pexels-photo-29343550/free-photo-of-scenic-mountain-road-in-majestic-forest-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nostrum quidem architecto rerum et minus saepe sapiente!",
    },
    {
        id: 3,
        title: "Vanilla JS App",
        img: "https://images.pexels.com/photos/30594080/pexels-photo-30594080/free-photo-of-playful-cat-relaxing-on-sunlit-rocks-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nostrum quidem architecto rerum et minus saepe sapiente!",
    },
    {
        id: 4,
        title: "Music App",
        img: "https://images.pexels.com/photos/30244799/pexels-photo-30244799/free-photo-of-vibrant-portrait-in-dramatic-red-and-blue-lighting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nostrum quidem architecto rerum et minus saepe sapiente!",
    },
];

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        //offset: ["start end", "end start"], // Smooth animation
    });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imgContainer" ref={ref}>
                    <img src={item.img} alt={item.title}/>
                    </div>             
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
                </div>          
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;