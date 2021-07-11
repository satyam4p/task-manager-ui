import React, { useState } from 'react';
import './App.css';
import Login from './pages/login';
import CustomButton from './components/button/customButton';
import { ThemeContext } from './context/ThemeContext';
function App() {
  const [defaultTheme, setDefaultTheme] = useState('dark');
  return (
    <div className="App">
     <h1>Welcome to task manager</h1>
     <ThemeContext.Provider value={{defaultTheme, setDefaultTheme }}>
     {/* <CustomButton isLogin={false} isSubmit={false} active={false} /> */}
     <Login/>
     </ThemeContext.Provider>
    </div>
  );
}

export default App;
