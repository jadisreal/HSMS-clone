import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Bell, User } from 'lucide-react';

const WalkIn: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    
    // Form states
    const [chiefComplaint, setChiefComplaint] = useState('');
    const [vitalSigns, setVitalSigns] = useState({
        bloodPressure: '',
        heartRate: '',
        temperature: '',
        respiratoryRate: ''
    });
    const [diagnosis, setDiagnosis] = useState('');
    const [treatment, setTreatment] = useState('');
    const [remarks, setRemarks] = useState('');

    const handleBack = () => {
        navigate(-1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log({
            chiefComplaint,
            vitalSigns,
            diagnosis,
            treatment,
            remarks
        });
        // Navigate back or to success page
        navigate(`/search/student/${id}`);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-gradient-to-b from-[#3D1528] to-[#A3386C] shadow-sm px-6 py-3">
                <div className="flex items-center justify-between">
                    <button onClick={handleBack} className="text-white p-2 rounded-full hover:bg-white/20">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div className="flex items-center">
                        <img src="/Logo.png" alt="UIC Logo" className="w-12 h-12 mr-2"/>
                        <h1 className="text-white text-2xl font-semibold">MEDICARE</h1>
                    </div>
                    <div className="flex items-center">
                        <Bell className="w-6 h-6 text-white cursor-pointer" />
                        <User className="w-6 h-6 text-white ml-4 cursor-pointer" />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Walk-in Consultation</h1>
                
                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
                    {/* Chief Complaint */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Chief Complaint
                        </label>
                        <textarea
                            value={chiefComplaint}
                            onChange={(e) => setChiefComplaint(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A3386C]"
                            rows={3}
                            required
                        />
                    </div>

                    {/* Vital Signs */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Vital Signs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Blood Pressure
                                </label>
                                <input
                                    type="text"
                                    value={vitalSigns.bloodPressure}
                                    onChange={(e) => setVitalSigns({...vitalSigns, bloodPressure: e.target.value})}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A3386C]"
                                    placeholder="e.g., 120/80"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Heart Rate (BPM)
                                </label>
                                <input
                                    type="number"
                                    value={vitalSigns.heartRate}
                                    onChange={(e) => setVitalSigns({...vitalSigns, heartRate: e.target.value})}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A3386C]"
                                    placeholder="e.g., 72"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Temperature (°C)
                                </label>
                                <input
                                    type="number"
                                    step="0.1"
                                    value={vitalSigns.temperature}
                                    onChange={(e) => setVitalSigns({...vitalSigns, temperature: e.target.value})}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A3386C]"
                                    placeholder="e.g., 36.5"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Respiratory Rate
                                </label>
                                <input
                                    type="number"
                                    value={vitalSigns.respiratoryRate}
                                    onChange={(e) => setVitalSigns({...vitalSigns, respiratoryRate: e.target.value})}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A3386C]"
                                    placeholder="e.g., 16"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Diagnosis */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Diagnosis
                        </label>
                        <textarea
                            value={diagnosis}
                            onChange={(e) => setDiagnosis(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A3386C]"
                            rows={3}
                        />
                    </div>

                    {/* Treatment */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Treatment/Medication
                        </label>
                        <textarea
                            value={treatment}
                            onChange={(e) => setTreatment(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A3386C]"
                            rows={3}
                        />
                    </div>

                    {/* Remarks */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Remarks
                        </label>
                        <textarea
                            value={remarks}
                            onChange={(e) => setRemarks(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A3386C]"
                            rows={3}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-[#A3386C] text-white px-6 py-3 rounded-lg hover:bg-[#77536A] font-semibold"
                        >
                            Save Consultation
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default WalkIn;