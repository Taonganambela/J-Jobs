import {
  Typography,
  Container,
  Link,
  OutlinedInput,
  styled,
  FormControl,
  InputAdornment,
  IconButton,
  Stack,
  Box,
  Button,
} from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import JobListings from "./JobListings";
import { Helmet } from "react-helmet-async";

const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
        margin-bottom: 15px;
        background-color: ${theme.colors.alpha.white[100]};
    `
);
const MainContent = styled(Box)(
  () => `
      height: 100%;
      display: flex;
      flex: 1;
      overflow: auto;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  `
);

const Landing = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Helmet>
        <title>Zamtel - Vacancies </title>
      </Helmet>
      <PrimarySearchAppBar />
      <MainContent>
        {/* Hero unit */}
        <Container
          disableGutters
          maxWidth="md"
          component="main"
          sx={{ pt: 8, pb: 6, overflowY: "auto" }}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Job Listing
          </Typography>
          <Stack my={2}>
            <FormControl variant="outlined" fullWidth>
              <OutlinedInputWrapper
                type="text"
                fullWidth
                placeholder="Search by Job title"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="Search" edge="end">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Stack>
        </Container>
        {/* End hero unit */}
        <Container maxWidth="md" component="main">
          {
            //array to loop 10 times
            [...Array(5)].map(() => (
              <JobListings />
            ))
          }
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              my: 2,
            }}
          >
            <Button sx={{ mx: 2, color: "green", display: "block" }}>
              Load More Jobs
            </Button>
          </Box>
        </Container>
        {/* Footer */}
        <Container maxWidth="md" component="footer">
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://zamtel.co.zm/">
              Zamtel
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Container>
        {/* End footer */}
      </MainContent>
    </>
  );
};

export default Landing;
