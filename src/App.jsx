import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RoadmapAccordion from './components/RoadmapAccordion';
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
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        {sidebarOpen && (
          <div
            className="sidebar-overlay"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <main className="app__main">
          <div className="app__content">
            <RoadmapAccordion
              formData={formData}
              onFormChange={handleFormChange}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
