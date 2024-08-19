import { Box, Typography, Button } from "@mui/material";

const JobListings = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        my: 2,
        py: 2,
        px: 2,
        border: "1px solid green",
        borderRadius: "10px",
        width: "100%",
        color: "text.primary",
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        sx={{
          color: "green",
          fontWeight: "bold",
          cursor: "pointer",
          "&:hover": {
            color: "blueviolet",
            textDecoration: "underline",
            cursor: "pointer",
          },
        }}
      >
        Lead Governance and Compliance
      </Typography>
      <Typography variant="subtitle1" component="h4">
        Description | Job Location
      </Typography>
      <Typography variant="h5" component="h2">
        12 January ,2024
      </Typography>
      <Button
        variant="contained"
        size="small"
        sx={{
          backgroundColor: "green",
          color: "white",
          fontWeight: "bold",
          fontSize: "14px",
          borderRadius: "5px",
          padding: "5px 10px",
          "&:hover": {
            backgroundColor: "green",
          },
        }}
      >
        Apply
      </Button>
    </Box>
  );
};

export default JobListings;
