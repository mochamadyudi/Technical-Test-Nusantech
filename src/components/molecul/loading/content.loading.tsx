import React from 'react';

import LottiesMolecul from '../lotties.molecul.tsx'
import Animation from "../../../assets/lotties/loading-spinner-dots.json"

const ContentLoading: React.FC<any> = (props) => {
  return (
    <React.Fragment>
      <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center" {...props}>
        <LottiesMolecul
          width={250}
          height={250}
          animation={Animation} />
      </div>
    </React.Fragment>
  )
}

export default ContentLoading;
