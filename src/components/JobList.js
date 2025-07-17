import React from "react";
import JobItem from "./JobItem";

const JobList = ({ jobs }) => {
  return (
    <div className="space-y-4">
      {jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        jobs.map((job) => <JobItem key={job.id} job={job} />)
      )}
    </div>
  );
};

export default JobList;
