import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Student from "./pages/Search/Student";
import Employee from "./pages/Search/Employee";
import InventDashboard from "./pages/Inventory/InventDashboard";
import Stocks from "./pages/Inventory/Stocks";
import History from "./pages/Inventory/History";
import Reports from "./pages/Reports";
import Print from "./pages/Print";
import About from "./pages/About";
import Notification from "./pages/Notification";
import StudentProfile from "./pages/Search/StudentProfile";
import EmployeeProfile from "./pages/Search/EmployeeProfile";
import CreateConsultation from './pages/Search/CreateConsultation';
import WalkIn from './pages/Search/WalkIn';
import Scheduled from './pages/Search/Scheduled';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search/student" element={<Student />} />
        <Route path="/search/employee" element={<Employee />} />
        <Route path="/inventory/dashboard" element={<InventDashboard />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/inventory/stocks" element={<Stocks />} />
        <Route path="/inventory/history" element={<History />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/print" element={<Print />} />
        <Route path="/about" element={<About />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/search/student/:id" element={<StudentProfile />} />
        <Route path="/search/employee/:id" element={<EmployeeProfile />} />
        <Route path="/search/student/:id/create-consultation" element={<CreateConsultation />} />
        <Route path="/search/employee/:id/create-consultation" element={<CreateConsultation />} />
        <Route path="/search/student/:id/create-consultation/walk-in" element={<WalkIn />} />
        <Route path="/search/employee/:id/create-consultation/walk-in" element={<WalkIn />} />
        <Route path="/search/student/:id/create-consultation/scheduled" element={<Scheduled />} />
        <Route path="/search/employee/:id/create-consultation/scheduled" element={<Scheduled />} />
      </Routes>
    </Router>
  );
};

export default App;