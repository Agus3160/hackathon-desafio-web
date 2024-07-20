import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import Home from './pages/homePage/Home';
import SignUp from './pages/signup/SignUp';
import { SessionProvider } from './context/SessionContext';


function App() {
  return (
    <SessionProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path='/register' element={<SignUp />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </SessionProvider>
  );
}

export default App;
