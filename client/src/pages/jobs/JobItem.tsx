import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const JobItem = () => {
  const { job, setJob } = useState({});
  const id = useParams();
  axios
    .post("/api/job-details", id)
    .then((response) => {
      if (response.status === 200) {
        setJob(response.data);
      }
    })
    .catch((e) => console.log(e));
  console.log(job);
  return <div>JobItem Post ID:</div>;
};

export default JobItem;
