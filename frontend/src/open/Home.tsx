// Home.tsx

import React from 'react';
import ThemeSelector from '../Theme/ThemeSelector';
import { useTheme } from '../Theme/ThemeContext';

const Home: React.FC = () => {
  const { selectedTheme } = useTheme();

  return (
    <div style={{ backgroundColor: selectedTheme.primaryColor, color: selectedTheme.textColor, padding: '20px' }}>
      <h1>Football Teams</h1>
      <ThemeSelector />
      <div style={{ marginTop: '20px' }}>
        <h2>{selectedTheme.name}</h2>
        <p>Primary Color: {selectedTheme.primaryColor}</p>
        <p>Secondary Color: {selectedTheme.secondaryColor}</p>
      </div>
    </div>
  );
};

export default Home;