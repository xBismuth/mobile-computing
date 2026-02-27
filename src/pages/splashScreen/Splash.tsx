import { IonPage, IonContent } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './splash.css';

const Splash: React.FC = () => {
  const history = useHistory();
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const inTimer = setTimeout(() => setFadeIn(true), 50); // small delay to trigger fade in
    const outTimer = setTimeout(() => setFadeOut(true), 3050); // fade out after ~3s
    const homeTimer = setTimeout(() => history.replace('/home'), 3850); // navigate after fade

    return () => {
      clearTimeout(inTimer);
      clearTimeout(outTimer);
      clearTimeout(homeTimer);
    };
  }, [history]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className={`splash-screen ${fadeIn ? 'fade-in' : ''} ${fadeOut ? 'fade-out' : ''}`}>
          <h1>Welcome to Our App</h1>
          <p>Loading amazing things...</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Splash;