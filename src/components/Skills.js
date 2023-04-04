import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Skills = () => {
  return (
    <div className=" mx-auto relative overflow-hidden px-16 md:px-16 rounded-lg lg:pb-2 pb-16" >

      <div className="grid grid-cols-2 md:grid-cols-6 sm:grid-cols-2 gap-4 md:gap-2 py-8 px-8" >
        <div className="skills-item pt-4">
          <Player
            autoplay
            loop
            src="https://assets4.lottiefiles.com/packages/lf20_lwpbfw74.json"
            style={{ width: '70px', height: '70px' }}
          />
        </div>
        <div className="skills-item mb-4">
          <Player
            autoplay
            loop
            src="https://assets7.lottiefiles.com/datafiles/fab7172a9302d416bcdb8ac7e1c71123/data.json"
            style={{ width: '100px', height: '100px' }}
          />
        </div>
        <div className="skills-item">
          <Player
            autoplay
            loop
            src="https://assets5.lottiefiles.com/packages/lf20_ipzmqnqg.json"
            style={{ width: '100px', height: '100px' }}
          />
        </div>
        <div className="skills-item pl-4">
          <Player
            autoplay
            loop
            src="https://assets6.lottiefiles.com/packages/lf20_jk6e0huv.json"
            style={{ width: '100px', height: '100px' }}
          />
        </div>
        <div className="skills-item">
          <Player
            autoplay
            loop
            src="https://assets9.lottiefiles.com/packages/lf20_N147L2Vh4e.json"
            style={{ width: '100px', height: '100px' }}
          />
        </div>
        <div className="skills-item pl-4">
          <Player
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_S6vWEd.json"
            style={{ width: '100px', height: '100px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
