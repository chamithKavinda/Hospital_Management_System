import React, { useState, useMemo } from "react";
import { Field, FormCard } from "../components/UI";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const WARD_OPTIONS = [
  "General Ward",
  "ICU",
  "Maternity",
  "Pediatrics",
  "Emergency",
];
const TEAM_OPTIONS = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "General Surgery",
  "Internal Medicine",
];

const DEMO_PATIENTS = [
  {
    name: "John Doe",
    contact: "+94 77 123 4567",
    nic: "123456789V",
    date: "2026-03-09",
    ward: "ICU",
    team: "Cardiology",
    description: "Recovering from heart surgery",
  },
  {
    name: "Jane Smith",
    contact: "+94 71 987 6543",
    nic: "987654321V",
    date: "2026-03-08",
    ward: "Maternity",
    team: "Internal Medicine",
    description: "Postpartum care",
  },
  {
    name: "Ali Khan",
    contact: "+94 76 555 8888",
    nic: "A1234567",
    date: "2026-03-07",
    ward: "General Ward",
    team: "Neurology",
    description: "Observation after seizure",
  },
  {
    name: "Sara Fernando",
    contact: "+94 77 444 3333",
    nic: "B9876543",
    date: "2026-03-06",
    ward: "Pediatrics",
    team: "Orthopedics",
    description: "Fractured arm",
  },
  {
    name: "Michael Lee",
    contact: "+94 71 222 1111",
    nic: "C1122334",
    date: "2026-03-05",
    ward: "Emergency",
    team: "General Surgery",
    description: "Accident injury",
  },
];

const AdmitPatientPage = () => {
  const [patients, setPatients] = useState(DEMO_PATIENTS);
  const [searchQuery, setSearchQuery] = useState("");

  const [form, setForm] = useState({
    name: "",
    contact: "",
    nic: "",
    date: "",
    ward: "",
    team: "",
    description: "",
  });

  const handleChange = (field, value) => setForm({ ...form, [field]: value });

  const handleSubmit = () => {
    if (!form.name || !form.nic) return;
    setPatients([...patients, form]);
    setForm({
      name: "",
      contact: "",
      nic: "",
      date: "",
      ward: "",
      team: "",
      description: "",
    });
  };

  const handleDelete = (index) => {
    const patientToDelete = filteredPatients[index];
    const originalIndex = patients.indexOf(patientToDelete);
    setPatients(patients.filter((_, i) => i !== originalIndex));
  };

  const filteredPatients = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return patients;
    return patients.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.nic.toLowerCase().includes(q) ||
        p.ward.toLowerCase().includes(q) ||
        p.team.toLowerCase().includes(q)
    );
  }, [patients, searchQuery]);

  return (
    <div>
      <FormCard title="Admit Patient" onSubmit={handleSubmit}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0 24px",
          }}
        >
          <Field
            label="Patient Full Name"
            placeholder="John Doe"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <Field
            label="Contact Number"
            type="tel"
            placeholder="+94 77 000 0000"
            value={form.contact}
            onChange={(e) => handleChange("contact", e.target.value)}
          />
          <Field
            label="NIC / Passport No."
            placeholder="123456789V"
            value={form.nic}
            onChange={(e) => handleChange("nic", e.target.value)}
          />
          <Field
            label="Admission Date"
            type="date"
            value={form.date}
            onChange={(e) => handleChange("date", e.target.value)}
          />

          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 13, fontWeight: 600 }}>Ward</label>
            <select
              value={form.ward}
              onChange={(e) => handleChange("ward", e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: 8,
                border: "1px solid #e5e7eb",
              }}
            >
              <option value="">Select ward</option>
              {WARD_OPTIONS.map((w) => (
                <option key={w}>{w}</option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 13, fontWeight: 600 }}>
              Responsible Team
            </label>
            <select
              value={form.team}
              onChange={(e) => handleChange("team", e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: 8,
                border: "1px solid #e5e7eb",
              }}
            >
              <option value="">Select team</option>
              {TEAM_OPTIONS.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <Field
          label="Description"
          placeholder="Brief description..."
          value={form.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </FormCard>

      {/* Patients Table */}
      <div style={{ marginTop: 30 }}>
        <div
          style={{
            background: "#fff",
            borderRadius: 14,
            padding: "32px 36px",
            boxShadow: "0 2px 16px rgba(0,0,0,.07)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "2px solid #dbeafe",
              paddingBottom: 14,
              marginBottom: 24,
              gap: 16,
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: 20,
                fontWeight: 700,
                color: "#1e3a8a",
                whiteSpace: "nowrap",
              }}
            >
              Admitted Patients
            </h2>

            <div style={{ position: "relative", width: 300 }}>
              <svg
                style={{
                  position: "absolute",
                  left: 11,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 15,
                  height: 15,
                  color: "#9ca3af",
                  pointerEvents: "none",
                }}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                placeholder="Search name, NIC, ward, team..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px 32px",
                  border: "1.5px solid #e5e7eb",
                  borderRadius: 8,
                  fontSize: 13,
                  color: "#111827",
                  outline: "none",
                  background: "#fafafa",
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  style={{
                    position: "absolute",
                    right: 9,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#6b7280",
                    fontSize: 15,
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <table
            style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: "0 12px",
            }}
          >
            <thead>
              <tr style={{ background: "#1e40af", color: "#fff" }}>
                {["Name", "NIC", "Ward", "Team", "Date", "Action"].map((h) => (
                  <th key={h} style={{ padding: 10, textAlign: "center" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filteredPatients.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    style={{
                      textAlign: "center",
                      padding: 20,
                      color: "#6b7280",
                    }}
                  >
                    {patients.length === 0
                      ? "No patients admitted yet"
                      : "No patients match your search"}
                  </td>
                </tr>
              ) : (
                filteredPatients.map((p, index) => (
                  <tr
                    key={index}
                    style={{
                      background: index % 2 === 0 ? "#f9fafb" : "#fff",
                      textAlign: "center",
                      verticalAlign: "middle",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    <td>{p.name}</td>
                    <td>{p.nic}</td>
                    <td>{p.ward}</td>
                    <td>{p.team}</td>
                    <td>{p.date}</td>
                    <td
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 12,
                      }}
                    >
                      <FiEdit
                        size={20}
                        color="#f59e0b"
                        style={{ cursor: "pointer" }}
                        onClick={() => alert("Update clicked")}
                      />
                      <FiTrash2
                        size={20}
                        color="#ef4444"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleDelete(index)}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdmitPatientPage;
