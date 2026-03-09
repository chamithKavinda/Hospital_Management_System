import { Badge, Table } from "../components/UI";

const PatientsByWardPage = () => (
  <div style={{
    background: "#fff", borderRadius: 14, padding: "32px 36px",
    boxShadow: "0 2px 16px rgba(0,0,0,.07)",
  }}>
    <h2 style={{
      margin: "0 0 24px", fontSize: 20, fontWeight: 700, color: "#1e3a8a",
      borderBottom: "2px solid #dbeafe", paddingBottom: 14,
    }}>
      Patients by Ward
    </h2>
    <Table
      headers={["Patient ID", "Name", "Ward", "Admission Date", "Status"]}
      rows={[
        ["PAT-001", "Amara Silva",          "Ward A", "2026-02-20", <Badge color="#16a34a" label="Active"   />],
        ["PAT-002", "Nimal Fernando",        "Ward B", "2026-02-25", <Badge color="#16a34a" label="Active"   />],
        ["PAT-003", "Kamala Perera",         "Ward C", "2026-03-01", <Badge color="#d97706" label="Pending"  />],
        ["PAT-004", "Roshan Mendis",         "Ward A", "2026-03-02", <Badge color="#16a34a" label="Active"   />],
        ["PAT-005", "Dilani Jayawardena",    "Ward D", "2026-03-03", <Badge color="#dc2626" label="Critical" />],
      ]}
    />
  </div>
);

export default PatientsByWardPage;
