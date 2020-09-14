import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import './styles.css';
import github from './github.png';
import linkedin from './linkedin.png';
import facebook from './facebook.png';
import phone from './phone.png';
import email from './email.png';
import {ImageBox} from '../imageBox/imageBox';





export const Swipe = () => {
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    "linear-gradient(180deg, rgb(0, 255, 185) 0%, #3ad6b9 100%)",
    "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)"
  ]);
  const color = useTransform(x, xInput, [
    "rgb(211, 9, 225)",
    "#3ad6b9",
    "rgb(3, 209, 0)"
  ]);
  const tickPath = useTransform(x, [10, 100], [0, 1]);
  const crossPathA = useTransform(x, [-10, -50], [0, 1]);
  const crossPathB = useTransform(x, [-50, -100], [0, 1]);

  return (
    
      <motion.div className="example-container" style={{ background }}>

        <motion.div className="prompt1" style={{zIndex:1}}><h1>Click an icon to get in touch</h1></motion.div>
        
        <motion.div className="imageBoxes"
            initial={{
              opacity: 0,
              y: 50,
          }}
          animate={{
              opacity: 1,
              y: 1,
          }}
          transition={{
              delay: 0.1,
              duration: 0.5,
          }}
        >
          <ImageBox image={github} link={"https://github.com/Tyson-Subasinghe"} delay={0.1}/>
          <ImageBox image={linkedin} link={"https://www.linkedin.com/in/tyson161828/"} delay={0.2}/>
          <ImageBox image={phone} link={"tel:+61478138575"}  delay={0.3}/>
          <ImageBox image={email} link={"mailto:tysonsubasinghe@gmail.com?subject=Hello!"} delay={0.4}/>
        </motion.div>

        <motion.div className="prompt2" style={{zIndex:1}}><h2>or just swipe left or right on me!</h2></motion.div>

        

        <motion.div
          className="box"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
        >
          
          <svg className="progress-icon" viewBox="0 0 50 50">
            
            <motion.path
              fill="none"
              strokeWidth="2"
              stroke={color}
              d="M14,26 L 22,33 L 35,16"
              strokeDasharray="0 1"
              style={{ pathLength: tickPath }}
            />
            <motion.path
              fill="none"
              strokeWidth="2"
              stroke={color}
              d="M17,17 L33,33"
              strokeDasharray="0 1"
              style={{ pathLength: crossPathA }}
            />
            <motion.path
              fill="none"
              strokeWidth="2"
              stroke={color}
              d="M33,17 L17,33"
              strokeDasharray="0 1"
              style={{ pathLength: crossPathB }}
            />
          </svg>
        </motion.div>
      </motion.div>
   
  );
};
