import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Student: React.FC = () => {
  // Dummy patient data (replace with real data later)
  const patient = {
    name: "Juan Dela Cruz",
    age: 22,
    gender: "Male",
    contact: "09123456789",
    address: "Fr Selga, Davao City",
    lastVisit: "2025-08-01",
    conditions: ["Hypertension", "Asthma"],
    allergies: ["Penicillin", "Shellfish"]
  };

  const navigate = useNavigate();

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Patient Profile</h1>

      {/* Patient Info */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-medium">{patient.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Age</p>
            <p className="font-medium">{patient.age}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Gender</p>
            <p className="font-medium">{patient.gender}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Contact</p>
            <p className="font-medium">{patient.contact}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm text-gray-500">Address</p>
            <p className="font-medium">{patient.address}</p>
          </div>
        </div>
      </div>

      {/* Medical History */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Medical History</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Last Visit</p>
            <p className="font-medium">{patient.lastVisit}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Conditions</p>
            <p className="font-medium">{patient.conditions.join(", ")}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm text-gray-500">Allergies</p>
            <p className="font-medium">{patient.allergies.join(", ")}</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-[#A3386C] text-white rounded-md hover:bg-[#77536A]"
          onClick={() => alert("Edit Patient")}
        >
          Edit Profile
        </button>
        <button
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
          onClick={() => alert("Print Profile")}
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default Student;