import { gql } from "@apollo/client";

// Query to fetch all vital signs
const VITAL_SIGNS = gql`
query {
    vitalSigns {
      bloodPressure
      heartRate
      id
      respiratoryRate
      temperature
    }
  }
`;

// Mutation to add a new vital sign
const ADD_VITAL_SIGN = gql`
 mutation CreateVitalSign($temperature: Float!, $bloodPressure: String!, $heartRate: Float!, $respiratoryRate: Float!) {
    createVitalSign(temperature: $temperature, bloodPressure: $bloodPressure, heartRate: $heartRate, respiratoryRate: $respiratoryRate) {
      id
      temperature
      bloodPressure
      heartRate
      respiratoryRate
    }
  }
`;

// Query to fetch a specific vital sign by ID
const GET_VITAL_SIGN_BY_ID = gql`
  query GetVitalSignById($id: ID!) {
  vitalSign(id: $id) {
    bloodPressure
    heartRate
    id
    respiratoryRate
    temperature
  }
}
`;
// Mutation to update an existing vital sign by ID
const UPDATE_VITAL_SIGN = gql`
  mutation UpdateVitalSign($id: ID!, $temperature: Float!, $bloodPressure: String!, $heartRate: Float!, $respiratoryRate: Float!) {
  updateVitalSign(id: $id, temperature: $temperature, bloodPressure: $bloodPressure, heartRate: $heartRate, respiratoryRate: $respiratoryRate) {
    id
    temperature
    bloodPressure
    heartRate
    respiratoryRate
  }
}

`;

export { VITAL_SIGNS, ADD_VITAL_SIGN, GET_VITAL_SIGN_BY_ID, UPDATE_VITAL_SIGN };
