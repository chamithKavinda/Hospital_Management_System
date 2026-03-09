import { Field, FormCard } from "../components/UI";

const DischargePatientPage = () => (
  <FormCard title="Discharge Patient">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>
      <Field label="Patient ID" placeholder="PAT-0001" />
      <Field label="Patient Name" placeholder="Auto-filled" />
      <Field label="Discharge Date" type="date" />
      <Field label="Discharge Type" placeholder="Regular / AOR / Expired" />
    </div>
    <Field label="Discharge Summary" placeholder="Summary of treatment and follow-up instructions..." />
  </FormCard>
);

export default DischargePatientPage;
