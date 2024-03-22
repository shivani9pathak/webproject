import React from 'react';

function NavigationBar() {
  return (
    <nav className="navbar">
      <a href="/">Home</a>
      <ul>
        <li><a href="/personal-finance">Personal Finance Modules</a></li>
        <li><a href="/tools-calculators">Financial Tools & Calculators</a></li>
        <li><a href="/case-studies">Case Studies & Simulations</a></li>
        <li><a href="/speakers">Guest Speaker Series</a></li>
        <li><a href="/events">Financial Literacy Events</a></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;