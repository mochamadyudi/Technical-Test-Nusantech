import React from 'react'

interface ITheContainerProps {
  children: React.ReactNode
}

const TheContainer: React.FC<ITheContainerProps> = ({ children }) => {
  return (
    <div
      data-testid="yid-container"
      className="yid-container"
    >
      {children}
    </div>
  )
}

export default TheContainer
