'use client';

import { motion } from 'framer-motion';

import { TypingText, TitleText } from '../components';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`} >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
      >

        <TypingText title="| Gallery" textStyles="text-center" />

        <TitleText title={<>Some of my sketches</>} textStyles="text-center" />

        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="relative mt-[68px] flex w-full h-[600px]">

          <img src="/gallery.png" alt="map" className="w-full h-full object-cover" />

          <div className="absolute bottom-20 right-10 w-[150px] h-[150px] p-[6px] rounded-full bg-[#5d6680]">
            <img src="newStamp2.png" alt="people" className="w-full h-full" />
          </div>

          

        </motion.div>

        </motion.div>
  </section>

);

export default World;
