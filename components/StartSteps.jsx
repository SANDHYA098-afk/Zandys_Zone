import styles from '../styles';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
      <p className="font-bold text-[20px] text-white">
        ~
      </p>

    </div>

    <p className="flex-1 font-normal text-[16px] text-[#B0B0B0] ml-[30px] leading-[32px]">
      {text}

      </p>
     
  </div>
);

export default StartSteps;
