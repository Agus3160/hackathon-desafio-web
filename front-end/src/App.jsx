import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import Home from './pages/homePage/Home';
import SignUp from './pages/signup/SignUp';
import { SessionProvider } from './context/SessionContext';
import ProtectedRoute from './components/ProtectedRoute';
import CategoryView from './pages/category/Category';
import PlaceDetail from './pages/placeDetail/PlaceDetail';
function App() {
  return (
    <SessionProvider>
      <Routes>
        
        <Route path='/' element={<ProtectedRoute />}>
          <Route path="" element={<Home />} />
          <Route path='place/:id' element={<PlaceDetail />} />
        </Route>
        <Route path="/category/:categoryName" element={<CategoryView />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/register' element={<SignUp />}/>
      </Routes>
    </SessionProvider>
  );
}

export default App;
