import { model, Schema } from "mongoose";

// Define the schema for vital signs
const vitalSignSchema = new Schema(
  {
    // Temperature in degrees Celsius
    temperature: {
      type: Number,
      required: true,
    },
    // Temperature in degrees Celsius
    bloodPressure: {
      type: String,
      required: true,
    },

    // Heart rate in beats per minute (BPM)
    heartRate: {
      type: Number,
      required: true,
    },
     // Respiratory rate in breaths per minute
    respiratoryRate: {
      type: Number,
      required: true,
    },
  },
   
  {
     // Automatically add createdAt and updatedAt timestamps
    timestamps: true,
    // Specify the MongoDB collection name
    collection: "vitalSigns",
  }
);

// Create and export the VitalSign model based on the schema
const VitalSign = model("VitalSign", vitalSignSchema);

export default VitalSign;
