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
    className={`${styles.paddings} relative`}
  >
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-10 relative z-10`}>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
        <div>
          <h5 className="font-normal text-[34px] xs:text-[40px] md:text-[64px] leading-[1.1] text-white">
            Find me here
          </h5>
          <p className="mt-3 font-normal text-[16px] xs:text-[18px] md:text-[24px] leading-snug text-secondary-white max-w-[32ch]">
            Open for collaborations, new missions, and opportunities.
          </p>
        </div>

        {/* Stacked on phones: an icon beside a full sentence needs the width. */}
        <ul className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-6 lg:gap-4">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 max-w-[320px]"
              >
                <img
                  src={social.url}
                  alt=""
                  width={46}
                  height={46}
                  className="w-10 h-10 xs:w-[46px] xs:h-[46px] object-contain shrink-0"
                />
                <span className="flex flex-col">
                  <span className="text-[15px] font-semibold capitalize text-white">
                    {social.name}
                  </span>
                  <span className="text-[13px] leading-snug text-secondary-white group-hover:text-white">
                    {social.link.text}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="mb-8 sm:mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h4 className="font-extrabold text-[20px] xs:text-[24px] text-white">Sandhiya SL</h4>

          <p className="font-normal text-[13px] xs:text-[14px] opacity-70 text-white">
            © 2026 Zandy&apos;s Zone | Made by a CS student who learns by building.
          </p>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
