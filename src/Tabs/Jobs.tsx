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
import { filterOutline, heartOutline, locationOutline, timeOutline } from 'ionicons/icons';
import './Jobs.css';

const Jobs: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Jobs</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="jobs-content">

        {/* Search Bar */}
        <div className="search-container">
          <IonSearchbar
            placeholder="Search jobs, companies..."
            className="custom-searchbar"
          />
          <IonButton fill="clear" className="filter-btn">
            <IonIcon icon={filterOutline} />
          </IonButton>
        </div>

        {/* Filters */}
        <div className="filters">
          <IonChip color="primary" className="active-chip">All Jobs</IonChip>
          <IonChip>Full-time</IonChip>
          <IonChip>Part-time</IonChip>
          <IonChip>Nearby</IonChip>
        </div>

        {/* Latest Opportunities */}
        <div className="section-header">
          <h2>Latest Opportunities</h2>
          <span className="see-all">See all</span>
        </div>

        {/* Job Cards List */}
        <div className="job-list">

          {/* Job Card 1 */}
          <div className="job-card">
            <div className="job-header">
              <div className="company-logo">
                <div className="logo-bg">C</div>
              </div>
              <div className="job-title-section">
                <h3>Barista</h3>
                <p className="company-name">Café Delight</p>
              </div>
              <IonIcon icon={heartOutline} className="save-icon" />
            </div>

            <div className="job-details">
              <div className="detail-item">
                <IonIcon icon={locationOutline} />
                <span>Quezon City</span>
              </div>
              <div className="detail-item">
                <span>₱15,000 - ₱18,000</span>
              </div>
              <div className="detail-item">
                <IonIcon icon={timeOutline} />
                <span>2 hours ago</span>
              </div>
            </div>

            <div className="job-footer">
              <span className="job-type">Full-time</span>
              <IonButton fill="clear" className="quick-apply-btn">
                Quick Apply
              </IonButton>
            </div>
          </div>

          {/* Job Card 2 */}
          <div className="job-card">
            <div className="job-header">
              <div className="company-logo">
                <div className="logo-bg">Q</div>
              </div>
              <div className="job-title-section">
                <h3>Delivery Rider</h3>
                <p className="company-name">QuickDeliver</p>
              </div>
              <IonIcon icon={heartOutline} className="save-icon" />
            </div>

            <div className="job-details">
              <div className="detail-item">
                <IonIcon icon={locationOutline} />
                <span>Manila</span>
              </div>
              <div className="detail-item">
                <span>₱20,000 - ₱25,000</span>
              </div>
              <div className="detail-item">
                <IonIcon icon={timeOutline} />
                <span>5 hours ago</span>
              </div>
            </div>

            <div className="job-footer">
              <span className="job-type">Full-time</span>
              <IonButton fill="clear" className="quick-apply-btn">
                Quick Apply
              </IonButton>
            </div>
          </div>

          {/* Add more job cards as needed */}

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Jobs;