import { Grid } from "@mui/material";
import JobCard from "./JobCard";

const dummyJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "ABC Tech",
    location: "New York, NY",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    experience: "2+ years",
    applyLink: "#",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "XYZ Solutions",
    location: "San Francisco, CA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    experience: "3+ years",
    applyLink: "#",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "XYZ Solutions",
    location: "San Francisco, CA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    experience: "3+ years",
    applyLink: "#",
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "XYZ Solutions",
    location: "San Francisco, CA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    experience: "3+ years",
    applyLink: "#",
  },
  {
    id: 5,
    title: "Full Stack Developer",
    company: "XYZ Solutions",
    location: "San Francisco, CA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    experience: "3+ years",
    applyLink: "#",
  },
  {
    id: 6,
    title: "Full Stack Developer",
    company: "XYZ Solutions",
    location: "San Francisco, CA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    experience: "3+ years",
    applyLink: "#",
  },
  {
    id: 7,
    title: "Full Stack Developer",
    company: "XYZ Solutions",
    location: "San Francisco, CA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    experience: "3+ years",
    applyLink: "#",
  },
];

const JobList = () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    limit: 10,
    offset: 0,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
  };

  fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result));
  return (
    <div>
      <h2>Job Listings</h2>
      <Grid container spacing={2}>
        {dummyJobs.map((job) => (
          <Grid item xs={12} sm={6} md={4} key={job.id}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default JobList;
