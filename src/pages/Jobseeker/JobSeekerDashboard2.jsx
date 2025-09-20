import React from "react";
import JobSeekerLayout from "../../components/layout/JobSeekerLayout";

const Dashboard = () => {
  return (
    <JobSeekerLayout activeMenu="jobseeker-dashboard">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Competencies */}
        <div className="bg-blue-500 text-white rounded-xl p-6 shadow-md">
          <h3 className="text-lg font-medium">My Competencies</h3>
          <p className="text-3xl font-bold mt-2">5</p>
          <span className="text-sm">+2 this week</span>
        </div>

        {/* Jobs Applied */}
        <div className="bg-green-500 text-white rounded-xl p-6 shadow-md">
          <h3 className="text-lg font-medium">Jobs Applied</h3>
          <p className="text-3xl font-bold mt-2">8</p>
          <span className="text-sm">0% since last week</span>
        </div>

        {/* Contacted by Employers */}
        <div className="bg-purple-500 text-white rounded-xl p-6 shadow-md">
          <h3 className="text-lg font-medium">Employers Contacted</h3>
          <p className="text-3xl font-bold mt-2">2</p>
          <span className="text-sm">+1 this week</span>
        </div>
      </div>

      {/* Recent Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Recent Competencies */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Recent Competencies</h3>
            <button className="text-blue-600 text-sm hover:underline">
              View all
            </button>
          </div>

          <ul className="space-y-3">
            <li className="flex items-center justify-between">
              <div>
                <p className="font-medium">Web Development</p>
                <span className="text-sm text-gray-500">Added 3 days ago</span>
              </div>
              <span className="px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full">
                Active
              </span>
            </li>
            <li className="flex items-center justify-between">
              <div>
                <p className="font-medium">Graphic Design</p>
                <span className="text-sm text-gray-500">Added 5 days ago</span>
              </div>
              <span className="px-3 py-1 text-xs bg-green-100 text-green-600 rounded-full">
                Active
              </span>
            </li>
          </ul>
        </div>

        {/* Recent Applications */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Recent Applications</h3>
            <button className="text-blue-600 text-sm hover:underline">
              View all
            </button>
          </div>

          <ul className="space-y-3">
            <li className="flex items-center justify-between">
              <div>
                <p className="font-medium">Software Engineer</p>
                <span className="text-sm text-gray-500">
                  Applied 2 days ago
                </span>
              </div>
              <span className="text-xs text-gray-400">Pending</span>
            </li>
            <li className="flex items-center justify-between">
              <div>
                <p className="font-medium">UI/UX Designer</p>
                <span className="text-sm text-gray-500">
                  Applied 4 days ago
                </span>
              </div>
              <span className="text-xs text-green-500">Shortlisted</span>
            </li>
            <li className="flex items-center justify-between">
              <div>
                <p className="font-medium">Backend Developer</p>
                <span className="text-sm text-gray-500">
                  Applied 6 days ago
                </span>
              </div>
              <span className="text-xs text-red-500">Rejected</span>
            </li>
          </ul>
        </div>
      </div>
    </JobSeekerLayout>
  );
};

export default Dashboard;
