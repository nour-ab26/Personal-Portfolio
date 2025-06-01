import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark-bg text-center py-8 border-t border-subtle-grey">
      <p className="text-sm text-light-text">
        Designed & Built by Nour Abid © {currentYear}
      </p>
      {/* You can add social links here too if desired */}
    </footer>
  );
};

export default Footer;