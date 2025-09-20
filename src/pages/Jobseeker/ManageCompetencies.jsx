import React, { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import JobSeekerLayout from "../../components/layout/JobSeekerLayout";

const ManageCompetencies = () => {
  // Mock data (later we’ll fetch this from backend)
  const [competencies, setCompetencies] = useState([
    {
      id: 1,
      title: "Frontend Development",
      category: "Web Development",
      level: "Intermediate",
      description: "Building modern and responsive user interfaces with React.js",
    },
    {
      id: 2,
      title: "UI/UX Design",
      category: "Design",
      level: "Beginner",
      description: "Wireframing and prototyping with Figma and Adobe XD",
    },
    {
      id: 3,
      title: "Backend Development",
      category: "Software Engineering",
      level: "Advanced",
      description: "Building REST APIs using Node.js and Express.js",
    },
  ]);

  // Delete handler
  const handleDelete = (id) => {
    setCompetencies(competencies.filter((comp) => comp.id !== id));
  };

  return (
    <JobSeekerLayout activeMenu="manage-competencies">
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Manage Competencies</h2>
        <p className="text-gray-500 mb-6">
          Here you can view, edit, or delete your added competencies.
        </p>

        {/* Competencies List */}
        <div className="space-y-4">
          {competencies.map((comp) => (
            <div
              key={comp.id}
              className="border rounded-lg p-4 flex justify-between items-start hover:shadow transition"
            >
              <div>
                <h3 className="font-semibold text-lg">{comp.title}</h3>
                <p className="text-gray-500 text-sm">
                  <span className="font-medium">{comp.category}</span> • Level:{" "}
                  {comp.level}
                </p>
                <p className="text-gray-600 mt-2">{comp.description}</p>
              </div>

              <div className="flex space-x-3">
                <button
                  className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600"
                  onClick={() => alert(`Edit ${comp.title} (to implement)`)}
                >
                  <FiEdit size={18} />
                </button>
                <button
                  className="p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600"
                  onClick={() => handleDelete(comp.id)}
                >
                  <FiTrash2 size={18} />
                </button>
              </div>
            </div>
          ))}

          {competencies.length === 0 && (
            <p className="text-gray-500 text-center py-6">
              No competencies added yet.
            </p>
          )}
        </div>
      </div>
    </div>
    </JobSeekerLayout>
  );
};

export default ManageCompetencies;
