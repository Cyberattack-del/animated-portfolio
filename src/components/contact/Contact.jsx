import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./contact.scss";
import emailjs from '@emailjs/browser';
import { useState } from "react";

const variants = {
    initial: { y: 500, opacity: 0 },
    animate: { 
        y: 0, 
        opacity: 1, 
        transition: { duration: 0.5, staggerChildren: 0.1 } 
    }
};

const Contact = () => {
    const ref = useRef();
    const formRef = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    //const [error,setError] = useState(false);
    //const [success,setSuccess] = useState(false);

    const isInView = useInView(ref, { margin: "-100px" });


    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceId = "service_u9k63wi";
        const templateId = "template_cz2595i";
        const publicKey = "S0UwU7KJu34w0Sapq";

        const templateParams = {
            from_name : name,
            from_email : email,
            to_name : 'Harish715',
            message : message,
        }
        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
            console.log('Email sent successfully!',response);
            //setSuccess(true);
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch((error) => {
            console.error('Error senting email',error);
            //setError(true)
        }); 

}
    return (
        <motion.div 
            ref={ref} 
            className="contact" 
            variants={variants} 
            initial="initial" 
            whileInView="animate"
        >
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>kkharish367@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Address</h2>
                    <span>2 55 Vanniyar Street <br />Sengamedu<br />Chidambaram.</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Contact</h2>
                    <span>+91 7708992076</span>
                </motion.div>
            </motion.div>

            <div className="formContainer">
                <motion.div 
                    className="phoneSvg"
                    initial={{ opacity: 1 }} 
                    whileInView={{ opacity: 0 }} 
                    transition={{ delay: 3, duration: 1 }}
                >
   <svg 
    width="800px" 
    height="800px" 
    viewBox="0 0 35 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
>
    <motion.path 
        strokeWidth="2" 
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3 }}
        d="M16 1C24.28 1 31 7.72 31 16C31 20.41 29.21 24.51 26.31 27.31C25.44 28.19 24.17 28.74 22.91 28.86C23.91 28.27 24.78 27.44 25.47 26.45C26.02 25.65 26.31 24.72 26.56 23.75C26.86 22.58 22 20.67 21.5 22C21.29 22.59 21 24.5 20.5 25C20 25.5 19 25 18.5 24.5C16.5 22.5 14.5 20.5 12.5 18.5C10.5 16.5 8.5 14.5 6.5 12.5C6 12 5.5 11 6 10.5C6.5 10 8.41 9.71 9 9.5C10.33 9 8.42 4.14 7.25 4.44C6.28 4.69 5.35 4.98 4.55 5.53C3.57 6.22 2.74 7.09 2.14 8.09C2.26 6.83 2.81 5.56 3.69 4.69C6.49 1.79 10.59 0 15 0C16 0 16 1 16 1Z"
    />
</svg>

                </motion.div>

                <motion.form
                className="Emailform"
                ref={formRef}
                onSubmit={handleSubmit}
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    transition={{ delay: 4, duration: 1 }}
                >
                    <input type="text"
                     required placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)} />
                    <input type="email" required placeholder="Email" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                    <textarea rows={8} placeholder="Message" value={message}
                    onChange={(e) => setMessage(e.target.value)} />
                    <button>Submit</button>
                    
                </motion.form>
            </div>
        </motion.div>
    );
};

export default Contact;