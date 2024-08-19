import LoadingButton from "@mui/lab/LoadingButton";
import {
  Container,
  Typography,
  Box,
  Link,
  FormControl,
  InputAdornment,
  Divider,
  OutlinedInput,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import PrimarySearchAppBar from "../overview/PrimarySearchAppBar";

const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
          margin-bottom: 15px;
          background-color: ${theme.colors.alpha.white[100]};
      `
);

const ForgotPassword = () => {
  const [username, setUsername] = useState("");
  return (
    <>
      <Helmet>
        <title>Zamtel - Login </title>
      </Helmet>
      <PrimarySearchAppBar />
      {/* <MainContent> */}
      <Container maxWidth="sm" sx={{ my: 15 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Forgot Password
        </Typography>

        <Box textAlign="center">
          <Box
            component="form"
            // onSubmit={handleLoginRequest}
            noValidate
            sx={{ mt: 1 }}
            autoComplete="off"
          >
            <FormControl variant="outlined" fullWidth>
              <OutlinedInputWrapper
                type="text"
                placeholder="Username or Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <ContactMailIcon />
                  </InputAdornment>
                }
              />
            </FormControl>

            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{
                background: "#22B24C",
                textTransform: "uppercase",
                p: 1.5,
                "&:hover": {
                  background: "#F81AA7",
                },
              }}
            >
              Submit
            </LoadingButton>
          </Box>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Typography color="text.secondary" variant="body1" fontSize={"16px"}>
          Already Have an account ?{" "}
          <Link
            component={NavLink}
            to="/login"
            color="inherit"
            fontSize={"16px"}
          >
            Login Here
          </Link>
        </Typography>
      </Container>
      {/* </MainContent> */}
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
    </>
  );
};

export default ForgotPassword;
