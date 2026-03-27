import React from 'react';
import { Shield, Users, Award, BookOpen } from 'lucide-react';

const trustPoints = [
  {
    icon: Users,
    text: "Built with caregivers and doctors in Hyderabad"
  },
  {
    icon: Shield,
    text: "Your health data is encrypted and never shared without consent"
  },
  {
    icon: Award,
    text: "Backed by research in dyadic health and relational care"
  }
];

const SocialProof = () => {
  return (
    <section id="social-proof" className="py-20" style={{ background: 'var(--bg-light)' }}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Trust Badges */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {trustPoints.map((point, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-6 card-shadow text-center animate-slide-up delay-${(index + 1) * 100}`}
              >
                <div 
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4"
                  style={{ backgroundColor: 'var(--primary-blue)', opacity: 0.1 }}
                >
                  <point.icon size={28} style={{ color: 'var(--primary-blue)' }} />
                </div>
                <p className="body-small font-medium" style={{ color: 'var(--text-primary)' }}>
                  {point.text}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-white rounded-3xl p-12 card-shadow animate-slide-up delay-400 relative overflow-hidden">
            {/* Decorative quote mark */}
            <div 
              className="absolute top-6 left-6 text-8xl opacity-10 font-serif"
              style={{ color: 'var(--primary-orange)' }}
            >
              "
            </div>

            {/* Testimonial content */}
            <div className="relative z-10">
              <p className="body-large mb-6 italic" style={{ 
                color: 'var(--text-primary)',
                lineHeight: 1.7 
              }}>
                "I used to lie awake wondering if Appa took his night tablet. Now I just check the app."
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full" style={{ 
                  background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-orange) 100%)' 
                }}></div>
                <div>
                  <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                    Priya R.
                  </p>
                  <p className="body-small" style={{ color: 'var(--text-muted)' }}>
                    Daughter & Caregiver, Hyderabad
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative gradient orb */}
            <div 
              className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20"
              style={{ background: 'linear-gradient(135deg, var(--primary-orange) 0%, var(--secondary-yellow) 100%)' }}
            ></div>
          </div>

          {/* Research Link */}
          <div className="text-center mt-12 animate-slide-up delay-500">
            <a 
              href="#research"
              className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-4 card-shadow hover-lift"
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--secondary-green)', opacity: 0.2 }}
              >
                <BookOpen size={20} style={{ color: 'var(--secondary-green)' }} />
              </div>
              <span className="body-standard font-semibold" style={{ color: 'var(--text-primary)' }}>
                Read the research behind our approach
              </span>
              <span style={{ color: 'var(--primary-blue)' }}>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
