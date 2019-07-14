import React from 'react';

import './styles/Badge.css';
import ConfLogo from '../images/badge-header.svg';
// import Astronauta from '../images/astronauts.svg';

//Componente = a una clase
class Badge extends React.Component{
  //metodo render: resultado en pantalla
  render(){
    

    return (
      <div className='Badge'>
        <div className='Badge__header'>
          <img src={ConfLogo} alt='Logo de la conferencia'/>
        </div>
        <div className='Badge__section-name'>
          <img className='Badge__avatar' src={this.props.avatar} alt='Photo profile'/>
          <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
        </div>
        <div className='Badge__section-info'>
          <h2>{this.props.jobTitle}</h2>
          <p>@{this.props.Twitter}</p>
        </div>
        <div className='Badge__footer'>
          #uTester
        </div>
      </div>
    );
  }

}

//Exportamos ese componente Badge
export default Badge;

// import './styles/Badge.css';
// import confLogo from '../images/badge-header.svg';

// class Badge extends React.Component {
//   render() {
//     return (
//       <div className="Badge">
//         <div className="Badge__header">
//           <img src={confLogo} alt="Logo de la conferencia" />
//         </div>

//         <div className="Badge__section-name">
//           <img
//             className="Badge__avatar"
//             src={this.props.avatarUrl}
//             alt="Avatar"
//           />
//           <h1>
//             {this.props.firstName} <br /> {this.props.lastName}
//           </h1>
//         </div>

//         <div className="Badge__section-info">
//           <h3>{this.props.jobTitle}</h3>
//           <div>@{this.props.twitter}</div>
//         </div>

//         <div className="Badge__footer">#platziconf</div>
//       </div>
//     );
//   }
// }

// export default Badge;
