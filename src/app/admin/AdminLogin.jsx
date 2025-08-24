import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Shield, Loader2, AlertCircle } from 'lucide-react';

function AdminLogin({ setLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  
  // Input change handler
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({});
    setApiError('');
  };

  // Form validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        
        setLogin(true);
        localStorage.setItem("isAdmin is login take data", "true");
        
      } else {
        if (response.status === 401) {
          setApiError('Invalid email or password. Please try again.');
        } else if (response.status === 403) {
          setApiError('Access denied. You do not have admin privileges.');
        } else if (response.status === 429) {
          setApiError('Too many login attempts. Please wait a moment and try again.');
        } else if (response.status >= 500) {
          setApiError('Server error. Please try again later.');
        } else {
          setApiError(data.message || 'Login failed. Please try again.');
        }
      }
    } catch (error) {
      console.error('Login error:', error);
      
      if (error.name === 'NetworkError' || !navigator.onLine) {
        setApiError('Network error. Please check your internet connection.');
      } else {
        setApiError('Unable to connect to server. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 flex items-center justify-center px-4 py-8">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-25 animate-pulse delay-500"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#550065] to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl font-black mb-2 bg-gradient-to-r from-[#550065] to-purple-600 bg-clip-text text-transparent">
              Admin Login
            </h1>
            <p className="text-gray-600">Access your admin dashboard</p>
          </div>

          {/* Error Message */}
          {apiError && (
            <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 rounded-2xl">
              <div className="flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <p className="text-red-700 text-sm">{apiError}</p>
              </div>
            </div>
          )}

          {/* Login Form */}
          <div className="space-y-6">
            {/* Email Field */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="admin@bytespire.com"
                  disabled={loading}
                  className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  } focus:border-[#550065] focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed`}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-red-600 text-xs">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  disabled={loading}
                  className={`w-full pl-12 pr-12 py-4 rounded-2xl border-2 ${
                    errors.password ? 'border-red-500' : 'border-gray-200'
                  } focus:border-[#550065] focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed`}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                  disabled={loading}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-red-600 text-xs">{errors.password}</p>
              )}
            </div>

            {/* Remember Me Checkbox */}
            

            {/* Login Button */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="group relative w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#550065] to-purple-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-3">
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  <>
                    <Shield className="h-5 w-5" />
                    Sign In to Dashboard
                  </>
                )}
              </span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Secure admin access for ByteSpire
            </p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500">System Online</span>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            🔒 This is a secure admin area. All login attempts are logged and monitored.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;