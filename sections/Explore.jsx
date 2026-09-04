'use client';

import { motion } from 'framer-motion';

import { TypingText, TitleText, ProjectCard } from '../components';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { projects } from '../constants';

const Explore = () => (
  <section className={`${styles.paddings}`} id="explore">
    <motion.div
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| The Projects" textStyles="text-center" />

      <TitleText title={<>Things I&apos;ve built</>} textStyles="text-center" />

      <div className="mt-12 sm:mt-16 flex flex-col gap-16 sm:gap-24">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} {...project} index={index} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Explore;
