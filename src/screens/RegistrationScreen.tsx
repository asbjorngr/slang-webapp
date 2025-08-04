import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationScreen: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    participant1Name: '',
    participant1BirthDate: '',
    participant1Email: '',
    participant2Name: '',
    participant2BirthDate: '',
    participant2Email: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Netlify form submission
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('form-name', 'slang-registration');
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSubmit.append(key, value);
      });

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSubmit as any).toString()
      });

      navigate('/final');
    } catch (error) {
      console.error('Form submission error:', error);
      // Still navigate to final screen even if form submission fails
      navigate('/final');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: 'var(--space-sm)',
    border: 'none',
    borderRadius: 'var(--radius-md)',
    background: 'var(--color-accent)',
    fontSize: '1rem',
    fontFamily: 'var(--font-body)',
    boxSizing: 'border-box' as const,
    outline: 'none',
    transition: 'all 0.2s ease'
  };

  const dateInputStyle = {
    ...inputStyle,
    colorScheme: 'light',
    WebkitAppearance: 'none' as const,
    MozAppearance: 'textfield' as const
  };

  // Get today's date for max constraint (people shouldn't be born in the future)
  const today = new Date().toISOString().split('T')[0];
  // Set a reasonable min date (100 years ago)
  const minDate = new Date(new Date().getFullYear() - 100, 0, 1).toISOString().split('T')[0];

  return (
    <div className="screen-container">
      <div className="screen-header">
        <span className="back-button" onClick={() => navigate(-1)}>&larr;</span>
      </div>

      <div className="screen-content" style={{ justifyContent: 'flex-start', paddingTop: 'calc(var(--header-height) + var(--space-lg))', paddingBottom: 'calc(var(--footer-height) + var(--space-lg))' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }} className="content-animate">
          <h1 style={{ marginBottom: 'var(--space-xs)' }}>Registrering</h1>
          <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.4' }}>
            Legg inn kontaktinfo for<br />godtgjørelse
          </p>
        </div>

        <form 
          name="slang-registration" 
          method="POST" 
          data-netlify="true" 
          onSubmit={handleSubmit} 
          style={{ width: '100%', maxWidth: '340px', display: 'flex', flexDirection: 'column', flex: 1 }}
          className="stagger-animate"
        >
          <input type="hidden" name="form-name" value="slang-registration" />
          
          {/* Deltaker 1 Section */}
          <div style={{ marginBottom: 'var(--space-xl)' }}>
            <h3 style={{ 
              fontSize: '1.2rem', 
              marginBottom: 'var(--space-lg)', 
              fontWeight: 'normal',
              color: '#333',
              fontFamily: 'var(--font-heading)'
            }}>
              Deltaker 1
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <input
                type="text"
                name="participant1Name"
                placeholder="Navn"
                value={formData.participant1Name}
                onChange={(e) => handleInputChange('participant1Name', e.target.value)}
                required
                style={inputStyle}
              />
              
              <input
                type="date"
                name="participant1BirthDate"
                placeholder="Fødselsdato"
                value={formData.participant1BirthDate}
                onChange={(e) => handleInputChange('participant1BirthDate', e.target.value)}
                min={minDate}
                max={today}
                required
                style={dateInputStyle}
              />
              
              <input
                type="email"
                name="participant1Email"
                placeholder="E-postadresse"
                value={formData.participant1Email}
                onChange={(e) => handleInputChange('participant1Email', e.target.value)}
                required
                style={inputStyle}
              />
            </div>
          </div>

          {/* Deltaker 2 Section */}
          <div style={{ marginBottom: 'var(--space-xl)' }}>
            <h3 style={{ 
              fontSize: '1.2rem', 
              marginBottom: 'var(--space-lg)', 
              fontWeight: 'normal',
              color: '#333',
              fontFamily: 'var(--font-heading)'
            }}>
              Deltaker 2
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <input
                type="text"
                name="participant2Name"
                placeholder="Navn"
                value={formData.participant2Name}
                onChange={(e) => handleInputChange('participant2Name', e.target.value)}
                required
                style={inputStyle}
              />
              
              <input
                type="date"
                name="participant2BirthDate"
                placeholder="Fødselsdato"
                value={formData.participant2BirthDate}
                onChange={(e) => handleInputChange('participant2BirthDate', e.target.value)}
                min={minDate}
                max={today}
                required
                style={dateInputStyle}
              />
              
              <input
                type="email"
                name="participant2Email"
                placeholder="E-postadresse"
                value={formData.participant2Email}
                onChange={(e) => handleInputChange('participant2Email', e.target.value)}
                required
                style={inputStyle}
              />
            </div>
          </div>

          {/* Submit button at bottom of form */}
          <div style={{ marginTop: 'auto', paddingTop: 'var(--space-lg)' }}>
            <button type="submit" style={{ width: '100%', maxWidth: '340px' }}>
              Send inn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationScreen; 