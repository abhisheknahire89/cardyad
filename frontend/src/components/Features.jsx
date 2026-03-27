import React from 'react';
import { Brain, Heart, Mic, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Smart Care Plans",
    description: "Condition-specific medication tracking, reminders, and symptom logging tailored to your loved one's needs.",
    gradient: "linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-purple) 100%)",
    iconBg: "var(--primary-blue)"
  },
  {
    icon: Heart,
    title: "Mood Check-ins",
    description: "Because your emotional health matters too. Track how you're feeling and discover what helps you stay balanced.",
    gradient: "linear-gradient(135deg, var(--primary-orange) 0%, var(--secondary-peach) 100%)",
    iconBg: "var(--primary-orange)"
  },
  {
    icon: Mic,
    title: "Voice Notes",
    description: "Too busy to type? Record care updates in seconds. We'll organize them for you and your doctor.",
    gradient: "linear-gradient(135deg, var(--secondary-green) 0%, var(--secondary-yellow) 100%)",
    iconBg: "var(--secondary-green)"
  },
  {
    icon: Users,
    title: "Care Network",
    description: "Invite co-caregivers and connect with the doctor. Everyone stays informed. Share the load.",
    gradient: "linear-gradient(135deg, var(--secondary-purple) 0%, var(--primary-blue) 100%)",
    iconBg: "var(--secondary-purple)"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="heading-large mb-4" style={{ color: 'var(--text-primary)' }}>
            Features That Actually Help
          </h2>
          <p className="body-large" style={{ 
            color: 'var(--text-secondary)', 
            maxWidth: '700px', 
            margin: '0 auto' 
          }}>
            Built for busy caregivers who need tools that work in the real world, not just in theory.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`card-shadow rounded-3xl p-8 bg-white hover-lift animate-slide-up delay-${(index + 1) * 100}`}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              {/* Background gradient accent */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20"
                style={{ background: feature.gradient, transform: 'translate(30%, -30%)' }}
              ></div>

              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                style={{ backgroundColor: `${feature.iconBg}15` }}
              >
                <feature.icon size={32} style={{ color: feature.iconBg }} strokeWidth={2} />
              </div>

              {/* Content */}
              <h3 className="heading-small mb-3 relative z-10" style={{ color: 'var(--text-primary)' }}>
                {feature.title}
              </h3>
              <p className="body-standard relative z-10" style={{ color: 'var(--text-secondary)' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16 animate-slide-up delay-500">
          <p className="body-standard" style={{ color: 'var(--text-muted)' }}>
            All features work offline and sync when you're back online.<br />
            Your data stays private and encrypted.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
