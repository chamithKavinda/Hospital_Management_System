import { Field, Table } from "../components/UI";

const ManageDoctorsPage = () => (
  <div>
    {/* Add Team Form */}
    <div style={{
      background: "#fff", borderRadius: 14, padding: "32px 36px",
      boxShadow: "0 2px 16px rgba(0,0,0,.07)", maxWidth: 620, marginBottom: 28,
    }}>
      <h2 style={{
        margin: "0 0 24px", fontSize: 20, fontWeight: 700, color: "#1e3a8a",
        borderBottom: "2px solid #dbeafe", paddingBottom: 14,
      }}>
        Add Doctor Team
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>
        <Field label="Team Name"      placeholder="Team Alpha" />
        <Field label="Specialisation" placeholder="Cardiology" />
        <Field label="Lead Doctor"    placeholder="Dr. Perera" />
        <Field label="Assigned Ward"  placeholder="Ward A" />
      </div>
      <button style={{
        marginTop: 8, background: "linear-gradient(135deg,#1e40af,#2563eb)", color: "#fff",
        border: "none", borderRadius: 9, padding: "11px 32px", fontSize: 14, fontWeight: 700, cursor: "pointer",
      }}>
        Create Team
      </button>
    </div>

    {/* Teams Table */}
    <div style={{
      background: "#fff", borderRadius: 14, padding: "28px 36px",
      boxShadow: "0 2px 16px rgba(0,0,0,.07)",
    }}>
      <h3 style={{ margin: "0 0 18px", fontSize: 16, fontWeight: 700, color: "#374151" }}>
        Doctor Teams
      </h3>
      <Table
        headers={["Team", "Specialisation", "Lead Doctor", "Ward", "Members"]}
        rows={[
          ["Team Alpha", "Cardiology",   "Dr. Perera",      "Ward A", "5"],
          ["Team Beta",  "Neurology",    "Dr. Silva",       "Ward B", "4"],
          ["Team Gamma", "Orthopaedics", "Dr. Gunawardena", "Ward C", "6"],
        ]}
      />
    </div>
  </div>
);

export default ManageDoctorsPage;
