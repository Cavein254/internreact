import { Box, CardContent, Typography } from "@mui/material";

type ItemProp = {
  id: number;
  text: string;
  title: string;
  num: string;
};
const StatisticItem = ({ item }: { item: ItemProp }) => {
  return (
    <Box
      sx={{
        boxShadow: 1,
        width: "250px",
        padding: "1rem",
        mt: "1rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: "1.3rem" }}
          variant="h4"
          color="text.secondary"
          gutterBottom
        >
          {item.text}
        </Typography>
        <Typography variant="h5" component="div" color="text.secondary">
          <hr />
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
          color="text.secondary"
        >
          <Box>
            <Typography variant="h4">{item.title}</Typography>
          </Box>
          <Box>
            <Typography
              color="text.secondary"
              variant="h4"
              sx={{
                fontSize: "2rem",
              }}
            >
              {item.num}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Box>
  );
};

export default StatisticItem;
