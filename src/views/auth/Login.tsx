import React, { useState } from "react";
import PrimarySearchAppBar from "../overview/PrimarySearchAppBar";
import { Helmet } from "react-helmet-async";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  styled,
  Box,
  Container,
  Typography,
  FormControl,
  InputAdornment,
  Divider,
  Link,
  OutlinedInput,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";
import { alertToast } from "../../components/AppAlerts";
import { NavLink } from "react-router-dom";

const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
        margin-bottom: 15px;
        background-color: ${theme.colors.alpha.white[100]};
    `
);

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Boolean(username.length) && Boolean(password.length)) {
      //
    } else {
      alertToast({
        title: "Error",
        message: "Please enter your username and password",
        type: "error",
      });
    }
  };

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
          Welcome back!
        </Typography>

        <Box textAlign="center">
          <Box
            component="form"
            onSubmit={handleLoginRequest}
            noValidate
            sx={{ mt: 1 }}
            autoComplete="off"
          >
            <FormControl variant="outlined" fullWidth>
              <OutlinedInputWrapper
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl variant="outlined" fullWidth>
              <OutlinedInputWrapper
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <PasswordIcon />
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
              Login
            </LoadingButton>
          </Box>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Link
          component={NavLink}
          to="/forgot-password"
          color="inherit"
          fontSize={"16px"}
        >
          Forgot password ?
        </Link>
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

export default Login;
