import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Logo from './pages/splashScreen/Logo';
import Splash from './pages/splashScreen/Splash';
import Home from './pages/home/Home';

/* Core CSS */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import '@ionic/react/css/palettes/dark.system.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>

        <Route exact path="/Logo" component={Logo} />
        <Route exact path="/Splash" component={Splash} />
        <Route exact path="/Home" component={Home} />

        {/* FIRST SCREEN */}
        <Redirect exact from="/" to="/logo" />

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;