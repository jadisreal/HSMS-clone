import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Bell,
    User,
    LayoutDashboard,
    Archive,
    FileText,
    History,
    ShieldQuestion,
    Search,
    Printer,
    GraduationCap,
    Briefcase,
    ChevronDown,
    Menu
} from 'lucide-react';

const CreateConsultation: React.FC = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1); // Go back to previous page
    };

    return (
        <>
            <div className="flex h-screen bg-gray-100">
                {/* Sidebar */}
                <div className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-[#3D1528] to-[#A3386C] text-white z-20 transition-all duration-300 ease-in-out w-64`}>
                    {/* Profile & Navigation */}
                    <div className="p-6 mt-4 border-b border-white/50">
                        <div className="flex flex-col items-center mb-2">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                <User className="w-6 h-6 text-[#A3386C]" />
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-[20px] font-semibold">John Doe</p>
                                <p className="text-sm">Nurse</p>
                            </div>
                        </div>
                        <p className="text-center text-xs">Fr Selga, Davao City</p>
                    </div>

                    <nav className="mt-8">
                        {/* Dashboard, Search, Inventory, Reports, Print, About */}
                        {/* ... (same as before) */}
                    </nav>

                    <div className="absolute bottom-6 left-0 right-0 px-4">
                        <div className="flex items-center p-3 hover:bg-[#77536A] rounded-lg cursor-pointer justify-center">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M16 13v-2H7V8l-5 4 5 4v-3z"/><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"/></svg>
                            <p className="text-sm ml-3 whitespace-nowrap">Logout</p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col transition-all duration-300 ease-in-out ml-64">
                    {/* Header */}
                    <header className="bg-gradient-to-b from-[#3D1528] to-[#A3386C] shadow-sm border-b border-gray-200 px-7 py-3 z-10">
                        <div className="flex items-center justify-between">
                            <button onClick={handleBack} className="text-white p-2 rounded-full hover:bg-white/20">
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <div className="flex items-center"><img src="/Logo.png" alt="UIC Logo" className="w-15 h-15 mr-2"/><h1 className="text-white text-[28px] font-semibold">MEDICARE</h1></div>
                            <div className="flex items-center"><Bell className="w-6 h-6 text-white cursor-pointer mr-4" /></div>
                        </div>
                    </header>

                    {/* Consultation Type Selection */}
                    <main className="flex-1 p-6 overflow-y-auto bg-white">
                        <h1 className="text-3xl font-bold text-gray-800 mb-6">Create Consultation Record</h1>

                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">Consultation Type:</h2>
                            <div className="space-y-4">
                                <button
                                    className="bg-[#A3386C] text-white p-4 rounded-lg hover:bg-[#77536A] w-full"
                                    onClick={() => alert("Walk-in consultation selected")}
                                >
                                    Walk-in
                                </button>
                                <button
                                    className="bg-[#A3386C] text-white p-4 rounded-lg hover:bg-[#77536A] w-full"
                                    onClick={() => alert("Scheduled consultation selected")}
                                >
                                    Scheduled for later
                                </button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default CreateConsultation;