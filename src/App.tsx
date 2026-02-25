import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Checkout from './pages/Checkout';
import { DemoBackgroundPaths } from './components/demo';

function BackgroundWrapper() {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  // Login gets full 100% opacity, all other routes get fading 50% opacity
  return <DemoBackgroundPaths className={isLogin ? 'opacity-100' : 'opacity-40'} />;
}

function App() {
  return (
    <div className="dark bg-black min-h-screen text-white relative">
      <div className="relative z-10 h-full">
        <AuthProvider>
          <CartProvider>
            <BrowserRouter basename="/for-cafeteria">
              <BackgroundWrapper />
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/checkout"
                  element={
                    <ProtectedRoute>
                      <Checkout />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
