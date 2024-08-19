import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import PrimarySearchAppBar from "../overview/PrimarySearchAppBar";
import {
  styled,
  Box,
  Container,
  Divider,
  FormControl,
  Link,
  Typography,
  OutlinedInput,
  FormHelperText,
  LinearProgress,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { NavLink } from "react-router-dom";
import { alertToast } from "../../components/AppAlerts";
import { useFormik } from "formik";
import * as Yup from "yup";

const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
          margin-bottom: 15px;
          background-color: ${theme.colors.alpha.white[100]};
      `
);

const checkPasswordStrength = (password: string) => {
  // Initialize variables
  let strength = 0;
  let tips = "";

  // Check password length
  if (password.length < 6) {
    tips += "Make the password longer. ";
  } else {
    strength += 1;
  }

  // Check for mixed case
  if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
    strength += 1;
  } else {
    tips += "Use both lowercase and uppercase letters. ";
  }

  // Check for special characters
  if (password.match(/[^a-zA-Z\d]/)) {
    strength += 1;
  } else {
    tips += "Include at least one special character. ";
  }

  // Return results
  if (strength < 2) {
    return "Weak: -" + tips;
  } else if (strength === 2) {
    return "Medium: -" + tips;
  } else if (strength === 3) {
    return "Strong: -" + tips;
  } else {
    return "Very Strong: -" + tips;
  }
};

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

const Register = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      username: Yup.string()
        .min(4, "Username Too short")
        .max(60, "Username Too long")
        .matches(
          /^[a-zA-Z0-9._]+$/,
          "Username can not contain Invalid characters"
        )
        .required("Username is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .matches(
          passwordRegex,
          "Password must contain at least 6 characters, including uppercase letters, lowercase letters, numbers and special characters"
        )
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Helmet>
        <title>Zamtel - Register </title>
      </Helmet>
      <PrimarySearchAppBar />
      <Container maxWidth="sm" sx={{ my: 10 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Create Account
        </Typography>

        <Box textAlign="center">
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
            autoComplete="off"
          >
            <FormControl
              variant="outlined"
              fullWidth
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            >
              <OutlinedInputWrapper
                type="text"
                placeholder="Full Name"
                onChange={(e) => {
                  formik.setFieldValue("fullName", e.target.value);
                }}
                onBlur={(e) => {
                  formik.handleBlur(e.target.value);
                }}
                value={formik.values.fullName}
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <FormHelperText sx={{ color: "red", my: 1 }}>
                  {formik.errors.fullName}
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl
              variant="outlined"
              fullWidth
              error={formik.touched.username && Boolean(formik.errors.username)}
            >
              <OutlinedInputWrapper
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  formik.setFieldValue("username", e.target.value);
                }}
                onBlur={(e) => {
                  formik.handleBlur(e.target.value);
                }}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username ? (
                <FormHelperText sx={{ color: "red", mb: 1 }}>
                  {formik.errors.username}
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl
              variant="outlined"
              fullWidth
              error={formik.touched.email && Boolean(formik.errors.email)}
            >
              <OutlinedInputWrapper
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  formik.setFieldValue("email", e.target.value);
                }}
                onBlur={(e) => {
                  formik.handleBlur(e.target.value);
                }}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <FormHelperText sx={{ color: "red", mb: 1 }}>
                  {formik.errors.email}
                </FormHelperText>
              ) : null}
            </FormControl>
            <FormControl
              variant="outlined"
              fullWidth
              error={formik.touched.password && Boolean(formik.errors.password)}
            >
              <OutlinedInputWrapper
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={(e) => {
                  formik.setFieldValue("password", e.target.value);
                }}
                onBlur={(e) => {
                  formik.handleBlur(e.target.value);
                }}
                value={formik.values.password}
              />

              {formik.touched.password && formik.errors.password ? (
                <FormHelperText sx={{ color: "red", mb: 1 }}>
                  {formik.errors.password}
                </FormHelperText>
              ) : null}
            </FormControl>
            <FormControl
              variant="outlined"
              fullWidth
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
            >
              <OutlinedInputWrapper
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => {
                  formik.setFieldValue("confirmPassword", e.target.value);
                }}
                onBlur={(e) => {
                  formik.handleBlur(e.target.value);
                }}
                value={formik.values.confirmPassword}
              />
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <FormHelperText sx={{ color: "red", mb: 1 }}>
                  {formik.errors.confirmPassword}
                </FormHelperText>
              ) : null}
            </FormControl>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#22B24C",
              }}
              visibility={
                formik.values.password.length > 0 ? "visible" : "hidden"
              }
            >
              <Typography variant="subtitle2" gutterBottom>
                Password Strength
              </Typography>
              {checkPasswordStrength(formik.values.password)}
            </Box>
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
              Register
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

export default Register;
