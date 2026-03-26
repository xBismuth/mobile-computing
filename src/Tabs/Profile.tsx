import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/react';
import { Logout } from '../components/Logout';
import './Profile.css';

interface ProfileProps {
  onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ onLogout }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">

        {/* Styled Update Profile Button */}
        <div className="update-profile-wrapper">
          <div className="update-profile-btn-container">
            <IonButton
              routerLink="/profile/edit"
              fill="clear"
              className="update-profile-btn"
            >
              Update Profile
            </IonButton>
          </div>
        </div>

        <div className="profile-about-wrapper">
          <div className="profile-about-btn-container">
            <IonButton
              routerLink="/profile/about"
              fill="clear"
              className="profile-about-btn"
            >
              About The App
            </IonButton>
          </div>
        </div>

        <div className="developers-profile-wrapper">
          <div className="developers-profile-btn-container">
            <IonButton
              routerLink="/profile/developers"
              fill="clear"
              className="developers-profile-btn"
            >
              Developers
            </IonButton>
          </div>
        </div>

        {/* Logout Button */}
        <Logout onLogout={onLogout} />

      </IonContent>
    </IonPage>
  );
};

export default Profile;