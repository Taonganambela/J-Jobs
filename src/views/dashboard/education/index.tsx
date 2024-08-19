import React from "react";
import { Helmet } from "react-helmet-async";
import PageTitleWrapper from "../../../components/PageTitleWrapper";
import PageHeader from "../../../components/PageHeader";
import { Card, CardHeader, Container, Grid } from "@mui/material";
import Education from "./Education";

const index = () => {
  return (
    <>
      <Helmet>
        <title>Education</title>
      </Helmet>

      <PageTitleWrapper>
        <PageHeader title={"Education"} />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
            <Card sx={{ p: 2 }}>
              <Container sx={{ px: 10 }}>
                <Education />
              </Container>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default index;
