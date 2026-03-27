import React from 'react';
import {
  IonContent,
  IonPage,
  IonSearchbar,
  IonButton,
  IonIcon,
  IonChip,
  IonHeader,
  IonToolbar,
  IonTitle
} from '@ionic/react';
import { 
  filterOutline, 
  heartOutline, 
} from 'ionicons/icons';
import './Jobs.css';

const Jobs: React.FC = () => {
  return (
    <IonPage>
       <IonHeader>
          <IonToolbar class="jobs-header">
              <IonTitle style={{ textAlign: 'center' }}>All Available Jobs</IonTitle>
          </IonToolbar>
        </IonHeader>

      <IonContent fullscreen className="home-content">

        {/* Search Bar */}
        <div className="search-container" style={{ paddingTop: '20px' }}>
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
            <div className="company-logo">
              <div className="logo-circle">C</div>
            </div>
            <div className="job-info">
              <h3>Barista</h3>
              <p className="company-name">Café Delight</p>
              <div className="job-meta">
                <span>📍 Quezon City</span>
                <span>₱15,000 - ₱18,000</span>
                <span>🕒 2 hours ago</span>
              </div>
              <div className="job-tags">
                <span className="tag">Full-time</span>
                <IonButton fill="clear" className="quick-apply">Quick Apply</IonButton>
              </div>
            </div>
            <IonIcon icon={heartOutline} className="save-icon" />
          </div>

          {/* Job Card 2 */}
          <div className="job-card">
            <div className="company-logo">
              <div className="logo-circle">Q</div>
            </div>
            <div className="job-info">
              <h3>Delivery Rider</h3>
              <p className="company-name">QuickDeliver</p>
              <div className="job-meta">
                <span>📍 Manila</span>
                <span>₱20,000 - ₱25,000</span>
                <span>🕒 5 hours ago</span>
              </div>
              <div className="job-tags">
                <span className="tag">Full-time</span>
                <IonButton fill="clear" className="quick-apply">Quick Apply</IonButton>
              </div>
            </div>
            <IonIcon icon={heartOutline} className="save-icon" />
          </div>

          {/* Job Card 3 */}
          <div className="job-card">
            <div className="company-logo">
              <div className="logo-circle">T</div>
            </div>
            <div className="job-info">
              <h3>Sales Associate</h3>
              <p className="company-name">TechHub Store</p>
              <div className="job-meta">
                <span>📍 Makati</span>
                <span>₱16,000 - ₱20,000</span>
                <span>🕒 1 day ago</span>
              </div>
              <div className="job-tags">
                <span className="tag">Full-time</span>
                <IonButton fill="clear" className="quick-apply">Quick Apply</IonButton>
              </div>
            </div>
            <IonIcon icon={heartOutline} className="save-icon" />
          </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Jobs;