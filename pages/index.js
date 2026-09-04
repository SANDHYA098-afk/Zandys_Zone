import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

// Story order: who she is, where she studies, what she does outside it,
// what she has shipped, what she builds with, what she has won, then the art.
const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />

    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <GetStarted />
    </div>

    <div className="relative">
      <WhatsNew />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>

    <div className="relative">
      <Feedback />
      <div className="gradient-04 z-0" />
      <Insights />
    </div>

    <World />

    <Footer />
  </div>
);

export default Page;
