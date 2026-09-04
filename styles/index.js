// Mobile first: the bare utility is the phone value, each breakpoint scales up.
// `xs` is 480px (defined in tailwind.config.js), `sm` is 640px.
const styles = {
  innerWidth: 'w-full 2xl:max-w-[1280px]',
  interWidth: 'w-[100%] lg:w-[80%]',

  paddings: 'px-6 py-10 xs:px-8 xs:py-12 sm:p-16',
  yPaddings: 'py-10 xs:py-12 sm:py-16',
  xPaddings: 'px-6 xs:px-8 sm:px-16',
  topPaddings: 'pt-10 xs:pt-12 sm:pt-16',
  bottomPaddings: 'pb-10 xs:pb-12 sm:pb-16',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-start items-start',
  flexEnd: 'flex justify-end',
  navPadding: 'pt-[98px]',

  // Hero wordmark, sized fluidly rather than in breakpoint steps. Stepped
  // sizes overflow at in-between widths — the viewport grows but the type is
  // still set for the previous step. 10.5vw keeps "PORTFOLIO" at roughly 59%
  // of the viewport at every width, so it can never push the page sideways.
  heroHeading: 'font-bold uppercase text-white text-[clamp(2rem,10.5vw,9rem)] leading-[1.06]',
  // The D-block tracks the heading: 1.47em wide, 0.75em tall, 0.125em border.
  heroDText:
    'w-[clamp(2.95rem,15.4vw,13.25rem)] h-[clamp(1.5rem,7.9vw,6.75rem)] border-[clamp(4px,1.3vw,18px)] rounded-r-[50px] border-white mx-[6px] sm:mx-2',
};

export default styles;
