import React, { useState } from "react";
import axios from "axios";

const CompetencyModal = ({ close, refresh }) => {
  const [form, setForm] = useState({ title: "", level: "Beginner", years: 0, description: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/jobseeker/competencies", form);
    refresh();
    close();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Add Competency</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="title" placeholder="Skill" onChange={handleChange} className="w-full border p-2 rounded" />
          <select name="level" value={form.level} onChange={handleChange} className="w-full border p-2 rounded">
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
            <option>Expert</option>
          </select>
          <input type="number" name="years" placeholder="Years of experience" onChange={handleChange} className="w-full border p-2 rounded" />
          <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full border p-2 rounded"></textarea>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={close} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompetencyModal;
