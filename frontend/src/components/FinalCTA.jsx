import React from 'react';
import { Smartphone, ArrowRight, MessageCircle } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Content */}
          <div className="animate-slide-up">
            <h2 className="display-hero mb-6">
              You don't have to do this alone.
            </h2>
            
            <p className="body-large mb-12 opacity-95">
              Join thousands of families taking care of each other, together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button className="btn-primary bg-white text-blue-600 hover:bg-gray-50">
                <Smartphone size={20} />
                Download CareDyad — Free for 30 Days
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Secondary CTA */}
            <div className="animate-slide-up delay-200">
              <a 
                href="https://wa.me/919100856540?text=Hi%20I%20want%20to%20know%20more%20about%20CareDyad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 body-standard font-semibold hover:underline"
              >
                <MessageCircle size={20} />
                Talk to us on WhatsApp
              </a>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid md:grid-cols-3 gap-6 mt-16 animate-slide-up delay-300">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-3xl font-bold mb-2">30 Days</p>
              <p className="body-small opacity-90">Free Trial</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-3xl font-bold mb-2">60 Seconds</p>
              <p className="body-small opacity-90">Quick Setup</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-3xl font-bold mb-2">100%</p>
              <p className="body-small opacity-90">Private & Secure</p>
            </div>
          </div>

          {/* Small Print */}
          <p className="body-small mt-12 opacity-80">
            Available on Android & iOS • No credit card required • Cancel anytime
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20"
           style={{ background: 'var(--secondary-yellow)', transform: 'translate(-30%, 30%)' }}></div>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
           style={{ background: 'var(--secondary-peach)', transform: 'translate(30%, -30%)' }}></div>
    </section>
  );
};

export default FinalCTA;
