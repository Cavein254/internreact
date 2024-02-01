import { Box, Button, Card, Typography } from "@mui/material";
import axios from "axios";
import "./styles.css";
import SearchOverlay from "../searchoverlay/SearchOverlay";
import { AiFillFilter } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import Job from "./job/Job";
import { UserContext } from "../../context/userContext";

interface ItemProps {
  title: string | null;
  JobType: string | null;
  engagement: string | null;
  locationType: string | null;
  description: string | null;
  id: string | null;
}

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
    const response = await axios
      .get("/api/job")
      .then((res) => setJobs(res.data))
      .catch((e) => console.log(e));
    return response;
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  const jobStats = [
    {
      id: 1,
      jobType: "Remote Jobs",
      stat: 80,
    },
    {
      id: 2,
      jobType: "Hybrid Jobs",
      stat: 67,
    },
    {
      id: 3,
      jobType: "Onsite Jobs",
      stat: 100,
    },
  ];
  const allStats = jobStats.map((job) => {
    return (
      <Card
        className="dashboard-remote"
        key={job.id}
        sx={{
          fontSize: "1.4rem",
          color: "#fff",
          padding: "1rem 2rem",
          backgroundColor: "#F37C0C",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Raleway",
            fontWeight: "900",
            fontSize: "1rem",
          }}
        >
          {job.jobType}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Raleway",
            fontWeight: "300",
            fontSize: "1.4rem",
          }}
        >
          {job.stat}
        </Typography>
      </Card>
    );
  });
  return (
    <Box>
      <Box className="job-header">
        <Box className="dashboard-text">
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Raleway",
              fontWeight: "900",
              fontSize: "2rem",
            }}
          >
            Browse Available Jobs
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Raleway",
              fontWeight: "300",
            }}
          >
            Search the various jobs that our site has to offer.
          </Typography>
        </Box>
        <Box className="dashboard-category">{allStats}</Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "right",
            color: "white",
          }}
        >
          {" "}
          {user?.role === "EMPLOYER" && (
            <Button variant="contained">
              <a href="/employer/job/create">
                <Typography
                  sx={{
                    color: "white",
                  }}
                >
                  Create Job
                </Typography>
              </a>
            </Button>
          )}
        </Box>
        <Box>
          <Box className="dashboard-filter">
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Raleway",
                  fontSize: "1rem",
                  fontWeight: "300",
                }}
              >
                JOBS
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <AiFillFilter />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Raleway",
                  fontSize: "1rem",
                  fontWeight: "300",
                  color: "#A9A9A9",
                  marginLeft: ".5rem",
                }}
              >
                Filter By
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Raleway",
                fontSize: ".8rem",
                fontWeight: "900",
              }}
            >
              78 Jobs Found
            </Typography>
          </Box>
        </Box>

        <Box className="dashboard-main">
          <Box className="dashboard-search">
            <SearchOverlay />
          </Box>
          <Box className="dashboard-jobs">
            <Box>
              {jobs.length > 0 ? (
                <Box className="dashboard-job-list">
                  {jobs?.map((items: ItemProps) => (
                    <Job key={items.id} items={items} />
                  ))}
                </Box>
              ) : (
                <div>
                  <h1>No Internships Currently Available.</h1>
                  <p>Check with Us later</p>
                </div>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
