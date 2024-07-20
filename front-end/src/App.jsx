import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import Home from './pages/homePage/Home';



function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
