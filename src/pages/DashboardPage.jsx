const DashboardPage = ({ setActive }) => {
  const sections = [
    {
      title: "Patient Management",
      items: [
        { id: "admit",     label: "Admit Patient",           emoji: "🏥" },
        { id: "transfer",  label: "Transfer Patient",        emoji: "🔄" },
        { id: "discharge", label: "Discharge Patient",       emoji: "🚪" },
        { id: "treatment", label: "Record Doctor Treatment", emoji: "💊" },
      ],
    },
    {
      title: "Tracking and Reporting",
      items: [
        { id: "byWard",         label: "Patients by Ward", emoji: "🛏️" },
        { id: "byTeam",         label: "Patients by Team", emoji: "👥" },
        { id: "patientDetails", label: "Patient Details",  emoji: "🗂️" },
      ],
    },
    {
      title: "Wards and Teams",
      items: [
        { id: "manageWards",   label: "Manage Wards",         emoji: "🏢" },
        { id: "manageDoctors", label: "Manage Doctors Teams", emoji: "👨‍⚕️" },
      ],
    },
  ];

  return (
    <div>
      <h2 style={{ margin: "0 0 28px", fontSize: 22, fontWeight: 800, color: "#1e3a8a" }}>
        Welcome to Hospital Administration System
      </h2>

      {sections.map(sec => (
        <div key={sec.title} style={{ marginBottom: 36 }}>
          <h3 style={{
            margin: "0 0 16px", fontSize: 15, fontWeight: 700, color: "#374151",
            textTransform: "uppercase", letterSpacing: ".8px",
          }}>
            {sec.title}
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            {sec.items.map(item => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                style={{
                  background: "#fff", border: "1.5px solid #dbeafe", borderRadius: 14,
                  padding: "20px 24px", cursor: "pointer", textAlign: "center",
                  minWidth: 140, transition: "all .2s", boxShadow: "0 2px 8px rgba(0,0,0,.06)",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "#2563eb";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(37,99,235,.18)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#dbeafe";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,.06)";
                }}
              >
                <span style={{ fontSize: 32 }}>{item.emoji}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#1e40af" }}>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardPage;
