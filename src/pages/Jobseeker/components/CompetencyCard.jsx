import React from "react";
import axios from "axios";

const CompetencyCard = ({ competency, refresh }) => {
  const handleDelete = async () => {
    if (window.confirm("Delete this competency?")) {
      await axios.delete(`/api/jobseeker/competencies/${competency._id}`);
      refresh();
    }
  };

  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <h3 className="font-semibold">{competency.title}</h3>
        <p className="text-sm text-gray-500">{competency.level} • {competency.years} yrs</p>
      </div>
      <button onClick={handleDelete} className="text-red-500">Delete</button>
    </div>
  );
};

export default CompetencyCard;
