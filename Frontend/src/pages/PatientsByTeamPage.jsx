import { Badge, Table } from "../components/UI";

const PatientsByTeamPage = () => (
  <div style={{
    background: "#fff", borderRadius: 14, padding: "32px 36px",
    boxShadow: "0 2px 16px rgba(0,0,0,.07)",
  }}>
    <h2 style={{
      margin: "0 0 24px", fontSize: 20, fontWeight: 700, color: "#1e3a8a",
      borderBottom: "2px solid #dbeafe", paddingBottom: 14,
    }}>
      Patients by Team
    </h2>
    <Table
      headers={["Patient ID", "Name", "Assigned Team", "Lead Doctor", "Status"]}
      rows={[
        ["PAT-001", "Amara Silva",           "Team Alpha", "Dr. Perera",        <Badge color="#16a34a" label="Active"  />],
        ["PAT-002", "Nimal Fernando",         "Team Beta",  "Dr. Silva",         <Badge color="#16a34a" label="Active"  />],
        ["PAT-003", "Kamala Perera",          "Team Gamma", "Dr. Gunawardena",   <Badge color="#d97706" label="Pending" />],
        ["PAT-006", "Tharanga Weerasinghe",   "Team Alpha", "Dr. Perera",        <Badge color="#16a34a" label="Active"  />],
      ]}
    />
  </div>
);

export default PatientsByTeamPage;
