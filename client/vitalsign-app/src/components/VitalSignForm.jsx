import React from "react";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import {
  useAddVitalSign,
  useUpdateVitalSign,
  useGetVitalSignById,
  useGetVitalSigns,
} from "../hooks/useVitalSign";

// VitalSignForm component handles adding or updating vital sign records
const VitalSignForm = () => {
  // Extract the 'id' parameter from the URL to determine if editing or adding a record
  const { id } = useParams();
  // Custom hooks to handle vital sign operations
  const handleAdd = useAddVitalSign();
  const handleUpdate = useUpdateVitalSign();
  const { data } = useGetVitalSignById(id);
  const { refetch } = useGetVitalSigns();

  // Form field references (controlled via ref for direct DOM access)
  let temperature, bloodPressure, heartRate, respiratoryRate;

  const handleSubmit = (e) => {
    e.preventDefault();
    id
     // Update existing vital sign
      ? handleUpdate(id, temperature, bloodPressure, heartRate, respiratoryRate)
      : handleAdd(
        // Add new vital sign and refetch the list
          temperature,
          bloodPressure,
          heartRate,
          respiratoryRate,
          refetch
        );
  };

  return (
    <div>
      {id ? <h2 style={{color:"white"}}>Edit Vital Sign</h2> : <h2>Add Vital Sign</h2>}
      <form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label style={{color:"white"}}>Temperature</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter temperature"
            ref={(node) => {
              temperature = node;
            }}
            defaultValue={data && data.vitalSign.temperature}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label style={{color:"white"}}>Blood Pressure</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter blood pressure"
            ref={(node) => {
              bloodPressure = node;
            }}
            defaultValue={data && data.vitalSign.bloodPressure}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label style={{color:"white"}}>Heart Rate</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter heart rate"
            ref={(node) => {
              heartRate = node;
            }}
            defaultValue={data && data.vitalSign.heartRate}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label style={{color:"white"}}>Respiratory Rate</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter respiratory rate"
            ref={(node) => {
              respiratoryRate = node;
            }}
            defaultValue={data && data.vitalSign.respiratoryRate}
          />
        </Form.Group>
        <button type="submit" className="btn btn-primary mt-3" style={{backgroundColor:"green"}}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default VitalSignForm;
