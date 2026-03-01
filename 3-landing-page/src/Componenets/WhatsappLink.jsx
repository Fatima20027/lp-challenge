import React from 'react';


const WhatsappLink = ({children}) => {
  const phoneNumber = '212609142109';
  const message = 'Hello! I am interested in your services.';
  const encodedMessage = encodeURIComponent(message);
  const WhatsLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  return (
    <a href={WhatsLink} target="_blank"
      rel="noopener noreferrer">{children}</a>
    
    
  );
};

export default WhatsappLink;
