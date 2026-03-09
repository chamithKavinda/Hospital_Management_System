import { Field, FormCard } from "../components/UI";

const TreatmentPage = () => (
  <FormCard title="Record Doctor Treatment">
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>
      <Field label="Patient ID" placeholder="PAT-0001" />
      <Field label="Doctor Name" placeholder="Dr. Perera" />
      <Field label="Date of Treatment" type="date" />
      <Field label="Next Review Date" type="date" />
    </div>
    <Field label="Medications Prescribed" placeholder="Drug names, doses, frequency..." />
    <Field label="Clinical Notes" placeholder="Observations and treatment plan..." />
  </FormCard>
);

export default TreatmentPage;
