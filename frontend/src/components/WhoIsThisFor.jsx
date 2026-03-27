import React from 'react';
import { Heart, Stethoscope, Users } from 'lucide-react';

const personas = [
  {
    icon: Heart,
    title: "The daughter managing her father's diabetes",
    subtitle: "from across the city",
    image: "https://images.unsplash.com/photo-1589169011402-8b2cbd1ee593",
    color: "var(--secondary-peach)"
  },
  {
    icon: Stethoscope,
    title: "The son coordinating his mother's",
    subtitle: "post-surgery recovery",
    image: "https://images.unsplash.com/photo-1633891119630-cb3665df5b7d",
    color: "var(--primary-blue)"
  },
  {
    icon: Users,
    title: "The spouse keeping track of medications,",
    subtitle: "meals, and moods every single day",
    image: "https://images.pexels.com/photos/9345676/pexels-photo-9345676.jpeg",
    color: "var(--secondary-green)"
  }
];

const WhoIsThisFor = () => {
  return (
    <section id="who-is-this-for" className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="heading-large mb-6" style={{ color: 'var(--text-primary)' }}>
            Who Is This For?
          </h2>
        </div>

        {/* Persona Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {personas.map((persona, index) => (
            <div 
              key={index}
              className={`card-shadow rounded-3xl overflow-hidden bg-white hover-lift animate-slide-up delay-${(index + 1) * 100}`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={persona.image}
                  alt={persona.title}
                  className="w-full h-full object-cover hover-scale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Icon Badge */}
                <div 
                  className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: persona.color }}
                >
                  <persona.icon size={24} color="white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="heading-small mb-2" style={{ color: 'var(--text-primary)' }}>
                  {persona.title}
                </h3>
                <p className="body-standard" style={{ color: 'var(--text-secondary)' }}>
                  {persona.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Line */}
        <div className="text-center animate-slide-up delay-400">
          <p className="body-large" style={{ 
            color: 'var(--text-primary)',
            maxWidth: '800px',
            margin: '0 auto',
            fontWeight: 500
          }}>
            If you've ever carried someone's health in your head — <span style={{ color: 'var(--primary-orange)' }}>this is for you.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisFor;
