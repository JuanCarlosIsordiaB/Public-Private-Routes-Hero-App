import {  Routes, Route } from 'react-router-dom';
import LoginPage from '../auth/pages/LoginPage';
import { Navbar } from '../ui/components/NavBar';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import PrivateRoute from './PrivateRoute';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
  return (
    <>

      <Routes>
        {/* Registro, Olvide Contraseña, etc */}

        <Route path="/login" element={
          <PublicRoutes>
            <LoginPage />
          </PublicRoutes>
        }
        
        />
        {/*<Route path="login" element={<LoginPage />}/>*/}

        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        } />

        {/*<Route path="/*" element={<HeroesRoutes />}/>*/}

      </Routes>
    </>
  )
}
