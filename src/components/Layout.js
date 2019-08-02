import React from 'react';

import Navbar from './Navbar';

function Layout(props) {
  const children = props.children;

  return props.children;
  return (
      <React.Fragment>
        <Navbar />
        {props.children}
      </React.Fragment>
    
    // <React.Fragment>
    //   <Navbar />
    //   {props.children}
    // </React.Fragment>
  );
}

export default Layout;
