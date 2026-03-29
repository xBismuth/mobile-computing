import React, { useState, useEffect } from 'react';
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
  IonSpinner,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
} from '@ionic/react';
import { 
  filterOutline, 
  heartOutline, 
} from 'ionicons/icons';
import { supabase } from '../supabaseClient';
import './Jobs.css';

const Jobs: React.FC = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'Full-time' | 'Part-time' | 'nearby'>('all');
  const [userCity, setUserCity] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserCityAndJobs();
  }, []);

  const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    await fetchUserCityAndJobs();
    event.detail.complete();
  };

  useEffect(() => {
    fetchJobs(activeFilter);
  }, [activeFilter]);

  const fetchJobs = async (filter: 'all' | 'Full-time' | 'Part-time' | 'nearby' = 'all') => {
    let query = supabase.from('jobs').select('*');

    if (filter === 'Full-time') {
      query = query.eq('typeJobTime', 'Full-time');
    } else if (filter === 'Part-time') {
      query = query.eq('typeJobTime', 'Part-time');
    }

    const { data: jobData, error } = await query.order('created_at', { ascending: false });
    if (error) {
      console.error('Error fetching jobs:', error);
      setJobs([]);
      setFilteredJobs([]);
      return;
    }

    setJobs(jobData || []);
    setFilteredJobs(jobData || []);
    setLoading(false);
  };

  // Fetch user's city and jobs through DB filter
  const fetchUserCityAndJobs = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    // Get user's city
    const { data: userData } = await supabase
      .from('users')
      .select('city')
      .eq('id', user.id)
      .single();

    if (userData?.city) setUserCity(userData.city);

    // Get jobs list for initial filter
    await fetchJobs(activeFilter);
  };

  // Filter jobs based on search and location
  useEffect(() => {
    let result = jobs;

    // Search filter (passive, live as user types)
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(job =>
        job.position?.toLowerCase().includes(term) ||
        job.company?.toLowerCase().includes(term) ||
        job.location?.toLowerCase().includes(term)
      );
    }

    // Nearby filter (client-side because this depends on userCity)
    if (activeFilter === 'nearby' && userCity) {
      const cityLower = userCity.toLowerCase();
      result = result.filter(job =>
        job.location?.toLowerCase().includes(cityLower) ||
        cityLower.includes(job.location?.toLowerCase() || '')
      );
    }

    setFilteredJobs(result);
  }, [searchTerm, jobs, userCity, activeFilter]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle style={{ textAlign: 'center' }}>All Available Jobs</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="jobs-content">

        {/* Refresh Gesture */}
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <IonSpinner />
          </div>
        ) : (
          <>
        {/* Search Bar */}
        <div className="search-container" style={{ marginTop: '20px' }}>
          <IonSearchbar
            placeholder="Search jobs, companies, location..."
            value={searchTerm}
            onIonInput={e => setSearchTerm(e.detail.value ?? '')}
            className="custom-searchbar"
          />
          <IonButton fill="clear" className="filter-btn">
            <IonIcon icon={filterOutline} />
          </IonButton>
        </div>

        {/* Filters */}
        <div className="filters">
          <IonChip 
            color={activeFilter === 'all' ? "primary" : undefined}
            onClick={() => setActiveFilter('all')}
            className={activeFilter === 'all' ? "active-chip" : ""}
          >
            All Jobs
          </IonChip>
          <IonChip 
            color={activeFilter === 'Full-time' ? "primary" : undefined}
            onClick={() => setActiveFilter('Full-time')}
            className={activeFilter === 'Full-time' ? "active-chip" : ""}
          >
            Full-time
          </IonChip>
          <IonChip 
            color={activeFilter === 'Part-time' ? "primary" : undefined}
            onClick={() => setActiveFilter('Part-time')}
            className={activeFilter === 'Part-time' ? "active-chip" : ""}
          >
            Part-time
          </IonChip>
          <IonChip 
            color={activeFilter === 'nearby' ? "primary" : undefined}
            onClick={() => setActiveFilter('nearby')}
            className={activeFilter === 'nearby' ? "active-chip" : ""}
          >
            Nearby
          </IonChip>
        </div>

        {/* Job List */}
        <div className="job-list">
          {filteredJobs.length === 0 ? (
            <p style={{ textAlign: 'center', padding: '40px 20px', color: '#64748b' }}>
              No jobs found.
            </p>
          ) : (
            filteredJobs.map((job) => (
            <div key={job.job_id} className="job-card">
                <div className="company-logo">
                  <div className="logo-circle">
                    {job.company?.charAt(0) || 'J'}
                  </div>
                </div>

              <div className="job-info">
                <h3>{job.position}</h3>
                <span className="company-name">{job.company}</span>
              </div>
              <IonIcon icon={heartOutline} className="save-icon" />

              <div className="recruiter-job-info2">
                  <div className="recruiter-job-meta">
                    <span>📍 {job.location || 'Not specified'}</span>
                    <span>💲 {job.salary + ' / day' || 'Salary not specified'}</span>
                    <span>🕒 {new Date(job.created_at).toLocaleDateString()}</span>
                  </div>
                  <div className="recruiter-job-tags">
                    <span className="recruiter-tag">{job.typeJobTime}</span>
                    <IonButton fill="clear" className="seeker-quick-apply">Quick Apply</IonButton>
                  </div>
                </div>
            </div>
            ))
          )}
        </div>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Jobs;