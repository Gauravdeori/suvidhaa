import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import InactivityTimer from './components/common/InactivityTimer';

// Auth Components
import LoginPage from './components/auth/LoginPage';
import OTPVerification from './components/auth/OTPVerification';
import AadhaarVerification from './components/auth/AadhaarVerification';

// Dashboard
import Dashboard from './components/dashboard/Dashboard';

// Services
import ServiceMenu from './components/services/ServiceMenu';
import RequestForm from './components/services/RequestForm';
import ConfirmationScreen from './components/services/ConfirmationScreen';

// Status
import StatusTracker from './components/status/StatusTracker';

// Receipt
import Receipt from './components/receipt/Receipt';

// Admin
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/" />;
};

// Admin Route Component
const AdminRoute = ({ children }) => {
    const { isAdmin } = useAuth();
    return isAdmin ? children : <Navigate to="/admin" />;
};

function AppContent() {
    return (
        <>
            <InactivityTimer />
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<LoginPage />} />
                <Route path="/verify-otp" element={<OTPVerification />} />
                <Route path="/verify-aadhaar" element={<AadhaarVerification />} />

                {/* Protected Routes */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/service/:serviceType"
                    element={
                        <ProtectedRoute>
                            <ServiceMenu />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/service/:serviceType/:requestType"
                    element={
                        <ProtectedRoute>
                            <RequestForm />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/confirmation"
                    element={
                        <ProtectedRoute>
                            <ConfirmationScreen />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/status"
                    element={
                        <ProtectedRoute>
                            <StatusTracker />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/receipt"
                    element={
                        <ProtectedRoute>
                            <Receipt />
                        </ProtectedRoute>
                    }
                />

                {/* Admin Routes */}
                <Route path="/admin" element={<AdminLogin />} />
                <Route
                    path="/admin/dashboard"
                    element={
                        <AdminRoute>
                            <AdminDashboard />
                        </AdminRoute>
                    }
                />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
}

function App() {
    return (
        <Router>
            <AuthProvider>
                <LanguageProvider>
                    <AppContent />
                </LanguageProvider>
            </AuthProvider>
        </Router>
    );
}

export default App;
