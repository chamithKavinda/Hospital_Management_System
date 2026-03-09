import { Field, FormCard } from "../components/UI";

const AdmitPatientPage = () => (
  <FormCard title="Admit Patient">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>
      <Field label="Patient Full Name" placeholder="John Doe" />
      <Field label="Date of Birth" type="date" />
      <Field label="NIC / Passport No." placeholder="123456789V" />
      <Field label="Contact Number" type="tel" placeholder="+94 77 000 0000" />
      <Field label="Ward" placeholder="Select ward" />
      <Field label="Admission Date" type="date" />
    </div>
    <Field label="Diagnosis / Reason for Admission" placeholder="Brief description..." />
  </FormCard>
);

export default AdmitPatientPage;
