import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919100856540?text=Hi%20I%20want%20to%20know%20more%20about%20CareDyad"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} color="white" />
    </a>
  );
};

export default WhatsAppButton;
