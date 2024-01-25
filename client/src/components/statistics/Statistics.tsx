import { Box, CardContent, Typography } from "@mui/material";
import React from "react";
import StatisticItem from "./StatisticItem";

const Statistics = () => {
  const numbers = [
    {
      id: 1,
      text: "The percentage of our clients placed into internships",
      title: "Placements",
      num: "78%",
    },
    {
      id: 2,
      text: "The percentage interns offered employment",
      title: "Employment",
      num: "74%",
    },
    {
      id: 3,
      text: "The overall satisfaction with our services",
      title: "Satisfaction",
      num: "97%",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      {numbers.map((item) => (
        <StatisticItem key={item.id} item={item} />
      ))}
    </Box>
  );
};

export default Statistics;
