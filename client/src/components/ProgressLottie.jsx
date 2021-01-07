import React from 'react'; 
import Lottie from 'react-lottie'
import animationData from '../lotties/33657-loading.json'

function ProgressLottie(props) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  
      return(
        <div>
          <Lottie options={defaultOptions}
                height="50%"
                width="50%"
          />
        </div>
      )
}

export default ProgressLottie;