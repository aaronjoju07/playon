// App.tsx

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './open/Home';
import Profile from './user/profile';
import Auth from './user/Auth';
import RegisterUser from './user/RegisterUser';
import { ThemeProvider, useTheme } from './Theme/ThemeContext';

const SetThemeVariables = () => {
  const { selectedTheme } = useTheme();

  // Update CSS variables based on the selected theme
  document.documentElement.style.setProperty('--primary-color', selectedTheme.primaryColor);
  document.documentElement.style.setProperty('--secondary-color', selectedTheme.secondaryColor);
  document.documentElement.style.setProperty('--text-color', selectedTheme.textColor);

  return null; // This component does not need to render anything
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <SetThemeVariables /> {/* Set CSS variables here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/user_profile" element={<Profile />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;