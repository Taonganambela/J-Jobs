import { Helmet } from "react-helmet-async";
import PageTitleWrapper from "../../../components/PageTitleWrapper";
import PageHeader from "../../../components/PageHeader";
import { Card, CardHeader, Container, Grid } from "@mui/material";
import Reference from "./Reference";

const index = () => {
  return (
    <>
      <Helmet>
        <title>Reference</title>
      </Helmet>

      <PageTitleWrapper>
        <PageHeader title={"Reference"} />
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
                <Reference />
              </Container>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default index;
