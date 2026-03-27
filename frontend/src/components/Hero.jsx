import React from 'react';
import { ArrowRight, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="gradient-hero min-h-screen flex items-center relative overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white animate-slide-up">
            <h1 className="display-hero mb-6">
              Care for the one who Cares.
            </h1>
            
            <p className="body-large mb-8 opacity-95">
              When someone you love is managing a health condition, the whole family carries the weight. CareDyad helps you track their health, stay in sync with their doctor, and take care of yourself too.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button className="btn-primary bg-white text-blue-600 hover:bg-gray-50">
                <Smartphone size={20} />
                Start Your Free Care Plan
                <ArrowRight size={20} />
              </button>
            </div>

            <p className="body-small opacity-80 flex items-center gap-2">
              <Smartphone size={16} />
              Available on Android & iOS
            </p>
          </div>

          {/* Right Image */}
          <div className="animate-slide-up delay-200">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1680759291255-f009988333cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwyfHxJbmRpYW4lMjBmYW1pbHklMjBlbGRlcmx5JTIwY2FyZXxlbnwwfHx8fDE3NzQ1ODYxMjV8MA&ixlib=rb-4.1.0&q=85"
                alt="Indian family caregiving moment"
                className="w-full h-auto object-cover"
              />
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
