import React from 'react'
import {Classes} from "@utils/index.ts";

interface ITheContainerProps {
  children: React.ReactNode;
  className?: string;
  sectionId?: string;
  testId?: string;
}

const TheContainer: React.FC<ITheContainerProps> = ({ children, className, sectionId, testId }) => {
  return (
    <section
      id={testId ?? `yid-container-${Math.random().toString(36).slice(-6)}`}
      data-testid={sectionId ?? 'yid-container'}
      className={Classes("yid-container", className)}
    >
      {children}
    </section>
  )
}

export default TheContainer
