import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

const RecruiterHome: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Recruiter Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <h1>Welcome, Recruiter!</h1>
        <p>This is your recruiter home page.</p>
        {/* Add recruiter-specific content here later */}
      </IonContent>
    </IonPage>
  );
};

export default RecruiterHome;