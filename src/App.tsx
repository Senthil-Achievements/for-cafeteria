import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Checkout from './pages/Checkout';
import { DemoBackgroundPaths } from './components/demo';

function App() {
  return (
    <div className="dark bg-black min-h-screen text-white relative">
      <DemoBackgroundPaths />
      <div className="relative z-10 h-full">
        <AuthProvider>
          <CartProvider>
            <BrowserRouter basename="/frontend-only">
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
