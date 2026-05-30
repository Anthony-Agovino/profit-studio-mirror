import { useState } from 'react';
import Header from './components/Header';
import { Suspense, lazy } from 'react';
const Sidebar = lazy(() => import('./components/Sidebar'));
const RoadmapAccordion = lazy(() => import('./components/RoadmapAccordion'));
import './App.css';

const initialFormData = {
  businessName: '',
  businessType: '',
  city: '',
  phone: '',
  mapsLink: '',
  brandStyle: 'professional',
  primaryColor: '#6366f1',
  mainCta: '',
  tagline: '',
  address: '',
  email: '',
  services: '',
  hours: '',
};

function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleFormChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="app">
      <Header
        sidebarOpen={sidebarOpen}
        onMenuToggle={() => setSidebarOpen(prev => !prev)}
      />
      <div className="app__body">
        <Suspense fallback={<div>Loading Sidebar...</div>}>
          <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          />
        </Suspense>
        {sidebarOpen && (
          <div
            className="sidebar-overlay"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <main className="app__main">
          <div className="app__content">
            <Suspense fallback={<div>Loading content...</div>}>
              <RoadmapAccordion
              formData={formData}
              onFormChange={handleFormChange}
              />
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
