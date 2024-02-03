import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { BiMoneyWithdraw, BiTime } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { GiAbstract034 } from "react-icons/gi";
import "./styles.css";
import ReactQuill from "react-quill";

interface ItemProps {
  title: string | null;
  JobType: string | null;
  engagement: string | null;
  locationType: string | null;
  description: string | null;
  id: string | null;
}
const JobItem = () => {
  const [items, setItems] = useState<ItemProps>();
  const [err, setErr] = useState({});
  const id = useParams();

  useEffect(() => {
    axios
      .post("/api/job-details", id)
      .then((res) => setItems(res.data))
      .catch((e) => setErr(e));
  }, [id]);

  return (
    <Box
      sx={{
        margin: "4rem",
      }}
    >
      <Box
        sx={{
          boxShadow: 2,
          width: "100%",
        }}
        className="job-main-card"
      >
        <Box className="job-whole-wrapper">
          <Box className="job-header-wrapper">
            <Box className="job-card-items">
              <Box>
                <GiAbstract034 className="job-icon" />
              </Box>
              <Box className="job-card-text">
                <Typography variant="h4">{items?.title}</Typography>
                <Typography variant="h6">{items?.locationType}</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="job-details">
            <Box className="job-item-detail">
              <BiTime className="job-detail-item" />
              <h6>{items?.JobType}</h6>
            </Box>
            <Box className="job-item-detail">
              <AiOutlineFieldNumber className="job-detail-item" />
              <h6>3-8 years</h6>
            </Box>
            <Box className="job-item-detail">
              <BiMoneyWithdraw className="job-detail-item" />
              <h6>Ksh 120,000</h6>
            </Box>
          </Box>
          <Box>
            <Box>
              <p>Flexible working hours</p>
              <p>Great Medical Insurance</p>
              <p>Amaizing working culture</p>
            </Box>
          </Box>
        </Box>
        <ReactQuill
          value={items?.description}
          readOnly={true}
          theme={"bubble"}
        />
      </Box>
    </Box>
  );
};

export default JobItem;
