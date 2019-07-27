import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';
import Badge from './components/Badge';
import App from './components/App';//aqui pondremos el router domo con sus rutas



const container = document.getElementById('app');
ReactDOM.render(<Badges />, 
    container
);

/* ReactDOM.render(<App />, container);
import React from 'react';//1 relaciona con
import ReactDOM from 'react-dom';//2 relaciona con
const jsx = <h1>Hola mundo react</h1>;//1 este
otra alternativa de creacion elemento
const element = React.createElement('a', {href: 'https://giphy.com'}, 'Hola soy un children');
const name = 'Stephanie';
const suma = () => 3+3;
const element = React.createElement('h1', {}, `Hola soy ${name}`);
const jsx = <h1>Hola soy, {suma()}</h1>
const jsx = <div>
    <h1>Hola soy Stephanie</h1>
    <p>Soy Fronted Web</p>
</div>
const container = document.getElementById('app');//2 este
//metodo render con 2 parametros (que,donde)
ReactDOM.render(jsx,container); */