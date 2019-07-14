import React from 'react';
import logo from '../images/logo.svg';
import './styles/Navbar.css';

//Componente Navbar UI
class Navbar extends React.Component{
  render() {
    return (
      <div className='Navbar'>
        <div className='container-fluid'>  
          <a className='Navbar__brand' href='/'>
              <img className='Navbar__brand-logo' src={logo} alt='Logo' />
              <span className="font-weight-light">uTest</span>
              <span className="font-weight-bold">Platform Testing</span>
          </a>
        </div>
      </div>

    );
  }
}

export default Navbar;



// import React from 'react';
// import { Link } from 'react-router-dom';

// import './styles/Navbar.css';
// import logo from '../images/logo.svg';

// class Navbar extends React.Component {
//   render() {
//     return (
//       <div className="Navbar">
//         <div className="container-fluid">
//           <Link className="Navbar__brand" to="/">
//             <img className="Navbar__brand-logo" src={logo} alt="Logo" />
//             <span className="font-weight-light">Platzi</span>
//             <span className="font-weight-bold">Conf</span>
//           </Link>
//         </div>
//       </div>
//     );
//   }
// }

// export default Navbar;
