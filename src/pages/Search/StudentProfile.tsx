import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
    Menu,
    Plus
} from 'lucide-react';

const StudentProfile: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [isInventoryOpen, setInventoryOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('medicalHistory');

    const handleNavigation = (path: string): void => {
        navigate(path);
    };

    const handleLogout = (): void => {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
    };

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    // Mock student data
    const studentData: Record<string, any> = {
        "1": {
            name: "Juan Dela Cruz",
            age: 20,
            gender: "Male",
            course: "BSIT",
            address: "Fr Selga, Davao City",
            contact: "09123456789",
            lastVisit: "2025-08-01",
            medicalHistory: [
                { condition: "Asthma", diagnosed: "2023-01-15" },
                { condition: "Allergy to Penicillin", diagnosed: "2022-05-10" }
            ],
            consultations: [
                { date: "2025-08-01", notes: "Complained of headache and fatigue." },
                { date: "2025-07-15", notes: "Routine checkup, no issues found." }
            ],
            remarks: [
                { date: "2025-08-01", note: "Prescribed pain reliever." },
                { date: "2025-07-15", note: "Advised to drink more water." }
            ],
            additionalProfile: {
                lastName: "Dela Cruz",
                firstName: "Juan",
                middleInitial: "A",
                suffix: "Jr.",
                dateOfBirth: "2005-03-15",
                nationality: "Filipino",
                civilStatus: "Single",
                address: "Fr Selga, Davao City",
                guardianName: "Maria Dela Cruz",
                guardianContact: "09123456780",
                bloodType: "O+",
                height: "170 cm",
                religion: "Catholic",
                eyeColor: "Brown",
                chronicConditions: ["Asthma"],
                knownAllergies: ["Penicillin"],
                disabilities: "None",
                immunizationHistory: ["Hepatitis B", "MMR"],
                geneticConditions: "None"
            }
        },
        "2": {
            name: "Maria Santos",
            age: 19,
            gender: "Female",
            course: "BSN",
            address: "Toril, Davao City",
            contact: "09123456788",
            lastVisit: "2025-07-28",
            medicalHistory: [
                { condition: "Migraine", diagnosed: "2023-03-20" }
            ],
            consultations: [
                { date: "2025-07-28", notes: "Complained of severe headache." }
            ],
            remarks: [
                { date: "2025-07-28", note: "Prescribed migraine medication." }
            ],
            additionalProfile: {
                lastName: "Santos",
                firstName: "Maria",
                middleInitial: "B",
                suffix: "",
                dateOfBirth: "2006-07-20",
                nationality: "Filipino",
                civilStatus: "Single",
                address: "Toril, Davao City",
                guardianName: "Roberto Santos",
                guardianContact: "09123456781",
                bloodType: "A+",
                height: "160 cm",
                religion: "Born Again Christian",
                eyeColor: "Black",
                chronicConditions: ["Migraine"],
                knownAllergies: [],
                disabilities: "None",
                immunizationHistory: ["Hepatitis B", "Varicella"],
                geneticConditions: "None"
            }
        }
    };

    const student = studentData[id || ""];

    if (!student) {
        return (
            <div className="flex h-screen items-center justify-center">
                <p className="text-xl text-gray-600">Student not found</p>
            </div>
        );
    }

    // Add the type annotation to fix the error
    const tabContent: Record<string, React.ReactNode> = {
        medicalHistory: (
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#D4A5B8] text-black">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Condition</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Diagnosed</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {student.medicalHistory.map((item: any, index: number) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.condition}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.diagnosed}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ),
        consultations: (
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#D4A5B8] text-black">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Notes</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {student.consultations.map((item: any, index: number) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.date}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{item.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ),
        remarks: (
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#D4A5B8] text-black">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Note</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {student.remarks.map((item: any, index: number) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.date}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{item.note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ),
        additionalProfile: (
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-gray-500">Last Name</p>
                        <p className="font-medium">{student.additionalProfile.lastName}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">First Name</p>
                        <p className="font-medium">{student.additionalProfile.firstName}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Middle Initial</p>
                        <p className="font-medium">{student.additionalProfile.middleInitial}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Suffix</p>
                        <p className="font-medium">{student.additionalProfile.suffix || "N/A"}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Date of Birth</p>
                        <p className="font-medium">{student.additionalProfile.dateOfBirth}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Nationality/Citizenship</p>
                        <p className="font-medium">{student.additionalProfile.nationality}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Civil Status</p>
                        <p className="font-medium">{student.additionalProfile.civilStatus}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="font-medium">{student.additionalProfile.address}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Guardian's Name</p>
                        <p className="font-medium">{student.additionalProfile.guardianName}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Guardian's Contact Number</p>
                        <p className="font-medium">{student.additionalProfile.guardianContact}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Blood Type</p>
                        <p className="font-medium">{student.additionalProfile.bloodType}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Height</p>
                        <p className="font-medium">{student.additionalProfile.height}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Religion/Faith</p>
                        <p className="font-medium">{student.additionalProfile.religion}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Eye Color</p>
                        <p className="font-medium">{student.additionalProfile.eyeColor}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Chronic Condition(s)</p>
                        <p className="font-medium">{student.additionalProfile.chronicConditions.join(", ") || "None"}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Known Allergies</p>
                        <p className="font-medium">{student.additionalProfile.knownAllergies.join(", ") || "None"}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Disabilities</p>
                        <p className="font-medium">{student.additionalProfile.disabilities}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Immunization History</p>
                        <p className="font-medium">{student.additionalProfile.immunizationHistory.join(", ") || "None"}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Genetic Conditions</p>
                        <p className="font-medium">{student.additionalProfile.geneticConditions}</p>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <>
            <div className="flex h-screen bg-gray-100">
                {/* Sidebar */}
                <div className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-[#3D1528] to-[#A3386C] text-white z-20 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
                    {/* Profile & Navigation */}
                    <div className="p-6 mt-4 border-b border-white/50">
                        <div className="flex flex-col items-center mb-2">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                <User className="w-6 h-6 text-[#A3386C]" />
                            </div>
                            <div className={`flex flex-col items-center transition-opacity duration-200 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>
                                <p className="text-[20px] font-semibold">John Doe</p>
                                <p className="text-sm">Nurse</p>
                            </div>
                        </div>
                        <p className={`text-center text-xs transition-opacity duration-200 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>Fr Selga, Davao City</p>
                    </div>

                    <nav className="mt-8">
                        <div className="px-4 space-y-2">
                            {/* Dashboard */}
                            <div className="flex items-center px-4 py-3 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/')}>
                                <LayoutDashboard className="w-5 h-5 text-white flex-shrink-0" />
                                {isSidebarOpen && <p className="text-sm font-medium text-white ml-3 whitespace-nowrap">Dashboard</p>}
                            </div>

                            {/* Search Submenu - Student Active */}
                            <div>
                                <div className="flex items-center px-4 py-3 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => setSearchOpen(!isSearchOpen)}>
                                    <Search className="w-5 h-5 text-white flex-shrink-0" />
                                    {isSidebarOpen && (
                                        <div className="flex justify-between w-full items-center">
                                            <p className="text-sm text-white ml-3 whitespace-nowrap">Search</p>
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSearchOpen ? 'rotate-180' : ''}`} />
                                        </div>
                                    )}
                                </div>
                                {isSidebarOpen && isSearchOpen && (
                                    <div className="mt-1 space-y-1 pl-8">
                                        <div className="flex items-center p-2 bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/search/student')}>
                                            <GraduationCap className="w-5 h-5 text-white flex-shrink-0" />
                                            <p className="text-sm text-white ml-3 whitespace-nowrap">Student</p>
                                        </div>
                                        <div className="flex items-center p-2 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/search/employee')}>
                                            <Briefcase className="w-5 h-5 text-white flex-shrink-0" />
                                            <p className="text-sm text-white ml-3 whitespace-nowrap">Employee</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Inventory Submenu */}
                            <div>
                                <div className="flex items-center px-4 py-3 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => setInventoryOpen(!isInventoryOpen)}>
                                    <Archive className="w-5 h-5 text-white flex-shrink-0" />
                                    {isSidebarOpen && (
                                        <div className="flex justify-between w-full items-center">
                                            <p className="text-sm text-white ml-3 whitespace-nowrap">Inventory</p>
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isInventoryOpen ? 'rotate-180' : ''}`} />
                                        </div>
                                    )}
                                </div>
                                {isSidebarOpen && isInventoryOpen && (
                                    <div className="mt-1 space-y-1 pl-8">
                                        <div className="flex items-center p-2 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/inventory/dashboard')}>
                                            <LayoutDashboard className="w-5 h-5 text-white flex-shrink-0" />
                                            <p className="text-sm text-white ml-3 whitespace-nowrap">Dashboard</p>
                                        </div>
                                        <div className="flex items-center p-2 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/inventory/stocks')}>
                                            <Archive className="w-5 h-5 text-white flex-shrink-0" />
                                            <p className="text-sm text-white ml-3 whitespace-nowrap">Stocks</p>
                                        </div>
                                        <div className="flex items-center p-2 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/inventory/history')}>
                                            <History className="w-5 h-5 text-white flex-shrink-0" />
                                            <p className="text-sm text-white ml-3 whitespace-nowrap">History</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center px-4 py-3 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/Reports')}>
                                <FileText className="w-5 h-5 text-white flex-shrink-0" />
                                {isSidebarOpen && <p className="text-sm text-white ml-3 whitespace-nowrap">Reports</p>}
                            </div>

                            <div className="flex items-center px-4 py-3 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/Print')}>
                                <Printer className="w-5 h-5 text-white flex-shrink-0" />
                                {isSidebarOpen && <p className="text-sm text-white ml-3 whitespace-nowrap">Print</p>}
                            </div>

                            <div className="flex items-center px-4 py-3 hover:bg-[#77536A] rounded-lg cursor-pointer" onClick={() => handleNavigation('/About')}>
                                <ShieldQuestion className="w-5 h-5 text-white flex-shrink-0" />
                                {isSidebarOpen && <p className="text-sm text-white ml-3 whitespace-nowrap">About</p>}
                            </div>
                        </div>
                    </nav>

                    <div className="absolute bottom-6 left-0 right-0 px-4">
                        <div className={`flex items-center p-3 hover:bg-[#77536A] rounded-lg cursor-pointer ${!isSidebarOpen && 'justify-center'}`} onClick={handleLogout}>
                            <div className="w-5 h-5 flex-shrink-0">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M16 13v-2H7V8l-5 4 5 4v-3z"/><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"/></svg>
                            </div>
                            {isSidebarOpen && <p className="text-sm ml-3 whitespace-nowrap">Logout</p>}
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
                    {/* Header */}
                    <header className="bg-gradient-to-b from-[#3D1528] to-[#A3386C] shadow-sm border-b border-gray-200 px-7 py-3 z-10">
                        <div className="flex items-center justify-between">
                            <button onClick={toggleSidebar} className="text-white p-2 rounded-full hover:bg-white/20"><Menu className="w-6 h-6" /></button>
                            <div className="flex items-center"><img src="/Logo.png" alt="UIC Logo" className="w-15 h-15 mr-2"/><h1 className="text-white text-[28px] font-semibold">MEDICARE</h1></div>
                            <div className="flex items-center">
                                <Bell className="w-6 h-6 text-white cursor-pointer mr-4" />
                            </div>
                        </div>
                    </header>

                    {/* Profile Content */}
                    <main className="flex-1 p-6 overflow-y-auto bg-white">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-3xl font-bold text-gray-800">Patient Profile: {student.name}</h1>
                            <button
                                className="bg-[#A3386C] text-white p-2 rounded-full hover:bg-[#77536A] relative group"
                                onClick={() => navigate(`/search/student/${id}/create-consultation`)}
                            >
                                <Plus className="w-5 h-5" />
                                <span className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2">
                                    Add new consultation
                                </span>
                            </button>
                        </div>

                        {/* Patient Info */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">Personal Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-500">Name</p>
                                    <p className="font-medium">{student.name}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Age</p>
                                    <p className="font-medium">{student.age}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Gender</p>
                                    <p className="font-medium">{student.gender}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Course</p>
                                    <p className="font-medium">{student.course}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Contact</p>
                                    <p className="font-medium">{student.contact}</p>
                                </div>
                                <div className="md:col-span-2">
                                    <p className="text-sm text-gray-500">Address</p>
                                    <p className="font-medium">{student.address}</p>
                                </div>
                            </div>
                        </div>

                        {/* Tabbed Interface */}
                        <div className="mb-8">
                            <div className="flex space-x-4 mb-4">
                                <button
                                    className={`px-4 py-2 rounded-lg ${activeTab === 'medicalHistory' ? 'bg-[#D4A5B8]' : 'hover:bg-[#D4A5B8]'}`}
                                    onClick={() => setActiveTab('medicalHistory')}
                                >
                                    Medical History
                                </button>
                                <button
                                    className={`px-4 py-2 rounded-lg ${activeTab === 'consultations' ? 'bg-[#D4A5B8]' : 'hover:bg-[#D4A5B8]'}`}
                                    onClick={() => setActiveTab('consultations')}
                                >
                                    Past Consultations
                                </button>
                                <button
                                    className={`px-4 py-2 rounded-lg ${activeTab === 'remarks' ? 'bg-[#D4A5B8]' : 'hover:bg-[#D4A5B8]'}`}
                                    onClick={() => setActiveTab('remarks')}
                                >
                                    Remark Records
                                </button>
                                <button
                                    className={`px-4 py-2 rounded-lg ${activeTab === 'additionalProfile' ? 'bg-[#D4A5B8]' : 'hover:bg-[#D4A5B8]'}`}
                                    onClick={() => setActiveTab('additionalProfile')}
                                >
                                    Additional Profile
                                </button>
                            </div>
                            <div>{tabContent[activeTab]}</div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default StudentProfile;