import React, { createContext, useContext, useState } from 'react';
import teams from './theme';


interface ThemeContextType {
  teams: typeof teams;
  selectedTheme: typeof teams[0];
  setSelectedTheme: (theme: typeof teams[0]) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(teams[0]); // Default to the first team

  return (
    <ThemeContext.Provider value={{ teams, selectedTheme, setSelectedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};