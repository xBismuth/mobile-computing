import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonButton,
  IonIcon,
  IonChip,
} from '@ionic/react';
import { notificationsOutline, filterOutline, heartOutline, locationOutline, timeOutline } from 'ionicons/icons';
import './SeekerHome.css';

const SeekerHome: React.FC = () => {
  const userName = "Jayve";   // Later: fetch from user data

  return (
    <IonPage>
      <IonHeader class="seeker-home-header">
        <IonToolbar>
          <div className="seeker-header-content seeker-home-header">
            <div>
              <h1 className="seeker-greeting">Hi, {userName}!</h1>
              <p className="seeker-sub-greeting">Find your next opportunity 👋</p>
            </div>
            <IonButton fill="clear" className="seeker-notification-btn">
              <IonIcon icon={notificationsOutline} size="large" />
            </IonButton>
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="seeker-home-content">
        {/* Search Bar */}
        <div className="seeker-search-container" style={{ paddingTop: '20px' }}>
          <IonSearchbar
            placeholder="Search jobs, companies..."
            className="seeker-custom-searchbar"
          />
          <IonButton fill="clear" className="seeker-filter-btn">
            <IonIcon icon={filterOutline} />
          </IonButton>
        </div>

        {/* Filters */}
        <div className="seeker-filters">
          <IonChip color="primary" className="seeker-active-chip">
            All Jobs
          </IonChip>
          <IonChip>Full-time</IonChip>
          <IonChip>Part-time</IonChip>
          <IonChip>Nearby</IonChip>
        </div>

        {/* Latest Opportunities */}
        <div className="seeker-section-header">
          <h2>Saved Opportunities</h2>
          <span className="seeker-see-all">See all</span>
        </div>

        {/* Job Cards */}
        <div className="seeker-job-list">
          {/* Job Card 1 */}
          <div className="seeker-job-card">
            <div className="seeker-company-logo">
              <div className="seeker-logo-circle">C</div>
            </div>

            <div className="seeker-job-info">
              <h3>Barista</h3>
              <p className="seeker-company-name">Café Delight</p>
            </div>
            <IonIcon icon={heartOutline} className="seeker-save-icon" />
            <br />

            <div className="seeker-job-info2">
              <div className="seeker-job-meta">
                <span>📍Quezon City</span>
                <span>💲₱700 / day</span>
                <span>🕒2 hours</span>
              </div>
              <div className="seeker-job-tags">
                <span className="seeker-tag">Full-time</span>
                <IonButton fill="clear" className="seeker-quick-apply">Quick Apply</IonButton>
              </div>
            </div>

          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SeekerHome;