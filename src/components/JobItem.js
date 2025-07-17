import React from "react";

const JobItem = ({ job }) => {
  return (
    <div className="p-4 border rounded shadow-sm flex justify-between items-center">
      <div>
        <h2 className="text-lg font-semibold">{job.title}</h2>
        <p>
          {job.company} - {job.location}
        </p>
        <p className="text-sm text-gray-600">${job.salary.toLocaleString()}</p>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Apply
      </button>
    </div>
  );
};

export default JobItem;
