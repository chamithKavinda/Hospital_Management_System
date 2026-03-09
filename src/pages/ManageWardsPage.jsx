import { Field, Table } from "../components/UI";

const ManageWardsPage = () => (
  <div>
    {/* Add Ward Form */}
    <div style={{
      background: "#fff", borderRadius: 14, padding: "32px 36px",
      boxShadow: "0 2px 16px rgba(0,0,0,.07)", maxWidth: 600, marginBottom: 28,
    }}>
      <h2 style={{
        margin: "0 0 24px", fontSize: 20, fontWeight: 700, color: "#1e3a8a",
        borderBottom: "2px solid #dbeafe", paddingBottom: 14,
      }}>
        Add New Ward
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>
        <Field label="Ward Name"  placeholder="e.g. Ward A" />
        <Field label="Capacity"   type="number" placeholder="20" />
        <Field label="Ward Type"  placeholder="General / ICU / Surgical" />
        <Field label="Floor"      placeholder="Ground / 1st / 2nd" />
      </div>
      <button style={{
        marginTop: 8, background: "linear-gradient(135deg,#1e40af,#2563eb)", color: "#fff",
        border: "none", borderRadius: 9, padding: "11px 32px", fontSize: 14, fontWeight: 700, cursor: "pointer",
      }}>
        Add Ward
      </button>
    </div>

    {/* Existing Wards Table */}
    <div style={{
      background: "#fff", borderRadius: 14, padding: "28px 36px",
      boxShadow: "0 2px 16px rgba(0,0,0,.07)",
    }}>
      <h3 style={{ margin: "0 0 18px", fontSize: 16, fontWeight: 700, color: "#374151" }}>
        Existing Wards
      </h3>
      <Table
        headers={["Ward", "Type", "Capacity", "Occupied", "Floor"]}
        rows={[
          ["Ward A", "General",   "30", "22", "Ground"],
          ["Ward B", "Surgical",  "20", "15", "1st"],
          ["Ward C", "ICU",       "10",  "8", "1st"],
          ["Ward D", "Maternity", "25", "18", "2nd"],
        ]}
      />
    </div>
  </div>
);

export default ManageWardsPage;
