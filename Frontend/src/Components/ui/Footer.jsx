import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-4 text-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()} PolluTech. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
