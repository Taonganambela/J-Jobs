import { Grid, Typography } from "@mui/material";
import React from "react";

const PageHeader = ({ title }: { title: string }) => {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PageHeader;
