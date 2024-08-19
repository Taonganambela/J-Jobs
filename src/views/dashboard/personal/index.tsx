import React from "react";
import { Helmet } from "react-helmet-async";
import PageTitleWrapper from "../../../components/PageTitleWrapper";
import PageHeader from "../../../components/PageHeader";
import { Card, CardHeader, Container, Grid } from "@mui/material";
import PersonalInfoForm from "./PersonalInfoForm";

const index = () => {
  return (
    <>
      <Helmet>
        <title>Person Information</title>
      </Helmet>

      <PageTitleWrapper>
        <PageHeader title={"Personal Information"} />
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
                <PersonalInfoForm />
              </Container>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default index;
