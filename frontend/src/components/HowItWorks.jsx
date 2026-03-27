import React from 'react';
import { UserPlus, Activity, Users2, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Tell us who you're caring for",
    description: "Add their name, condition, and medications in under 60 seconds. We build a personalized care plan.",
    features: [
      "Quick setup process",
      "Personalized care recommendations",
      "Condition-specific tracking"
    ],
    color: "var(--primary-blue)"
  },
  {
    number: "02",
    icon: Activity,
    title: "Track care together",
    description: "Daily medication reminders, symptom logging, and activity tracking. Completable in 30 seconds.",
    features: [
      "Smart medication reminders",
      "One-tap symptom logging",
      "Activity & mood tracking"
    ],
    color: "var(--secondary-green)"
  },
  {
    number: "03",
    icon: Users2,
    title: "Stay connected",
    description: "Your care logs create weekly health summaries for the doctor. Co-caregivers stay in the loop. Nobody carries it alone.",
    features: [
      "Weekly health summaries",
      "Share with doctors easily",
      "Coordinate with family"
    ],
    color: "var(--primary-orange)"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="heading-large mb-4" style={{ color: 'var(--text-primary)' }}>
            How It Works
          </h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Simple, powerful, and designed for real families managing real health challenges.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row gap-8 items-start animate-slide-up delay-${(index + 1) * 100}`}
            >
              {/* Icon & Number */}
              <div className="flex-shrink-0">
                <div 
                  className="relative w-24 h-24 rounded-2xl flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}dd 100%)`,
                    boxShadow: `0 10px 30px ${step.color}33`
                  }}
                >
                  <step.icon size={40} color="white" strokeWidth={2} />
                  <div 
                    className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="heading-small mb-3" style={{ color: 'var(--text-primary)' }}>
                  {step.title}
                </h3>
                <p className="body-standard mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {step.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {step.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <CheckCircle size={20} style={{ color: step.color, marginTop: '2px' }} />
                      <span className="body-small" style={{ color: 'var(--text-secondary)' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Connector (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-12 mt-32 w-0.5 h-20 opacity-20"
                     style={{ backgroundColor: step.color }}></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up delay-400">
          <button className="btn-primary">
            Get Started in 60 Seconds
          </button>
          <p className="body-small mt-4" style={{ color: 'var(--text-muted)' }}>
            Free for 30 days • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
