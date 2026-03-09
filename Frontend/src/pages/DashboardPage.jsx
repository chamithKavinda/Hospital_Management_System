import React from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const admissionsData = [
  { name: 'Mon', admitted: 12, discharged: 8 },
  { name: 'Tue', admitted: 19, discharged: 15 },
  { name: 'Wed', admitted: 15, discharged: 10 },
  { name: 'Thu', admitted: 22, discharged: 18 },
  { name: 'Fri', admitted: 14, discharged: 20 },
  { name: 'Sat', admitted: 8, discharged: 12 },
  { name: 'Sun', admitted: 10, discharged: 9 },
];

const wardData = [
  { name: 'General', occupied: 85, available: 15 },
  { name: 'ICU', occupied: 18, available: 2 },
  { name: 'Pediatrics', occupied: 30, available: 10 },
  { name: 'Maternity', occupied: 25, available: 5 },
];

const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'];

const DashboardPage = ({ setActive }) => {
  const summaryStats = [
    { title: "Total Patients", value: "248", trend: "+12% this week", emoji: "🛏️", action: "byWard" },
    { title: "Today's Admissions", value: "14", trend: "Normal capacity", emoji: "🏥"},
    { title: "Ready for Discharge", value: "9", trend: "Requires review", emoji: "🚪" },
    { title: "Active Doctors", value: "42", trend: "Across 8 teams", emoji: "👨‍⚕️"},
  ];

  return (
    <div style={{ padding: "10px", fontFamily: "system-ui, sans-serif" }}>
      
      <div style={{ marginBottom: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h2 style={{ margin: "0 0 4px", fontSize: 26, fontWeight: 800, color: "#1e3a8a" }}>
            Dashboard
          </h2>
          <p style={{ margin: 0, color: "#6b7280", fontSize: 15 }}>
            Real-time analytics and daily administrative summary.
          </p>
        </div>
        
        <button 
          onClick={() => setActive('admit')}
          style={{
            background: "#2563eb", color: "#fff", border: "none", borderRadius: "8px",
            padding: "10px 20px", fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 6px -1px rgba(37, 99, 235, 0.2)"
          }}
        >
          + New Patient
        </button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "32px" }}>
        {summaryStats.map((stat, index) => (
          <div 
            key={index} 
            onClick={() => setActive(stat.action)}
            style={{
              background: "#fff", border: "1px solid #e5e7eb", borderRadius: "16px", padding: "24px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)", cursor: "pointer", transition: "all 0.2s ease"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "none"}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <p style={{ margin: "0 0 8px", fontSize: 14, color: "#6b7280", fontWeight: 600 }}>{stat.title}</p>
                <h3 style={{ margin: 0, fontSize: 32, fontWeight: 800, color: "#111827" }}>{stat.value}</h3>
              </div>
              <span style={{ fontSize: 28 }}>{stat.emoji}</span>
            </div>
            <p style={{ margin: "12px 0 0", fontSize: 13, color: stat.trend.includes('+') ? "#10b981" : "#6b7280" }}>
              {stat.trend}
            </p>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "20px" }}>
        
        <div style={{ background: "#fff", padding: "24px", borderRadius: "16px", border: "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <h3 style={{ margin: "0 0 20px", fontSize: 16, color: "#374151" }}>Weekly Admissions vs Discharges</h3>
          <div style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={admissionsData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} />
                <Legend iconType="circle" />
                <Line type="monotone" dataKey="admitted" name="Admitted" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="discharged" name="Discharged" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div style={{ background: "#fff", padding: "24px", borderRadius: "16px", border: "1px solid #e5e7eb", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <h3 style={{ margin: "0 0 20px", fontSize: 16, color: "#374151" }}>Ward Occupancy</h3>
          <div style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={wardData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: '#6b7280' }} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#374151', fontWeight: 500 }} width={80} />
                <Tooltip cursor={{ fill: '#f3f4f6' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} />
                <Legend iconType="circle" />
                <Bar dataKey="occupied" name="Occupied Beds" stackId="a" fill="#3b82f6" radius={[0, 0, 0, 0]} />
                <Bar dataKey="available" name="Available Beds" stackId="a" fill="#10b981" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardPage;