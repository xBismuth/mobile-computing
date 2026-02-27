import { IonPage, IonContent } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './logo.css';
import logo from '/LogoBgremoved.png';

const Logo: React.FC = () => {
  const history = useHistory();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // start fade out
      setTimeout(() => history.replace('/splash'), 800); // navigate after fade
    }, 2500); // show logo 2.5s

    return () => clearTimeout(timer);
  }, [history]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className={`logo-screen ${fadeOut ? 'fade-out' : ''}`}>
          <img src={logo} alt="Logo" />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Logo;