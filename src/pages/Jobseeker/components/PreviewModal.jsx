import React from "react";

const PreviewModal = ({ formData, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.6)] bg-opacity-10">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Preview Competence</h3>

        <div className="space-y-2">
          <p><strong>Title:</strong> {formData.title || "N/A"}</p>
          <p><strong>Location:</strong> {formData.location || "N/A"}</p>
          <p><strong>Category:</strong> {formData.category || "N/A"}</p>
          <p><strong>Level:</strong> {formData.level || "N/A"}</p>
          <p><strong>Description:</strong></p>
          <p className="text-gray-600 whitespace-pre-line">{formData.description || "N/A"}</p>
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
          >
            Close
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Confirm & Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
