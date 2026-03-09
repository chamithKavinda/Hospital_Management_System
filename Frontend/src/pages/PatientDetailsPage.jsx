const PatientDetailsPage = () => (
  <div style={{
    background: "#fff", borderRadius: 14, padding: "32px 36px",
    boxShadow: "0 2px 16px rgba(0,0,0,.07)", maxWidth: 700,
  }}>
    <h2 style={{
      margin: "0 0 24px", fontSize: 20, fontWeight: 700, color: "#1e3a8a",
      borderBottom: "2px solid #dbeafe", paddingBottom: 14,
    }}>
      Patient Details
    </h2>

    {/* Search */}
    <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
      <input
        placeholder="Search by ID or Name..."
        style={{
          flex: 1, padding: "10px 14px", border: "1.5px solid #e5e7eb",
          borderRadius: 8, fontSize: 14, outline: "none",
        }}
      />
      <button style={{
        background: "#1e40af", color: "#fff", border: "none",
        borderRadius: 8, padding: "10px 22px", cursor: "pointer", fontWeight: 700,
      }}>
        Search
      </button>
    </div>

    {/* Detail Card */}
    <div style={{ background: "#f0f6ff", borderRadius: 10, padding: 24 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {[
          ["Patient ID",  "PAT-001"],
          ["Name",        "Amara Silva"],
          ["DOB",         "1990-05-12"],
          ["Ward",        "Ward A"],
          ["Admission",   "2026-02-20"],
          ["Doctor",      "Dr. Perera"],
          ["Diagnosis",   "Acute Appendicitis"],
          ["Status",      "Active"],
        ].map(([k, v]) => (
          <div key={k}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#6b7280", textTransform: "uppercase", letterSpacing: ".6px" }}>
              {k}
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#111827", marginTop: 2 }}>
              {v}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default PatientDetailsPage;
