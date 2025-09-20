import { 
    Award, 
    BarChart3, 
    Briefcase, 
    Building2, 
    Clock, 
    FileText, 
    LayoutDashboard, 
    LogOut, 
    MessagesSquare, 
    Plus, 
    Search, 
    Settings, 
    Shield, 
    User, 
    Users 
} from "lucide-react";

export const jobSekerFeatures = [
    {
        icon: Search,
        title: "Smart Job Matching",
        description: "AI-powered algorithm matches you with relevant opportunities based on your skills and preferences."
    },
    {
        icon: FileText,
        title: "Resume Builder",
        description: "Create professional resumes with our intuitive builder and templates designed by experts"
    },
    {
        icon: MessagesSquare,
        title: "Direct Communication",
        description: "Connect directly with hiring managers and recruters through our secure messaging platform"
    },
    {
        icon: Award,
        title: "Skill Assesment",
        description: "Showcase your abilities with verified skill tests and earn badges that employers trust."
    },
]

export const employerFeatures = [
    {
        icon: Users,
        title: "Talent Pool Access",
        description: "Access our vast database or pre-screened candidates and find the perfect fit for yoor team."
    },
    {
        icon: BarChart3,
        title: "Analytics Dashboard",
        description: "Track your hiring perfomance with detailed analytics and insights on candidates angagement"
    },
    {
        icon: Shield,
        title: "Verified Candidates",
        description: "All candidates undeergo background verifications to ensure you're hiring trustworthy professionals."
    },
    {
        icon: Clock,
        title: "Quik Hiring",
        description: "Straemlined hiring process time-to-hire by 60% with automated screening tools."
    }
]

// Navigation items configuration
export const NAVIGATION_MENU = [
    { id: "employer-dashboard", name: "Dashboard", icon: LayoutDashboard },
    { id: "post-job", name: "Post Job", icon: Plus },
    { id: "manage-jobs", name: "Manage Jobs", icon: Briefcase },
    { id: "company-profile", name: "Company Profile", icon: Building2 },
]

export const JOBSEEKER_NAVIGATION_MENU = [
    { id: "jobseeker-dashboard", name: "Dashboard", icon: LayoutDashboard },
    { id: "post-competence", name: "Post Competence", icon: Plus },
    { id: "applied-jobs", name: "Applied Jobs", icon: Briefcase },  
    { id: "manage-competencies", name: "Manage Competencies", icon: Briefcase },
    { id: "profile", name: "Profile", icon: User },
    { id: "settings", name: "Settings", icon: Settings },
]

// Categories and job types
export const CATEGORIES = [
    { value: "Engeneering", label: "Engeneering" },
    { value: "Design", label: "Design" },
    { value: "Marketing", label: "Marketing" },
    { value: "Sales", label: "Sales" },
    { value: "IT & Software", label: "IT & Software" },
    { value: "Customer-serrvice", label: "Customer-serrvice" },
    { value: "Product", label: "Product" },
    { value: "Operations", label: "Operations" },
    { value: "Finance", label: "Finance" },
    { value: "HR", label: "HR" },
    { value: "Other", label: "Other" },
]

export const JOB_TYPES = [
    { value: "Remote", label: "Remote" }, 
    { value: "Full-Time", label: "Full-Time" }, 
    { value: "Part-Time", label: "Part-Time" }, 
    { value: "Contract", label: "Contract" }, 
    { value: "Intenship", label: "Intenship" },    
];

export const SALARY_RANGES = [
    "Less than 100000FCFA",
    "100000FCFA - 500000FCFA",
    "More than 500000FCFA",
]