import React, { useState } from 'react';
import { Building2, ArrowRight, CheckCircle } from 'lucide-react';

const ForHospitals = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be connected to backend later
    console.log('Hospital partnership inquiry:', email);
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="for-hospitals" className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 md:p-16 card-shadow">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="animate-slide-up">
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                  style={{ background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-purple) 100%)' }}
                >
                  <Building2 size={32} color="white" />
                </div>

                <h2 className="heading-medium mb-4" style={{ color: 'var(--text-primary)' }}>
                  For Healthcare Providers
                </h2>

                <p className="body-large mb-6" style={{ color: 'var(--text-secondary)' }}>
                  Are you a hospital or clinic? Partner with us to support your patients' families after discharge.
                </p>

                <p className="body-standard mb-8" style={{ color: 'var(--text-secondary)' }}>
                  CareDyad gives you visibility into your patient's home health between appointments — logged by the people who see them every day.
                </p>

                {/* Benefits List */}
                <ul className="space-y-3 mb-8">
                  {[
                    "Real-time patient data from home caregivers",
                    "Reduced readmission rates",
                    "Better post-discharge outcomes",
                    "Seamless care coordination"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} style={{ color: 'var(--secondary-green)', marginTop: '2px' }} />
                      <span className="body-standard" style={{ color: 'var(--text-secondary)' }}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Form */}
              <div className="animate-slide-up delay-200">
                <div className="bg-white rounded-2xl p-8 card-shadow">
                  <h3 className="heading-small mb-2" style={{ color: 'var(--text-primary)' }}>
                    Learn About Hospital Partnerships
                  </h3>
                  <p className="body-small mb-6" style={{ color: 'var(--text-muted)' }}>
                    Get in touch to explore how CareDyad can support your patients and their families.
                  </p>

                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-input"
                      />
                      
                      <button 
                        type="submit"
                        className="btn-primary w-full"
                      >
                        Request Partnership Info
                        <ArrowRight size={20} />
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <div 
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                        style={{ backgroundColor: 'var(--secondary-green)', opacity: 0.2 }}
                      >
                        <CheckCircle size={32} style={{ color: 'var(--secondary-green)' }} />
                      </div>
                      <p className="body-standard font-semibold" style={{ color: 'var(--text-primary)' }}>
                        Thank you! We'll be in touch soon.
                      </p>
                    </div>
                  )}

                  <p className="body-small text-center mt-4" style={{ color: 'var(--text-muted)' }}>
                    Or email us at{' '}
                    <a 
                      href="mailto:partnerships@dyadic.health"
                      className="font-semibold"
                      style={{ color: 'var(--primary-blue)' }}
                    >
                      partnerships@dyadic.health
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForHospitals;
