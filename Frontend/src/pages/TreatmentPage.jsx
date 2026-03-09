import React from "react";
import Select from "react-select";
import { Field, FormCard } from "../components/UI";

const PATIENT_NICS = ["123456789V", "987654321V", "456123789V", "789456123V"];
const DOCTOR_OPTIONS = ["Dr. Perera", "Dr. Silva", "Dr. Fernando", "Dr. Jayawardena", "Dr. Smith"];

// Convert NICs to react-select format
const nicOptions = PATIENT_NICS.map(nic => ({
  value: nic,
  label: nic
}));

const TreatmentPage = () => (
  <FormCard title="Record Doctor Treatment">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>

      {/* Searchable Patient NIC */}
      <div style={{ marginBottom: "16px", display: "flex", flexDirection: "column" }}>
        <label
          style={{
            marginBottom: "6px",
            fontSize: "14px",
            fontWeight: 600,
            color: "#374151"
          }}
        >
          Patient NIC
        </label>

        <Select
          options={nicOptions}
          placeholder="Search or Select Patient NIC"
          isSearchable
          styles={{
            control: (base) => ({
              ...base,
              minHeight: "40px",
              borderRadius: "8px",
              borderColor: "#d1d5db",
              fontSize: "14px"
            }),
            menu: (base) => ({
              ...base,
              zIndex: 9999
            })
          }}
        />
      </div>

      {/* Doctor Dropdown */}
      <div style={{ marginBottom: "16px", display: "flex", flexDirection: "column" }}>
        <label
          style={{
            marginBottom: "6px",
            fontSize: "14px",
            fontWeight: 600,
            color: "#374151"
          }}
        >
          Doctor Name
        </label>

        <select
          defaultValue=""
          style={{
            padding: "10px 12px",
            borderRadius: "8px",
            border: "1px solid #d1d5db",
            fontSize: "14px",
            outline: "none",
            background: "#fff",
            cursor: "pointer",
            color: "#111827"
          }}
        >
          <option value="" disabled>
            Select Doctor
          </option>
          {DOCTOR_OPTIONS.map(doctor => (
            <option key={doctor} value={doctor}>
              {doctor}
            </option>
          ))}
        </select>
      </div>

      <Field label="Date of Treatment" type="date" />
      <Field label="Next Review Date" type="date" />
    </div>

    <Field label="Medications Prescribed" placeholder="Drug names, doses, frequency..." />
    <Field label="Clinical Notes" placeholder="Observations and treatment plan..." />
  </FormCard>
);

export default TreatmentPage;
