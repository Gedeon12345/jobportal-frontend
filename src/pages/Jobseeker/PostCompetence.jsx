import React, { useState } from "react";
import PreviewModal from "./components/PreviewModal";
import JobSeekerLayout from "../../components/layout/JobSeekerLayout";
const PostCompetence = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    category: "",
    level: "",
    description: "",
  });

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <JobSeekerLayout activeMenu="post-competence">
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-md p-6 max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Post a New Competence</h2>
          <button
            onClick={() => setIsPreviewOpen(true)}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
          >
            Preview
          </button>
        </div>
        <p className="text-gray-500 mb-6">
          Fill out the form below to create your competence profile
        </p>

        <form className="space-y-4">
          {/* Competence Title */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Competence Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Frontend Development"
              className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g., Yaoundé, CM"
              className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Category + Level */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              >
                <option value="">Select a category</option>
                <option value="IT">IT</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Business">Business</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Level *</label>
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
              >
                <option value="">Select level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your competence and experience"
              rows="5"
              className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition"
          >
            Submit Competence
          </button>
        </form>
      </div>

      {/* Preview Modal */}
      {isPreviewOpen && (
        <PreviewModal
          formData={formData}
          onClose={() => setIsPreviewOpen(false)}
        />
      )}
    </div>
    </JobSeekerLayout>
  );
};

export default PostCompetence;
