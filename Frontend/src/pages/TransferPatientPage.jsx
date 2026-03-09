import React from "react";
import Select from "react-select";
import { Field, FormCard } from "../components/UI";

const PATIENT_NICS = ["123456789V", "987654321V", "456123789V", "789456123V"];
const WARD_OPTIONS = ["General Ward", "ICU", "Maternity", "Pediatrics", "Emergency"];

const nicOptions = PATIENT_NICS.map(nic => ({
  value: nic,
  label: nic
}));

const TransferPatientPage = () => {
  return (
    <FormCard title="Transfer Patient">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>
        
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

        <div style={{ marginBottom: "16px", display: "flex", flexDirection: "column" }}>
          <label
            style={{
              marginBottom: "6px",
              fontSize: "14px",
              fontWeight: 600,
              color: "#374151"
            }}
          >
            Current Ward
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
              Select current ward
            </option>
            {WARD_OPTIONS.map(ward => (
              <option key={ward} value={ward}>
                {ward}
              </option>
            ))}
          </select>
        </div>

        {/* Transfer Ward */}
        <div style={{ marginBottom: "16px", display: "flex", flexDirection: "column" }}>
          <label
            style={{
              marginBottom: "6px",
              fontSize: "14px",
              fontWeight: 600,
              color: "#374151"
            }}
          >
            Transfer to Ward
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
              Select destination ward
            </option>
            {WARD_OPTIONS.map(ward => (
              <option key={ward} value={ward}>
                {ward}
              </option>
            ))}
          </select>
        </div>

        <Field label="Transfer Date" type="date" />
        <Field label="Authorised by (Doctor)" placeholder="Dr. Smith" />
      </div>

      <Field label="Reason for Transfer" placeholder="Clinical notes..." />
    </FormCard>
  );
};

export default TransferPatientPage;
