import React from 'react';

import LottiesMolecul from '../lotties.molecul.tsx'
import Animation from '../../../assets/lotties/loading-spinner-dots.json';
const PageLoading: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <React.Fragment>
      <div className="absolute top-0 left-0 h-full w-full flex flex-col space-y-2 items-center justify-center">
        <LottiesMolecul
          // width={350}
          height={220}
          animation={Animation} />
        {children}
      </div>
    </React.Fragment>
  )
}

export default PageLoading;
