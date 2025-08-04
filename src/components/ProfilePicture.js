// Place your profile picture in the public/ directory, e.g., public/profile.jpg
// You can replace the image path below with your actual image file.

import React from 'react';

const ProfilePicture = () => (
  <div className="relative mx-auto mb-8 flex justify-center">
    <img
      src="/shahoud.jpeg"
      alt="Profile portrait of Data Scientist & AI Engineer"
      className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-lavender-400 shadow-xl object-cover bg-gray-800/60 hover:scale-105 hover:shadow-lavender-400/40 transition-transform duration-500 animate-glow"
      style={{ filter: 'drop-shadow(0 0 24px #a78bfa88)' }}
      loading="eager"
    />
    {/* Optional: Add a subtle AI/futuristic overlay or SVG here for extra effect */}
  </div>
);

export default ProfilePicture;
