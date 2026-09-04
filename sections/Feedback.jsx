'use client';

import { motion } from 'framer-motion';

import { TypingText, TitleText } from '../components';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { certifications, techStack } from '../constants';

// Blue means it goes somewhere; violet is a label and never clickable.
const ExternalArrow = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 shrink-0"
    aria-hidden="true"
  >
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

// col-reverse puts the Learning Stack above the certificates on phones, while
// the row at lg keeps certificates on the left and the stack on the right.
const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`} id="stack">
    <motion.div
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className={`${styles.innerWidth} mx-auto flex flex-col-reverse lg:flex-row gap-5 sm:gap-6`}
    >
      {/* Credentials */}
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 0.7)}
        className="zz-card relative flex-1 p-6 sm:p-8 overflow-hidden"
      >
        <div className="feedback-gradient pointer-events-none z-0" />

        <div className="relative z-10">
          <TypingText title="| My Certificates" />
          <TitleText
            title={<>Coursework / Certifications</>}
            textStyles="!text-[28px] sm:!text-[36px]"
          />

          <ul className="mt-8">
            {certifications.map((cert) => (
              <li key={cert.name} className="zz-row">
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-between gap-4 py-4 px-2 -mx-2 text-blue-300 hover:text-white"
                >
                  <span>
                    <span className="block font-semibold text-[16px] sm:text-[17px] leading-snug text-white">
                      {cert.name}
                    </span>
                    <span className="block mt-1 text-[14px] text-secondary-white">
                      {cert.issuer}
                    </span>
                  </span>
                  <span className="flex items-center gap-1.5 pt-0.5 text-[13px] font-semibold whitespace-nowrap">
                    View
                    <ExternalArrow />
                  </span>
                  <span className="sr-only">certificate, opens in a new tab</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Stack */}
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 0.7)}
        className="zz-card relative flex-1 p-6 sm:p-8 overflow-hidden"
      >
        <div className="feedback-gradient pointer-events-none z-0" />

        <div className="relative z-10">
          <TypingText title="| Exploring and building with" />
          <TitleText title={<>Learning Stack</>} textStyles="!text-[28px] sm:!text-[36px]" />

          <div className="mt-8 flex flex-col gap-6">
            {techStack.map((group) => (
              <div key={group.group}>
                <h4 className="text-[14px] font-semibold tracking-wide text-[#a78bfa]">
                  {group.group}
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item.name} className="zz-chip">
                      <img src={item.icon} alt="" width={16} height={16} className="w-4 h-4 shrink-0" />
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
