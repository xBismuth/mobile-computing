import { IonPage, IonContent } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { supabase } from '../supabaseClient'; // Ensure this path is correct
import './splashScreen.css';
import logo from '../assets/Logo.png';

const Splash: React.FC = () => {
  const history = useHistory();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const checkAuthAndNavigate = async () => {
      // 1. Check if user is logged in
      const { data: { session } } = await supabase.auth.getSession();

      // 2. Wait for the splash animation (3 seconds)
      setTimeout(() => {
        setFadeOut(true); // Trigger the fade out animation
        
        // 3. Navigate based on session status after fade starts
        setTimeout(() => {
          if (session) {
            history.replace('/tabs/home'); // Go to Home if logged in
          } else {
            history.replace('/tabs/login'); // Go to Login if not
          }
        }, 250); // Match your fade duration
      }, 3000);
    };

    checkAuthAndNavigate();

  }, [history]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className={`logo-screen splash-screen ${fadeOut ? 'fade-out' : ''}`}>
          <img src={logo} alt="Logo" style={{ width: '300px', height: 'auto' }} />
          <h1>Welcome to Job Bridge</h1>
          <p>Connecting you to the future...</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Splash;