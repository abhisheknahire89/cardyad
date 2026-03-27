import React from 'react';
import { HeartCrack, Shield, Sparkles } from 'lucide-react';

const TheProblem = () => {
  return (
    <section id="the-problem" className="py-20" style={{ background: 'var(--bg-light)' }}>
      <div className="container-narrow">
        {/* Main Content */}
        <div className="text-center animate-slide-up">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8" 
               style={{ background: 'linear-gradient(135deg, var(--secondary-peach) 0%, var(--primary-orange) 100%)' }}>
            <HeartCrack size={40} color="white" />
          </div>

          <h2 className="heading-large mb-8" style={{ color: 'var(--text-primary)' }}>
            Healthcare treats the patient.<br />
            <span style={{ color: 'var(--primary-orange)' }}>Nobody supports the person holding it all together.</span>
          </h2>

          <div className="body-large mb-6" style={{ 
            color: 'var(--text-secondary)',
            lineHeight: 1.8 
          }}>
            <p className="mb-4">
              You remember every tablet. You track every symptom. You translate between the doctor and the family.
            </p>
            <p className="mb-4">
              And at the end of the day, <strong style={{ color: 'var(--text-primary)' }}>nobody asks how YOU are doing.</strong>
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-white rounded-2xl p-8 card-shadow animate-slide-up delay-200">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4"
                   style={{ backgroundColor: 'var(--primary-blue)', opacity: 0.1 }}>
                <Shield size={28} style={{ color: 'var(--primary-blue)' }} />
              </div>
              <h3 className="heading-small mb-3" style={{ color: 'var(--text-primary)' }}>
                Support for You
              </h3>
              <p className="body-standard" style={{ color: 'var(--text-secondary)' }}>
                CareDyad recognizes that caregivers need care too. Track your emotional health alongside their physical health.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 card-shadow animate-slide-up delay-300">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4"
                   style={{ backgroundColor: 'var(--secondary-green)', opacity: 0.1 }}>
                <Sparkles size={28} style={{ color: 'var(--secondary-green)' }} />
              </div>
              <h3 className="heading-small mb-3" style={{ color: 'var(--text-primary)' }}>
                Care That Works
              </h3>
              <p className="body-standard" style={{ color: 'var(--text-secondary)' }}>
                When the caregiver is supported, the patient recovers better. This is the science of relational care.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 animate-slide-up delay-400">
            <h3 className="heading-medium mb-6" style={{ color: 'var(--primary-blue)' }}>
              CareDyad changes that.
            </h3>
            <p className="body-standard" style={{ color: 'var(--text-muted)' }}>
              Built for the whole family, not just the patient.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-6 card-shadow animate-slide-up delay-500 relative">
              <div className="absolute top-4 left-4 text-5xl opacity-10 font-serif" style={{ color: 'var(--primary-orange)' }}>
                "
              </div>
              <p className="body-small italic mb-4 relative z-10" style={{ color: 'var(--text-secondary)' }}>
                "Managing Amma's diabetes alone was overwhelming. Now my brother and I both get reminders, and we can see who's handling what. It's like we're finally a team."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full" style={{ background: 'linear-gradient(135deg, var(--secondary-peach) 0%, var(--primary-orange) 100%)' }}></div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>Anita S.</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Bangalore</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-6 card-shadow animate-slide-up delay-600 relative">
              <div className="absolute top-4 left-4 text-5xl opacity-10 font-serif" style={{ color: 'var(--primary-blue)' }}>
                "
              </div>
              <p className="body-small italic mb-4 relative z-10" style={{ color: 'var(--text-secondary)' }}>
                "The mood check-ins made me realize I wasn't okay. I was so focused on Dad's health, I forgot about my own stress. This app reminded me to breathe."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full" style={{ background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-purple) 100%)' }}></div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>Rahul M.</p>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Mumbai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheProblem;
