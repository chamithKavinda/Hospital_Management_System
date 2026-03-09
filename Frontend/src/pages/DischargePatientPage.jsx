import React from "react";
import Select from "react-select";
import { Field, FormCard } from "../components/UI";

const PATIENT_NICS = ["123456789V", "987654321V", "456123789V", "789456123V"];
const DISCHARGE_TYPES = ["Regular", "AOR", "Expired"];

// Convert NIC list to react-select format
const nicOptions = PATIENT_NICS.map(nic => ({
  value: nic,
  label: nic
}));

const DischargePatientPage = () => (
  <FormCard title="Discharge Patient">
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
          placeholder="Search Patient NIC"
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

      <Field label="Patient Name" placeholder="Auto-filled" />
      <Field label="Discharge Date" type="date" />

      {/* Discharge Type */}
      <div style={{ marginBottom: "16px", display: "flex", flexDirection: "column" }}>
        <label
          style={{
            marginBottom: "6px",
            fontSize: "14px",
            fontWeight: 600,
            color: "#374151"
          }}
        >
          Discharge Type
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
            Select discharge type
          </option>
          {DISCHARGE_TYPES.map(type => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </div>

    <Field
      label="Discharge Summary"
      placeholder="Summary of treatment and follow-up instructions..."
    />
  </FormCard>
);

export default DischargePatientPage;
