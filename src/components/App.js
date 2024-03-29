import React from 'react';
import { BrowserRouter, Switch ,Route } from 'react-router-dom';

//importamos el layout (conformado por navbar y )
import Layout from '../components/Layout';
//agregamos nuestras paginas de la app
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';


function App() {
  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          {/* Anexamos nuestras rutas para las paginas */}
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}


export default App;

// import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Layout from './Layout';
// import Home from '../pages/Home';
// import Badges from '../pages/Badges';
// import BadgeNew from '../pages/BadgeNew';
// import NotFound from '../pages/NotFound';

// function App() {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/badges" component={Badges} />
//           <Route exact path="/badges/new" component={BadgeNew} />
//           <Route component={NotFound} />
//         </Switch>
//       </Layout>
//     </BrowserRouter>
//   );
// }

// export default App;
