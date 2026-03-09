import { Field, FormCard } from "../components/UI";

const TransferPatientPage = () => (
  <FormCard title="Transfer Patient">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>
      <Field label="Patient ID" placeholder="PAT-0001" />
      <Field label="Patient Name" placeholder="Auto-filled" />
      <Field label="Current Ward" placeholder="Ward A" />
      <Field label="Transfer to Ward" placeholder="Ward B" />
      <Field label="Transfer Date" type="date" />
      <Field label="Authorised by (Doctor)" placeholder="Dr. Smith" />
    </div>
    <Field label="Reason for Transfer" placeholder="Clinical notes..." />
  </FormCard>
);

export default TransferPatientPage;
