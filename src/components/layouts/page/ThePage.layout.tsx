import React from 'react';
import type { ReactNode } from 'react';

interface ThePageProps {
  children: ReactNode;
  [k:string]: any;
}

class ThePage extends React.Component<ThePageProps> {
  render(){
    return (
      <div className="">
        {this.props.children}
      </div>
    )
  }
};

export default ThePage;
