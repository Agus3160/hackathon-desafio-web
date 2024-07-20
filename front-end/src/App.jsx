import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import SideBar from './pages/homePage/SideBar';



function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<SideBar />} />
    </Routes>
  );
}

export default App;
