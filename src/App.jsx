import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import './index.css'
import LandingPage from "./pages/LandingPage/LandingPage";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import JobSeekerDashboard from "./pages/Jobseeker/JobSeekerDashboard";
import JobDetails from "./pages/Jobseeker/JobDetails";
import SavedJobs from "./pages/Jobseeker/SavedJobs";
import UserProfile from "./pages/Jobseeker/UserProfile";
import ProtectedRoute from "./routes/ProtectedRoute";
import EmployerDashboard from "./pages/Employer/EmployerDashboard";
import JobPostingForm from "./pages/Employer/JobPostingForm";
import ManageJobs from "./pages/Employer/ManageJobs";
import ApplicationViewer from "./pages/Employer/ApplicationViewer";
import EmployerProfilePages from "./pages/Employer/EmployerProfilePages";
import { AuthProvider } from "./context/AuthContext";
import JobseekerDashboard from "./pages/Jobseeker/JobSeekerDashboard2";
import PostCompetence from "./pages/Jobseeker/PostCompetence";
import AppliedJobs from "./pages/Jobseeker/AppliedJobs"; 
import ManageCompetencies from "./pages/Jobseeker/ManageCompetencies";
import AboutUs from "./pages/LandingPage/AboutUs";

const App = () => {
  return (
    <AuthProvider>
 
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="/find-jobs" element={<JobSeekerDashboard />} />
        <Route path="/job/:jobId" element={<JobDetails />} />
        <Route path="/saved-jobs" element={<SavedJobs />} />
        <Route path="/profile" element={<UserProfile />} />

        {/* Jobseeker Routes */}
        <Route element={<ProtectedRoute requiredRole="jobseeker" />} >
          <Route path="/jobseeker-dashboard" element={<JobseekerDashboard />} />
          <Route path="/post-competence" element={<PostCompetence />} />
          <Route path="/applied-jobs" element={<AppliedJobs />} />
          <Route path="/manage-competencies" element={<ManageCompetencies />} />
        </Route>

        {/* Employer Routes */}
        <Route element={<ProtectedRoute requiredRole="employer" />} >
          <Route path="/employer-dashboard" element={<EmployerDashboard />} />
          <Route path="/post-job" element={<JobPostingForm />} />
          <Route path="/manage-jobs" element={<ManageJobs />} />
          <Route path="/applicants" element={<ApplicationViewer />} />
          <Route path="/company-profile" element={<EmployerProfilePages />} />
        </Route>

        {/* Catch all routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>

      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          }
        }} 
      />
    </AuthProvider>
  )
}

export default App
