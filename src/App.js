import React, { useState } from "react";
import { FaMapMarkerAlt, FaDollarSign, FaBullseye } from "react-icons/fa";
import "./App.css"; // Optional custom styles

const jobData = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "New York",
    salary: 90000,
    company: "TechCorp",
  },
  {
    id: 2,
    title: "Backend Developer",
    location: "San Francisco",
    salary: 120000,
    company: "CodeBase",
  },
  {
    id: 3,
    title: "Full Stack Engineer",
    location: "Remote",
    salary: 110000,
    company: "RemoteWorks",
  },
];

export default function App() {
  const [location, setLocation] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [appliedJobs, setAppliedJobs] = useState([]);

  const handleApply = (jobId) => {
    if (!appliedJobs.includes(jobId)) {
      alert("Applied successfully!");
      setAppliedJobs([...appliedJobs, jobId]);
    }
  };

  const filteredJobs = jobData.filter(
    (job) =>
      job.location.toLowerCase().includes(location.toLowerCase()) &&
      (!minSalary || job.salary >= parseInt(minSalary))
  );

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/office.jpeg')", // Ensure the image is in public folder
      }}
    >
      <div className="min-h-screen bg-black/60 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-3xl bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
          {/* Header */}
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 flex items-center justify-center gap-3">
            <FaBullseye className="text-pink-600" />
            Find Your Dream Job
          </h1>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-gray-700" />
              <input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="border w-full p-2 rounded-md shadow-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <FaDollarSign className="text-gray-700" />
              <input
                type="number"
                placeholder="Min Salary"
                value={minSalary}
                onChange={(e) => setMinSalary(e.target.value)}
                className="border w-full p-2 rounded-md shadow-sm"
              />
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-xl p-5 shadow-md border border-gray-200 transition hover:shadow-lg text-left"
                >
                  <h2 className="text-xl font-semibold text-gray-800">
                    {job.title}
                  </h2>
                  <p className="text-gray-600">
                    {job.company} — {job.location}
                  </p>
                  <p className="text-blue-700 font-medium mt-1">
                    ${job.salary.toLocaleString()}
                  </p>
                  <button
                    onClick={() => handleApply(job.id)}
                    disabled={appliedJobs.includes(job.id)}
                    className={`mt-3 px-5 py-2 rounded-lg text-white font-medium ${
                      appliedJobs.includes(job.id)
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    {appliedJobs.includes(job.id) ? "Applied" : "Apply"}
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-700 text-center mt-6">No jobs found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
