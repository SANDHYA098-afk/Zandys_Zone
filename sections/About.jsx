'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}

    >
      <TypingText title="| About Me" textStyles="text-center" />

      <motion.p
      
      variants={fadeIn('up', 'tween', 0.2, 1)}
      className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >

        I’m 
        
        <span className="font-extrabold text-white"> Sandhiya</span> currently a  
        <span className="font-extrabold text-white"> Computer Science student</span>
        , learning through exploration, small projects, and a lot of trial and error. 
        I learn best by Building small projects, breaking them, fixing them, and sometimes starting again from scratch.

      </motion.p>


      <motion.img
      variants={fadeIn('up', 'tween', 0.3, 1)}
      src="/arrow-down.svg"
      alt="arrow down"
      className="w-[18px] h-[28px] object-contain mt-[28px]"
      
      />

      

    </motion.div>
  </section>
);

export default About;
