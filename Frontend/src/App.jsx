// import { useState } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";

// import Login from "../src/pages/Login";
// import Registration from "../src/pages/Registration";

// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import DashboardPage from "./pages/DashboardPage";
// import { PAGES, NAV_ITEMS } from "./constants";

// // ── Hospital layout (Navbar + Sidebar + dynamic page) ─────────────────────────
// const HospitalLayout = () => {
//   const [active, setActive] = useState("dashboard");

//   const ActivePage = PAGES[active] || PAGES.dashboard;
//   const activeLabel = NAV_ITEMS.find(n => n.id === active)?.label || "Dashboard";

//   return (
//     <div style={{
//       display: "flex", flexDirection: "column",
//       height: "100vh", fontFamily: "'Segoe UI', sans-serif", background: "#f1f5f9",
//     }}>
//       {/* Top Navbar */}
//       <Navbar />

//       {/* Sidebar + Main */}
//       <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
//         <Sidebar active={active} setActive={setActive} />

//         <main style={{ flex: 1, overflowY: "auto", padding: "32px 36px" }}>
//           {/* Breadcrumb */}
//           <div style={{
//             display: "flex", alignItems: "center", gap: 8,
//             marginBottom: 24, fontSize: 13, color: "#6b7280",
//           }}>
//             <span
//               style={{ color: "#1e40af", fontWeight: 600, cursor: "pointer" }}
//               onClick={() => setActive("dashboard")}
//             >
//               Dashboard
//             </span>
//             {active !== "dashboard" && (
//               <>
//                 <span>›</span>
//                 <span style={{ color: "#374151", fontWeight: 600 }}>{activeLabel}</span>
//               </>
//             )}
//           </div>

//           {/* Dynamic Page */}
//           <ActivePage setActive={setActive} />
//         </main>
//       </div>
//     </div>
//   );
// };

// // ── Root App ──────────────────────────────────────────────────────────────────
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Default redirect */}
//         <Route path="/" element={<Navigate to="/login" replace />} />

//         {/* Auth pages */}
//         <Route path="/login"        element={<Login />} />
//         <Route path="/registration" element={<Registration />} />

//         {/* Hospital dashboard (all sub-pages handled internally by HospitalLayout) */}
//         <Route path="/dashboard" element={<HospitalLayout />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { PAGES, NAV_ITEMS } from "../constants";

const App = () => {
  const [active, setActive] = useState("dashboard");

  const ActivePage = PAGES[active] || PAGES.dashboard;
  const activeLabel = NAV_ITEMS.find(n => n.id === active)?.label || "Dashboard";

  return (
    <div style={{
      display: "flex", flexDirection: "column",
      height: "100vh", fontFamily: "'Segoe UI', sans-serif", background: "#f1f5f9",
    }}>
      {/* Top Navbar */}
      <Navbar />

      {/* Sidebar + Main */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <Sidebar active={active} setActive={setActive} />

        <main style={{ flex: 1, overflowY: "auto", padding: "32px 36px" }}>
          {/* Breadcrumb */}
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            marginBottom: 24, fontSize: 13, color: "#6b7280",
          }}>
            <span
              style={{ color: "#1e40af", fontWeight: 600, cursor: "pointer" }}
              onClick={() => setActive("dashboard")}
            >
              Dashboard
            </span>
            {active !== "dashboard" && (
              <>
                <span>›</span>
                <span style={{ color: "#374151", fontWeight: 600 }}>{activeLabel}</span>
              </>
            )}
          </div>

          {/* Dynamic Page */}
          <ActivePage setActive={setActive} />
        </main>
      </div>
    </div>
  );
};

export default App;
