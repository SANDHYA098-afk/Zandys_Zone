'use client';

import { motion } from 'framer-motion';

import { socials } from '../constants';

import styles from '../styles';

import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
  variants={footerVariants}
  initial="hidden"
  whileInView="show"
  className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
     
     <div className="flex items-center justify-between flex-wrap gap-5">

      <h5 className="font-normal md:text-[64px] text-[44px] text-white">Find me here</h5>

       <p className="font-normal md:text-[34px] text-[24px] text-white">Open for collaborations, new missions, and opportunities.</p>

     <div className="flex gap-4">

          {socials.map((social) => (
  <a key={social.name} href={social.link.href} className="text-white text-[14px]">
    <img src={social.url} alt={social.name} className="w-[50px] h-[50px] object-contain cursor-pointer" />
    <span>{social.link.text}</span>
  </a>
))}


        </div>

     </div>

     <div className="flex flex-col">

      <div className="mb-[50px] h-[2px] bg-white opacity-10" />

      <div className="flex items-center justify-between flex-wrap gap-4">

        <h4 className="font-extrabold text-[24px] text-white">Sandhiya SL</h4>

        <p className="font-normal text-[14px] opacity-70 text-white">© 2025 Zandy's Zone | Made by a CS student who learns by building.</p>

        

      </div>

     </div>
     
      </div>

  </motion.footer>
);

export default Footer;
