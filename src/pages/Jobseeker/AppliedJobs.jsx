import React from "react";
import JobSeekerLayout from "../../components/layout/JobSeekerLayout";

const AppliedJobs = () => {
  // Mock data (later this will come from backend)
  const appliedJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "Yaoundé, CM",
      status: "Under Review",
      appliedDate: "2025-09-15",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "DesignHub",
      location: "Douala, CM",
      status: "Shortlisted",
      appliedDate: "2025-09-10",
    },
    {
      id: 3,
      title: "Backend Developer",
      company: "SoftSolutions",
      location: "Bafoussam, CM",
      status: "Rejected",
      appliedDate: "2025-09-05",
    },
  ];

  const statusColors = {
    "Under Review": "bg-yellow-100 text-yellow-800",
    Shortlisted: "bg-green-100 text-green-800",
    Rejected: "bg-red-100 text-red-800",
  };

  return (
    <JobSeekerLayout activeMenu="applied-jobs">
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Applied Jobs</h2>
        <p className="text-gray-500 mb-6">
          Here’s a list of jobs you’ve applied to
        </p>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="p-3 text-sm font-medium text-gray-600">Job Title</th>
                <th className="p-3 text-sm font-medium text-gray-600">Company</th>
                <th className="p-3 text-sm font-medium text-gray-600">Location</th>
                <th className="p-3 text-sm font-medium text-gray-600">Status</th>
                <th className="p-3 text-sm font-medium text-gray-600">Applied Date</th>
              </tr>
            </thead>
            <tbody>
              {appliedJobs.map((job) => (
                <tr
                  key={job.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3">{job.title}</td>
                  <td className="p-3">{job.company}</td>
                  <td className="p-3">{job.location}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[job.status]}`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td className="p-3 text-gray-500">{job.appliedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </JobSeekerLayout>
  );
};

export default AppliedJobs;
