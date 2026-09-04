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

        {/* Width drives height so every sketch stays whole at any screen size.
            The source was cropped to even 16px margins — its canvas used to be
            1920x1080 with the art sitting 83px left of centre. */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="relative mt-10 sm:mt-[68px] w-full">

          <img
            src="/gallery.png"
            width={1591}
            height={921}
            alt="A page of pencil and ink sketches: a Buddha study, a ship's anchor, and several anime character portraits."
            className="w-full h-auto rounded-[16px] sm:rounded-[24px]"
          />

        </motion.div>

        </motion.div>
  </section>

);

export default World;
