import React from 'react';

import Navbar from './Navbar';

function Layout(props) {
  const children = props.children;

  return props.children;
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
    // <React.Fragment>
    //   <Navbar />
    //   {props.children}
    // </React.Fragment>
  );
}

export default Layout;
