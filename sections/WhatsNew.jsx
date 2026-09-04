'use client';

import { motion } from 'framer-motion';

import { TypingText, TitleText, NewFeatures } from '../components';

import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { newFeatures } from '../constants';

// col-reverse puts the image above the text on phones, while the row at lg
// keeps the desktop arrangement of text on the left and image on the right.
const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`} >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col-reverse lg:flex-row gap-8`}
      >

        

          <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col">

            <TypingText title="| Beyond Academics" />

            <TitleText title={<>Outside the Classroom</>} />

            

            {<div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">

              {newFeatures.map((feature) => (

                <NewFeatures key={feature.title} {...feature} />

              ))}
              </div> }
          </motion.div>


          <motion.div
        
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}>

          <img src="/beyond.png" alt="" className="w-[70%] max-w-[300px] lg:w-[90%] lg:max-w-none h-auto object-contain" />


          </motion.div>

    </motion.div>
  </section>
);

export default WhatsNew;
