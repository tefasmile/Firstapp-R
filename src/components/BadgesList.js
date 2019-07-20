//COMPONENTE DE LISTA DE TODOS LOS BADGES
import React from 'react';

class BadgesListItem extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {/* uso de map para creacion de badges */}
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id}>
              <p>
                {badge.firstName} {badge.lastName}
              </p>
            </li>
          );
        })}
      </ul>
    );
  }
}


export default BadgesListItem;

// import './styles/BadgesList.css';

// class BadgesListItem extends React.Component {
//   render() {
//     return (
//       <div className="BadgesListItem">
//         <img
//           className="BadgesListItem__avatar"
//           src={this.props.badge.avatarUrl}
//           alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
//         />

//         <div>
//           <strong>
//             {this.props.badge.firstName} {this.props.badge.lastName}
//           </strong>
//           <br />@{this.props.badge.twitter}
//           <br />
//           {this.props.badge.jobTitle}
//         </div>
//       </div>
//     );
//   }
// }

// class BadgesList extends React.Component {
//   render() {
//     return (
//       <div className="BadgesList">
//         <ul className="list-unstyled">
//           {this.props.badges.map(badge => {
//             return (
//               <li key={badge.id}>
//                 <BadgesListItem badge={badge} />
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }


