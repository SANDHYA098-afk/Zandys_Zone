'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`} >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6`}
      >

        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative">

            <div className="feedback-gradient pointer-events-none z-0" />

            <div className="text-left z-10">

            <p className="mt-[10px] lg:text-[16px] text-[14px] leading-[16px] sm:leading-[22px] font-normal text-white">| My Certificates</p>
              <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white mb-[155px] mt-[10px]">Coursework</h4>
             
            

            <p className="mt-[24px] lg:text-[18px] text-[12px] font-bold text-white">
               ~ Harvard's cs50AI </p>

                <a className="text-blue relative z-20 inline-block cursor-pointer hover:underline" href="https://cs50.harvard.edu/certificates/4d3724e7-cd63-4b46-8b19-47285ae1269d" target="_blank" rel="noopener noreferrer">|LINK|</a>

            <p className="mt-[24px] lg:text-[18px] text-[12px] font-bold text-white">
              ~ Responsive Web Design by freeCodeCamp
            </p>

             <a className="text-blue relative z-20 inline-block cursor-pointer hover:underline" href="https://freecodecamp.org/certification/sandy0102/responsive-web-design" target="_blank" rel="noopener noreferrer">|LINK|</a>

            <p className="mt-[24px] lg:text-[18px] text-[12px] font-bold text-white">
              ~ HackerRank Python (Basic)
            </p>

             <a className="text-blue relative z-20 inline-block cursor-pointer hover:underline" href="https://www.hackerrank.com/certificates/iframe/4d0468d16ddc" target="_blank" rel="noopener noreferrer">|LINK|</a>

            </div>
            

        </motion.div>

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="relative flex-1 flex justify-center items-center border-[1px] border-[#6a6a6a] rounded-[32px]">

             <div className="feedback-gradient pointer-events-none z-0" />

          

           

            <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[10%] top-[3%]">

              <img src="/newStamp2.png" alt="stamp" className="w-[155px] h-[155px] object-contain" />

            </motion.div>

             <div className="text-right flex-col md:flex-row gap-4 justify-between px-10 py-10 z-10">

            <p className="mt-[10px] lg:text-[16px] text-[14px] leading-[16px] sm:leading-[22px] font-normal text-white">| Exploring and building with</p>
              <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white mb-[105px] mt-[10px]">Learning Stack</h4>
             

              <h5 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white ">Languages & Frameworks</h5>
               <p className="mt-[10px] lg:text-[16px] text-[14px] leading-[16px] sm:leading-[22px] font-normal text-white">Python • HTML • CSS • Bootstrap • JavaScript • Tailwind CSS • React.js • Next.js • Flask</p>

               <h5 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white mt-[20px] ">Data & AI</h5>
               <p className="mt-[10px] lg:text-[16px] text-[14px] leading-[16px] sm:leading-[22px] font-normal text-white mb-[5px]">Pandas • NumPy • Matplotlib • TensorFlow • Streamlit</p>

               <h5 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white mt-[20px] ">Tools & Platforms</h5>
               <p className="mt-[10px] lg:text-[16px] text-[14px] leading-[16px] sm:leading-[22px] font-normal text-white mb-[5px]">Canva • VS Code • Jupyter Notebook • PyCharm • Netlify • Git • GitHub</p>





            </div>
        </motion.div>

      </motion.div>

  </section>
);

export default Feedback;
