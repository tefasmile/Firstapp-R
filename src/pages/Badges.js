import React from 'react';
import { Link } from 'react-router-dom';


import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import BadgesList from '../components/BadgesList';

class Badges extends React.Component {

  //inicializamos la info
  state = {

    data: [
      {
        id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
        firstName: 'Wlad',
        lastName: 'Williams',
        email: 'wladwill@gmail.com',
        jobTitle: 'Dinamix Brand Director',
        twitter: 'FredaGrady22221-7573',
        avatarUrl:
          'https://fotos.perfil.com/2012/07/01/cropped/250/250/center/Tom-Cruise.jpg',
      },
      {
        id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
        firstName: 'Major',
        lastName: 'Rodriguez',
        email: 'Ilene66@hotmail.com',
        jobTitle: 'Human Research Architect',
        twitter: 'MajorRodriguez61545',
        avatarUrl:
          'https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon',
      },
      {
        id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
        firstName: 'Daphney',
        lastName: 'Torphy',
        email: 'Ron61@hotmail.com',
        jobTitle: 'National Markets Officer',
        twitter: 'DaphneyTorphy96105',
        avatarUrl:
          'https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon',
      },
    ]

  }


  render() {
    return (
      <div>
        <Navbar />
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt=""/>
            </div>
          </div>
        </div>
        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge Container
            </Link>
          </div>

          <div className="Badge__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default Badges;