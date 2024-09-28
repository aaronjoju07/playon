// ThemeSelector.tsx

import React from 'react';
import { useTheme } from './ThemeContext';


const ThemeSelector: React.FC = () => {
  const { teams, selectedTheme, setSelectedTheme } = useTheme();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTeam = teams.find(team => team.name === event.target.value);
    if (selectedTeam) {
      setSelectedTheme(selectedTeam);
    }
  };

  return (
    <select value={selectedTheme.name} onChange={handleChange}>
      {teams.map((team) => (
        <option key={team.name} value={team.name}>
          {team.name}
        </option>
      ))}
    </select>
  );
};

export default ThemeSelector;