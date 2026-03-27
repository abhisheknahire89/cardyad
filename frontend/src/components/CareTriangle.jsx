import React from 'react';

const CareTriangle = () => {
  return (
    <section id="care-triangle" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual Side */}
            <div className="animate-slide-up">
              <div className="relative">
                {/* Triangle SVG */}
                <svg viewBox="0 0 400 350" className="w-full h-auto">
                  {/* Triangle with gradient stroke */}
                  <defs>
                    <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: 'var(--primary-blue)', stopOpacity: 1 }} />
                      <stop offset="50%" style={{ stopColor: 'var(--secondary-green)', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: 'var(--primary-orange)', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  
                  {/* Triangle */}
                  <path 
                    d="M 200 40 L 340 280 L 60 280 Z" 
                    fill="none" 
                    stroke="url(#triangleGradient)" 
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                  
                  {/* Connecting lines */}
                  <line x1="200" y1="40" x2="200" y2="280" stroke="url(#triangleGradient)" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                  <line x1="200" y1="40" x2="340" y2="280" stroke="url(#triangleGradient)" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                  <line x1="340" y1="280" x2="60" y2="280" stroke="url(#triangleGradient)" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />

                  {/* Patient (Top) */}
                  <circle cx="200" cy="40" r="50" fill="var(--primary-blue)" opacity="0.9" />
                  <text x="200" y="48" textAnchor="middle" fill="white" fontSize="16" fontWeight="600" fontFamily="Poppins">Patient</text>

                  {/* Caregiver (Bottom Right) */}
                  <circle cx="340" cy="280" r="50" fill="var(--primary-orange)" opacity="0.9" />
                  <text x="340" y="288" textAnchor="middle" fill="white" fontSize="16" fontWeight="600" fontFamily="Poppins">Caregiver</text>

                  {/* Doctor (Bottom Left) */}
                  <circle cx="60" cy="280" r="50" fill="var(--secondary-green)" opacity="0.9" />
                  <text x="60" y="288" textAnchor="middle" fill="white" fontSize="16" fontWeight="600" fontFamily="Poppins">Doctor</text>

                  {/* Center connection point */}
                  <circle cx="200" cy="200" r="8" fill="var(--secondary-yellow)" />
                </svg>
              </div>
            </div>

            {/* Content Side */}
            <div className="animate-slide-up delay-200">
              <h2 className="heading-large mb-6" style={{ color: 'var(--text-primary)' }}>
                The Care Triangle
              </h2>
              
              <p className="body-large mb-6" style={{ color: 'var(--text-secondary)' }}>
                Most apps treat the patient. We support the whole care relationship — because when the caregiver is supported, the patient recovers better.
              </p>

              <p className="body-standard mb-8" style={{ color: 'var(--text-secondary)' }}>
                This is the science of <strong style={{ color: 'var(--primary-blue)' }}>dyadic health</strong> — recognizing that health outcomes depend on the relationships and support systems around the patient, not just the patient alone.
              </p>

              {/* Three Connected Points */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full mt-2" style={{ backgroundColor: 'var(--primary-blue)' }}></div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Patient gets better care</h4>
                    <p className="body-small" style={{ color: 'var(--text-secondary)' }}>Consistent tracking, timely interventions, family coordination</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full mt-2" style={{ backgroundColor: 'var(--primary-orange)' }}></div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Caregiver stays supported</h4>
                    <p className="body-small" style={{ color: 'var(--text-secondary)' }}>Emotional check-ins, shared responsibility, clear visibility</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full mt-2" style={{ backgroundColor: 'var(--secondary-green)' }}></div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Doctor has visibility</h4>
                    <p className="body-small" style={{ color: 'var(--text-secondary)' }}>Real data from home, not just appointment snapshots</p>
                  </div>
                </div>
              </div>

              <a 
                href="#research" 
                className="inline-flex items-center gap-2 body-small font-semibold hover:underline"
                style={{ color: 'var(--primary-blue)' }}
              >
                Read the research behind our approach →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareTriangle;
