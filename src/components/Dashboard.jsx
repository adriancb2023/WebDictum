import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeSessions: 0,
    lastLogin: null
  });

  useEffect(() => {
    checkUser();
    getStats();
    // Cargar preferencia de tema desde localStorage
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    // Guardar preferencia de tema en localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    // Aplicar tema al body
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  const checkUser = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        window.location.href = '/login';
        return;
      }
      setUser(user);
    } catch (error) {
      console.error('Error checking user:', error);
      window.location.href = '/login';
    } finally {
      setLoading(false);
    }
  };

  const getStats = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/total-users');
      const data = await response.json();
      setStats((prev) => ({
        ...prev,
        totalUsers: data.total || 0,
        activeSessions: 89,
        lastLogin: new Date().toLocaleDateString('es-ES')
      }));
    } catch (error) {
      setStats((prev) => ({
        ...prev,
        totalUsers: 0,
      }));
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      window.location.href = '/';
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`}>
        <div className="relative">
          <div className="animate-spin rounded-full h-32 w-32 border-4 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-border">
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900'}`}>
      {/* Header con estilo único */}
      <header className={`relative overflow-hidden ${darkMode ? 'bg-black/20 backdrop-blur-md border-b border-purple-500/30' : 'bg-white/80 backdrop-blur-md border-b border-purple-200'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-xl flex items-center justify-center animate-pulse">
                  <i className="fas fa-gavel text-white text-xl"></i>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-xl blur opacity-30 animate-pulse"></div>
              </div>
              <div>
                <h1 className={`text-3xl font-bold gta-title ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  WebDictum
                </h1>
                <p className={`text-sm ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                  Panel de Control
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Toggle de tema */}
              <button
                onClick={toggleTheme}
                className={`relative p-2 rounded-xl transition-all duration-300 ${darkMode ? 'bg-purple-600/20 hover:bg-purple-600/30' : 'bg-purple-100 hover:bg-purple-200'}`}
              >
                {darkMode ? (
                  <i className="fas fa-sun text-yellow-400 text-lg"></i>
                ) : (
                  <i className="fas fa-moon text-purple-600 text-lg"></i>
                )}
              </button>
              
              <div className={`px-4 py-2 rounded-xl ${darkMode ? 'bg-purple-600/20 border border-purple-500/30' : 'bg-white/50 border border-purple-200'}`}>
                <span className={`text-sm ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
                  {user?.email}
                </span>
              </div>
              
              <button
                onClick={handleLogout}
                className="relative px-6 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-medium hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">Cerrar Sesión</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl blur opacity-30"></div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards con estilo único */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {/* Card 1 - Total Usuarios */}
          <div className={`relative group ${darkMode ? 'bg-black/20 backdrop-blur-md border border-purple-500/30' : 'bg-white/80 backdrop-blur-md border border-purple-200'} rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
            <div className="relative p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <i className="fas fa-users text-white text-lg"></i>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-30"></div>
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                      Total de Usuarios
                    </p>
                    <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {stats.totalUsers.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Sesiones Activas */}
          <div className={`relative group ${darkMode ? 'bg-black/20 backdrop-blur-md border border-purple-500/30' : 'bg-white/80 backdrop-blur-md border border-purple-200'} rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105`}>
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10"></div>
            <div className="relative p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <i className="fas fa-signal text-white text-lg"></i>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-30"></div>
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                      Sesiones Activas
                    </p>
                    <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {stats.activeSessions}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Último Acceso */}
          <div className={`relative group ${darkMode ? 'bg-black/20 backdrop-blur-md border border-purple-500/30' : 'bg-white/80 backdrop-blur-md border border-purple-200'} rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105`}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-red-500/10"></div>
            <div className="relative p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <i className="fas fa-clock text-white text-lg"></i>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-30"></div>
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                      Último Acceso
                    </p>
                    <p className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {stats.lastLogin}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Actividad Reciente */}
          <div className={`relative ${darkMode ? 'bg-black/20 backdrop-blur-md border border-purple-500/30' : 'bg-white/80 backdrop-blur-md border border-purple-200'} rounded-2xl overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
            <div className="relative px-6 py-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <i className="fas fa-chart-line text-white text-sm"></i>
                </div>
                <h3 className={`text-xl font-bold gta-title ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Actividad Reciente
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-3 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className={`text-sm ${darkMode ? 'text-green-300' : 'text-green-700'}`}>Usuario registrado exitosamente</span>
                  <span className={`text-xs ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>hace 2 horas</span>
                </div>
                <div className="flex items-center space-x-4 p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>Nueva sesión iniciada</span>
                  <span className={`text-xs ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>hace 5 horas</span>
                </div>
                <div className="flex items-center space-x-4 p-3 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className={`text-sm ${darkMode ? 'text-yellow-300' : 'text-yellow-700'}`}>Actualización de perfil</span>
                  <span className={`text-xs ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>hace 1 día</span>
                </div>
              </div>
            </div>
          </div>

          {/* Acciones Rápidas */}
          <div className={`relative ${darkMode ? 'bg-black/20 backdrop-blur-md border border-purple-500/30' : 'bg-white/80 backdrop-blur-md border border-purple-200'} rounded-2xl overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-red-500/5"></div>
            <div className="relative px-6 py-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <i className="fas fa-bolt text-white text-sm"></i>
                </div>
                <h3 className={`text-xl font-bold gta-title ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Acciones Rápidas
                </h3>
              </div>
              <div className="space-y-4">
                <button className="w-full relative px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <i className="fas fa-user-edit"></i>
                    <span>Editar Perfil</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-30"></div>
                </button>
                <button className="w-full relative px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105">
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <i className="fas fa-plus-circle"></i>
                    <span>Crear Nuevo Proyecto</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-30"></div>
                </button>
                <button className="w-full relative px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <i className="fas fa-chart-bar"></i>
                    <span>Ver Reportes</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-30"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Información del Usuario */}
        <div className={`mt-8 relative ${darkMode ? 'bg-black/20 backdrop-blur-md border border-purple-500/30' : 'bg-white/80 backdrop-blur-md border border-purple-200'} rounded-2xl overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5"></div>
          <div className="relative px-6 py-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <i className="fas fa-user-circle text-white text-sm"></i>
              </div>
              <h3 className={`text-xl font-bold gta-title ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Información del Usuario
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-4 rounded-xl ${darkMode ? 'bg-black/30 border border-purple-500/20' : 'bg-white/50 border border-purple-200'}`}>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>Email</label>
                <p className={`text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{user?.email}</p>
              </div>
              <div className={`p-4 rounded-xl ${darkMode ? 'bg-black/30 border border-purple-500/20' : 'bg-white/50 border border-purple-200'}`}>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>ID de Usuario</label>
                <p className={`text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>{user?.id}</p>
              </div>
              <div className={`p-4 rounded-xl ${darkMode ? 'bg-black/30 border border-purple-500/20' : 'bg-white/50 border border-purple-200'}`}>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>Fecha de Creación</label>
                <p className={`text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {user?.created_at ? new Date(user.created_at).toLocaleDateString('es-ES') : 'N/A'}
                </p>
              </div>
              <div className={`p-4 rounded-xl ${darkMode ? 'bg-black/30 border border-purple-500/20' : 'bg-white/50 border border-purple-200'}`}>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>Última Actualización</label>
                <p className={`text-sm ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {user?.updated_at ? new Date(user.updated_at).toLocaleDateString('es-ES') : 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .gta-title {
          font-family: 'Righteous', cursive;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
        }
        
        .dark-theme {
          background: #000000;
          color: #ffffff;
        }
        
        .light-theme {
          background: #ffffff;
          color: #000000;
        }
      `}</style>
    </div>
  );
} 