/* empty css                                     */
import { c as createComponent, e as renderComponent, r as renderTemplate } from '../chunks/astro/server_BzWAmyCR.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DuFyMfXw.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { s as supabase } from '../chunks/supabase_Cma3UIWe.mjs';
export { renderers } from '../renderers.mjs';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeSessions: 0,
    lastLogin: null
  });
  const [recentActivity, setRecentActivity] = useState([]);
  useEffect(() => {
    checkUser();
    getStats();
    getRecentActivity();
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.body.className = darkMode ? "dark-theme" : "light-theme";
  }, [darkMode]);
  const checkUser = async () => {
    try {
      const { data: { user: user2 } } = await supabase.auth.getUser();
      if (!user2) {
        window.location.href = "/login";
        return;
      }
      setUser(user2);
      registrarActividad(user2.id);
    } catch (error) {
      console.error("Error checking user:", error);
      window.location.href = "/login";
    } finally {
      setLoading(false);
    }
  };
  const registrarActividad = async (userId) => {
    await supabase.from("user_activity").insert([
      {
        user_id: userId,
        activity_type: "dashboard_view",
        metadata: { page: "dashboard" }
      }
    ]);
  };
  const getStats = async () => {
    try {
      const totalResponse = await fetch("http://localhost:3000/api/total-users");
      const totalData = await totalResponse.json();
      const activeResponse = await fetch("http://localhost:3000/api/active-sessions");
      const activeData = await activeResponse.json();
      setStats((prev) => ({
        ...prev,
        totalUsers: totalData.total || 0,
        activeSessions: activeData.activeSessions || 0,
        lastLogin: (/* @__PURE__ */ new Date()).toLocaleDateString("es-ES")
      }));
    } catch (error) {
      setStats((prev) => ({
        ...prev,
        totalUsers: 0,
        activeSessions: 0
      }));
    }
  };
  const getRecentActivity = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/recent-activity");
      const data = await response.json();
      setRecentActivity(data.activities || []);
    } catch (error) {
      setRecentActivity([]);
    }
  };
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      window.location.href = "/";
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: `min-h-screen flex items-center justify-center ${darkMode ? "bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900" : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"}`, children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-32 w-32 border-4 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-border", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-2 rounded-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900" }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" }) })
    ] }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: `min-h-screen transition-all duration-500 ${darkMode ? "bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white" : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900"}`, children: [
    /* @__PURE__ */ jsxs("header", { className: `relative overflow-hidden ${darkMode ? "bg-black/20 backdrop-blur-md border-b border-purple-500/30" : "bg-white/80 backdrop-blur-md border-b border-purple-200"}`, children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20" }),
      /* @__PURE__ */ jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center py-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-xl flex items-center justify-center animate-pulse", children: /* @__PURE__ */ jsx("i", { className: "fas fa-gavel text-white text-xl" }) }),
            /* @__PURE__ */ jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-xl blur opacity-30 animate-pulse" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h1", { className: `text-3xl font-bold gta-title ${darkMode ? "text-white" : "text-gray-900"}`, children: "WebDictum" }),
            /* @__PURE__ */ jsx("p", { className: `text-sm ${darkMode ? "text-purple-300" : "text-purple-600"}`, children: "Panel de Control" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: toggleTheme,
              className: `relative p-2 rounded-xl transition-all duration-300 ${darkMode ? "bg-purple-600/20 hover:bg-purple-600/30" : "bg-purple-100 hover:bg-purple-200"}`,
              children: darkMode ? /* @__PURE__ */ jsx("i", { className: "fas fa-sun text-yellow-400 text-lg" }) : /* @__PURE__ */ jsx("i", { className: "fas fa-moon text-purple-600 text-lg" })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: `px-4 py-2 rounded-xl ${darkMode ? "bg-purple-600/20 border border-purple-500/30" : "bg-white/50 border border-purple-200"}`, children: /* @__PURE__ */ jsx("span", { className: `text-sm ${darkMode ? "text-purple-300" : "text-purple-700"}`, children: user?.email }) }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: handleLogout,
              className: "relative px-6 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl font-medium hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105",
              children: [
                /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "Cerrar Sesión" }),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl blur opacity-30" })
              ]
            }
          )
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: `relative group ${darkMode ? "bg-black/20 backdrop-blur-md border border-purple-500/30" : "bg-white/80 backdrop-blur-md border border-purple-200"} rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105`, children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" }),
          /* @__PURE__ */ jsx("div", { className: "relative p-6", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx("i", { className: "fas fa-users text-white text-lg" }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-30" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: `text-sm font-medium ${darkMode ? "text-purple-300" : "text-purple-600"}`, children: "Total de Usuarios" }),
              /* @__PURE__ */ jsx("p", { className: `text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`, children: stats.totalUsers.toLocaleString() })
            ] })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `relative group ${darkMode ? "bg-black/20 backdrop-blur-md border border-purple-500/30" : "bg-white/80 backdrop-blur-md border border-purple-200"} rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105`, children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10" }),
          /* @__PURE__ */ jsx("div", { className: "relative p-6", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx("i", { className: "fas fa-signal text-white text-lg" }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-30" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: `text-sm font-medium ${darkMode ? "text-purple-300" : "text-purple-600"}`, children: "Sesiones Activas" }),
              /* @__PURE__ */ jsx("p", { className: `text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`, children: stats.activeSessions })
            ] })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `relative group ${darkMode ? "bg-black/20 backdrop-blur-md border border-purple-500/30" : "bg-white/80 backdrop-blur-md border border-purple-200"} rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105`, children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-red-500/10" }),
          /* @__PURE__ */ jsx("div", { className: "relative p-6", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx("i", { className: "fas fa-clock text-white text-lg" }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-30" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: `text-sm font-medium ${darkMode ? "text-purple-300" : "text-purple-600"}`, children: "Último Acceso" }),
              /* @__PURE__ */ jsx("p", { className: `text-lg font-bold ${darkMode ? "text-white" : "text-gray-900"}`, children: stats.lastLogin })
            ] })
          ] }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: `relative ${darkMode ? "bg-black/20 backdrop-blur-md border border-purple-500/30" : "bg-white/80 backdrop-blur-md border border-purple-200"} rounded-2xl overflow-hidden`, children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" }),
          /* @__PURE__ */ jsxs("div", { className: "relative px-6 py-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("i", { className: "fas fa-chart-line text-white text-sm" }) }),
              /* @__PURE__ */ jsx("h3", { className: `text-xl font-bold gta-title ${darkMode ? "text-white" : "text-gray-900"}`, children: "Actividad Reciente" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              recentActivity.length === 0 && /* @__PURE__ */ jsx("div", { className: "text-center text-gray-400", children: "Sin actividad reciente" }),
              recentActivity.map((act, idx) => /* @__PURE__ */ jsxs("div", { className: `flex items-center space-x-4 p-3 rounded-xl ${act.activity_type === "login" ? "bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20" : act.activity_type === "dashboard_view" ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20" : "bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20"}`, children: [
                /* @__PURE__ */ jsx("div", { className: `w-3 h-3 rounded-full animate-pulse ${act.activity_type === "login" ? "bg-green-400" : act.activity_type === "dashboard_view" ? "bg-blue-400" : "bg-yellow-400"}` }),
                /* @__PURE__ */ jsxs("span", { className: `text-sm ${act.activity_type === "login" ? darkMode ? "text-green-300" : "text-green-700" : act.activity_type === "dashboard_view" ? darkMode ? "text-blue-300" : "text-blue-700" : darkMode ? "text-yellow-300" : "text-yellow-700"}`, children: [
                  act.activity_type === "login" && "Nueva sesión iniciada",
                  act.activity_type === "dashboard_view" && "Entró al panel de control",
                  act.activity_type === "profile_update" && "Actualización de perfil"
                ] }),
                /* @__PURE__ */ jsx("span", { className: `text-xs ${darkMode ? "text-purple-400" : "text-purple-600"}`, children: timeAgo(act.created_at) })
              ] }, act.id || idx))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `relative ${darkMode ? "bg-black/20 backdrop-blur-md border border-purple-500/30" : "bg-white/80 backdrop-blur-md border border-purple-200"} rounded-2xl overflow-hidden`, children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-red-500/5" }),
          /* @__PURE__ */ jsxs("div", { className: "relative px-6 py-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("i", { className: "fas fa-bolt text-white text-sm" }) }),
              /* @__PURE__ */ jsx("h3", { className: `text-xl font-bold gta-title ${darkMode ? "text-white" : "text-gray-900"}`, children: "Acciones Rápidas" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("button", { className: "w-full relative px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105", children: [
                /* @__PURE__ */ jsxs("span", { className: "relative z-10 flex items-center justify-center space-x-2", children: [
                  /* @__PURE__ */ jsx("i", { className: "fas fa-user-edit" }),
                  /* @__PURE__ */ jsx("span", { children: "Editar Perfil" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-30" })
              ] }),
              /* @__PURE__ */ jsxs("button", { className: "w-full relative px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105", children: [
                /* @__PURE__ */ jsxs("span", { className: "relative z-10 flex items-center justify-center space-x-2", children: [
                  /* @__PURE__ */ jsx("i", { className: "fas fa-plus-circle" }),
                  /* @__PURE__ */ jsx("span", { children: "Crear Nuevo Proyecto" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-30" })
              ] }),
              /* @__PURE__ */ jsxs("button", { className: "w-full relative px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105", children: [
                /* @__PURE__ */ jsxs("span", { className: "relative z-10 flex items-center justify-center space-x-2", children: [
                  /* @__PURE__ */ jsx("i", { className: "fas fa-chart-bar" }),
                  /* @__PURE__ */ jsx("span", { children: "Ver Reportes" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-30" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: `mt-8 relative ${darkMode ? "bg-black/20 backdrop-blur-md border border-purple-500/30" : "bg-white/80 backdrop-blur-md border border-purple-200"} rounded-2xl overflow-hidden`, children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5" }),
        /* @__PURE__ */ jsxs("div", { className: "relative px-6 py-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("i", { className: "fas fa-user-circle text-white text-sm" }) }),
            /* @__PURE__ */ jsx("h3", { className: `text-xl font-bold gta-title ${darkMode ? "text-white" : "text-gray-900"}`, children: "Información del Usuario" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: `p-4 rounded-xl ${darkMode ? "bg-black/30 border border-purple-500/20" : "bg-white/50 border border-purple-200"}`, children: [
              /* @__PURE__ */ jsx("label", { className: `block text-sm font-medium mb-2 ${darkMode ? "text-purple-300" : "text-purple-600"}`, children: "Email" }),
              /* @__PURE__ */ jsx("p", { className: `text-sm ${darkMode ? "text-white" : "text-gray-900"}`, children: user?.email })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: `p-4 rounded-xl ${darkMode ? "bg-black/30 border border-purple-500/20" : "bg-white/50 border border-purple-200"}`, children: [
              /* @__PURE__ */ jsx("label", { className: `block text-sm font-medium mb-2 ${darkMode ? "text-purple-300" : "text-purple-600"}`, children: "ID de Usuario" }),
              /* @__PURE__ */ jsx("p", { className: `text-sm ${darkMode ? "text-white" : "text-gray-900"}`, children: user?.id })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: `p-4 rounded-xl ${darkMode ? "bg-black/30 border border-purple-500/20" : "bg-white/50 border border-purple-200"}`, children: [
              /* @__PURE__ */ jsx("label", { className: `block text-sm font-medium mb-2 ${darkMode ? "text-purple-300" : "text-purple-600"}`, children: "Fecha de Creación" }),
              /* @__PURE__ */ jsx("p", { className: `text-sm ${darkMode ? "text-white" : "text-gray-900"}`, children: user?.created_at ? new Date(user.created_at).toLocaleDateString("es-ES") : "N/A" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: `p-4 rounded-xl ${darkMode ? "bg-black/30 border border-purple-500/20" : "bg-white/50 border border-purple-200"}`, children: [
              /* @__PURE__ */ jsx("label", { className: `block text-sm font-medium mb-2 ${darkMode ? "text-purple-300" : "text-purple-600"}`, children: "Última Actualización" }),
              /* @__PURE__ */ jsx("p", { className: `text-sm ${darkMode ? "text-white" : "text-gray-900"}`, children: user?.updated_at ? new Date(user.updated_at).toLocaleDateString("es-ES") : "N/A" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { jsx: true, children: `
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
      ` })
  ] });
}
function timeAgo(dateString) {
  const now = /* @__PURE__ */ new Date();
  const date = new Date(dateString);
  const diff = Math.floor((now - date) / 1e3);
  if (diff < 60) return `hace ${diff} segundos`;
  if (diff < 3600) return `hace ${Math.floor(diff / 60)} minutos`;
  if (diff < 86400) return `hace ${Math.floor(diff / 3600)} horas`;
  return `hace ${Math.floor(diff / 86400)} días`;
}

const $$Dashboard = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "WebDictum - Dashboard" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Dashboard", Dashboard, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/francis/Documents/GitHub/WebDictum/src/components/Dashboard.jsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/francis/Documents/GitHub/WebDictum/src/pages/dashboard.astro", void 0);

const $$file = "C:/Users/francis/Documents/GitHub/WebDictum/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
