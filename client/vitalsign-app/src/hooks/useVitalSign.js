import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import {
  ADD_VITAL_SIGN,
  UPDATE_VITAL_SIGN,
  GET_VITAL_SIGN_BY_ID,
  VITAL_SIGNS,
} from "../queries/vitalSignQueries";

// Custom hook for adding a new vital sign
const useAddVitalSign = () => {
  const [addVitalSign] = useMutation(ADD_VITAL_SIGN); // Mutation to add vital sign
  const navigate = useNavigate();  // For programmatic navigation

  // Function to handle adding a vital sign
  const handleAdd = (
    temperature,
    bloodPressure,
    heartRate,
    respiratoryRate,
    refetch // Function to refresh the vital signs list
  ) => {
    addVitalSign({
      variables: {
        temperature: parseFloat(temperature.value),
        bloodPressure: bloodPressure.value,
        heartRate: parseFloat(heartRate.value),
        respiratoryRate: parseFloat(respiratoryRate.value),
      },
    });
// Clear form fields after submission
    temperature.value = "";
    bloodPressure.value = "";
    heartRate.value = "";
    respiratoryRate.value = "";

    navigate("/");
    refetch();
  };

  return handleAdd;
};

// Custom hook for updating an existing vital sign
const useUpdateVitalSign = () => {
  const [updateVitalSign] = useMutation(UPDATE_VITAL_SIGN);
  const navigate = useNavigate();

  const handleUpdate = (
    id,
    temperature,
    bloodPressure,
    heartRate,
    respiratoryRate
  ) => {
    updateVitalSign({
      variables: {
        id,
        temperature: parseFloat(temperature.value),
        bloodPressure: bloodPressure.value,
        heartRate: parseFloat(heartRate.value),
        respiratoryRate: parseFloat(respiratoryRate.value),
      },
    });

    navigate("/");
  };

  return handleUpdate;
};

// Custom hook for fetching a single vital sign by ID
const useGetVitalSignById = (id) => {
  return id
    ? useQuery(GET_VITAL_SIGN_BY_ID, {
        variables: { id },
      })
    : {};
};

// Custom hook for fetching the list of all vital signs
const useGetVitalSigns = () => {
  return useQuery(VITAL_SIGNS);
};

export {
  useAddVitalSign,
  useUpdateVitalSign,
  useGetVitalSignById,
  useGetVitalSigns,
};
