'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const Arrow = ({ className = 'w-4 h-4 shrink-0' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

// Rows alternate side so four wide screenshots don't read as one column of
// identical cards. The image link is hidden from assistive tech because the
// text link below points at the same URL — one tab stop, not two.
const ProjectCard = ({ title, kind, blurb, tech, live, image, index }) => {
  const host = live.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const flipped = index % 2 === 1;

  return (
    <motion.article
      variants={fadeIn('up', 'tween', 0.1, 0.6)}
      className={`flex flex-col ${flipped ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 lg:gap-12 items-center`}
    >
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="zz-frame w-full lg:w-[56%]"
      >
        <span className="zz-frame__bar">
          <span className="truncate">{host}</span>
          <Arrow className="w-3.5 h-3.5 shrink-0" />
        </span>
        <img
          src={image}
          width={1917}
          height={907}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-auto"
        />
      </a>

      <div className="w-full lg:w-[44%]">
        <h3 className="font-bold text-[26px] sm:text-[32px] leading-tight text-white">{title}</h3>
        <p className="mt-1.5 text-[15px] text-blue-300">{kind}</p>

        <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.7] text-secondary-white">
          {blurb}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {tech.map((item) => (
            <li key={item} className="zz-chip">
              {item}
            </li>
          ))}
        </ul>

        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 font-semibold text-[15px] text-blue-300 hover:text-white"
        >
          Open live site
          <Arrow />
          <span className="sr-only">{`, ${title}, opens in a new tab`}</span>
        </a>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
