import React from 'react';
import blogLogo from '../assets/images/blog-logo.png'; 

function Logo({ width = '100px' }) {
  return (
    <div 
      className="inline-block p-6S text-center"
      style={{ width: width }}
    >
      <img
        src={blogLogo}
        alt="Blog Logo"
        className="w-full h-auto object-contain"
      />
    </div>
  );
}

export default Logo;
