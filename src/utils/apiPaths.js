export const BASE_URL = "http://localhost:5000";

export const API_PATHS = {
    AUTH: {
        REGISTER: "/api/auth/register", // signUP
        LOGIN: "/api/auth/login", // Authenticate user & return JWT Token
        GET_PROFILE: "/api/auth/profile", // Get logged-in user details
        UPDATE_PROFILE: "/api/user/profile", // Update profile details
        DELETE_RESUME: "/api/user/resume", // Delete Resume
    },

    DASHBOARD: {
        OVERVIEW: "/api/analytics/overview",
    }, 

    JOBSEEKER: {
        GET_ALL_COMPETENCIES: "/api/jobseeker/competencies",
        POST_COMPETENCE: "/api/jobseeker/competencies",
        UPDATE_COMPETENCE: (id) => `/api/jobseeker/competencies/${id}`,
        DELETE_COMPETENCE: (id) => `/api/jobseeker/competencies/${id}`,
        GET_ALL_APPLICATIONS: "/api/jobseeker/applications",
        GET_ALL_SAVED_JOBS: "/api/jobseeker/saved-jobs",
        GET_ALL_APPLIED_JOBS: "/api/jobseeker/applied-jobs",
    },

    JOBS: {
        GET_ALL_JOBS: "/api/jobs",
        GET_JOB_BY_ID: (id) => `/api/jobs/${id}`,
        POST_JOB: "/api/jobs", 
        GET_JOBS_EMPLOYER: "/api/jobs/get-jobs-employer",
        GET_JOB_BY_ID: (id) => `/api/jobs/${id}`,
        UPDATE_JOB: (id) => `/api/jobs/${id}`,
        TOGGLE_CLOSE: (id) => `/api/jobs/${id}/toggle-close`,
        DELETE_JOB: (id) => `/api/jobs/${id}`,
        DELETE_JOB: (id) => `/api/jobs/${id}`,

        SAVE_JOB: (id) => `/api/save-jobs/${id}`, 
        UNSAVE_JOB: (id) => `/api/save-jobs/${id}`,
        GET_SAVED_JOBS: "api/save-jobs/my",
    },

    APPLICATIONS: {
        APPLY_TO_JOB: (id) => `/api/applications/${id}`,
        GET_ALL_APPLICATIONS: (id) => `/api/applications/job/${id}`,
        UPDATE_STATUS: (id) => `api/applications/${id}/status`,
    },

    IMAGE: {
        UPLOAD_IMAGE: "/api/auth/upload-image", // Upload profile picture
    },
};