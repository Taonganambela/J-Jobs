import { Helmet } from "react-helmet-async";
import PageTitleWrapper from "../../../components/PageTitleWrapper";
import PageHeader from "../../../components/PageHeader";
import { Card, CardHeader, Container, Grid } from "@mui/material";
import Membership from "./Membership";

const index = () => {
  return (
    <>
      <Helmet>
        <title>Professional Membership</title>
      </Helmet>

      <PageTitleWrapper>
        <PageHeader title={"Professional Membership"} />
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
                <Membership />
              </Container>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default index;
