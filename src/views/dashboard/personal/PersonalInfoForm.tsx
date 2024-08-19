import { useFormik } from "formik";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import * as Yup from "yup";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  MenuItem,
  OutlinedInput,
  Select,
  styled,
} from "@mui/material";
import InputFileUpload from "./fileUploader";

const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
        margin-bottom: 15px;
        background-color:${theme.colors.alpha.white[100]}
     `
);

const TITLES = [
  { title: "Mr", value: "mr" },
  { title: "Ms", value: "ms" },
  { title: "Dr", value: "Dr" },
  { title: "Mrs", value: "Mrs" },
  { title: "Prof", value: "prof" },
];

const PersonalInfoForm = () => {
  const formik = useFormik({
    initialValues: {
      lastName: "",
      otherNames: "",
      title: "",
      gender: "",
      dateOfBirth: "",
      maritalStatus: "",
      Id_type: "",
      Id_Number: "",
      residentialAddress: "",
      emailAddress: "",
      file: "",
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required("Title is required"),
      lastName: Yup.string()
        .required("Last Name is required")
        .min(2, "Last name is too short"),
      otherNames: Yup.string().required("Other Name is required"),
      gender: Yup.string().required("Gender is required"),
      dateOfBirth: Yup.string().required("date is required"),
      maritalStatus: Yup.string().required("marital Status is required"),
      Id_type: Yup.string().required("Id type is required"),
      Id_Number: Yup.string().required("Id number is required"),
      residentialAddress: Yup.string().required("Address is required"),
      emailAddress: Yup.string().required("email is required"),
      file: Yup.string().required("email is required"),
    }),
    onSubmit: (values) => {
      console.log("====================================");
      console.log(values);
      console.log("====================================");
    },
  });

  // const showError = (error: any) => {
  //   console.log("I am error" + error);
  // };

  return (
    <>
      <Box
        component={"form"}
        onSubmit={formik.handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "100%",
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
          className="mt-6"
        >
          <FormControl
            variant="outlined"
            error={
              Boolean(formik.touched.title) && Boolean(formik.errors?.title)
            }
          >
            <FormLabel htmlFor="title">Title</FormLabel>
            <Select
              required
              id="title"
              value={formik.values.title}
              onChange={(e) => {
                formik.setFieldValue("title", e.target.value);
              }}
              className="w-48"
            >
              <MenuItem>Select title</MenuItem>
              {TITLES.map((item, i) => (
                <MenuItem key={i} value={item.value}>
                  {item.title}{" "}
                </MenuItem>
              ))}
            </Select>
            {formik.touched.title && formik.errors.title ? (
              <FormHelperText sx={{ color: "red", my: 1 }}>
                {formik.errors.title}
              </FormHelperText>
            ) : null}
          </FormControl>

          <FormControl
            variant="outlined"
            error={
              Boolean(formik.touched.otherNames) &&
              Boolean(formik.errors?.otherNames)
            }
            className="w-48"
          >
            {/* {formik.touched.otherNames}
            {formik.errors.otherNames} */}

            <FormLabel htmlFor="otherNames">OtherNames</FormLabel>
            <OutlinedInputWrapper
              id="otherNames"
              type="text"
              placeholder="Other Names"
              onChange={(e) => {
                formik.setFieldValue("otherNames", e.target.value);
              }}
              value={formik.values.otherNames}
            />
            {formik.errors.otherNames ? (
              <FormHelperText sx={{ color: "red", my: 1 }}>
                {formik.errors.otherNames}
              </FormHelperText>
            ) : null}
          </FormControl>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
          className="mt-6"
        >
          <FormControl
            variant="outlined"
            error={
              Boolean(formik.touched.lastName) &&
              Boolean(formik.errors?.lastName)
            }
            className="w-48"
          >
            <FormLabel id="lastName">Last Name</FormLabel>
            <OutlinedInputWrapper
              id="lastName"
              type="text"
              placeholder="Last Name"
              onChange={(e) => {
                formik.setFieldValue("lastName", e.target.value);
              }}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <FormHelperText sx={{ color: "red", my: 1 }}>
                {formik.errors.lastName}
              </FormHelperText>
            ) : null}
          </FormControl>

          <FormControl
            variant="outlined"
            error={
              Boolean(formik.touched.gender) && Boolean(formik.errors?.gender)
            }
          >
            <FormLabel htmlFor="gender">Gender</FormLabel>
            <Select
              required
              id="gender"
              value={formik.values.gender}
              onChange={(e) => {
                formik.setFieldValue("gender", e.target.value);
              }}
              className="w-48"
            >
              <MenuItem selected>Select gender</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="male">Male</MenuItem>
            </Select>
            {formik.touched.gender && formik.errors.gender ? (
              <FormHelperText sx={{ color: "red", my: 1 }}>
                {formik.errors.gender}
              </FormHelperText>
            ) : null}
          </FormControl>
        </Box>
      </Box>

      <Box
        component={"form"}
        onSubmit={formik.handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "100%",
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
          className="mt-10"
        >
          <FormControl
            variant="outlined"
            error={
              Boolean(formik.touched.dateOfBirth) &&
              Boolean(formik.errors?.dateOfBirth)
            }
            className="w-48"
          >
            <FormLabel htmlFor="date">Date of birth</FormLabel>
            <OutlinedInputWrapper
              id="date"
              type="date"
              onChange={(e) => {
                formik.setFieldValue("dateOfBirth", e.target.value);
              }}
              value={formik.values.dateOfBirth}
            />
            {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
              <FormHelperText sx={{ color: "red", my: 1 }}>
                {formik.errors.dateOfBirth}
              </FormHelperText>
            ) : null}
          </FormControl>

          <FormControl
            variant="outlined"
            error={
              Boolean(formik.touched.maritalStatus) &&
              Boolean(formik.errors?.maritalStatus)
            }
          >
            <FormLabel htmlFor="maritalStatus">Marital Status</FormLabel>
            <Select
              required
              id="maritalStatus"
              value={formik.values.maritalStatus}
              onChange={(e) => {
                formik.setFieldValue("maritalStatus", e.target.value);
              }}
              className="w-48"
            >
              <MenuItem selected>Select maritalStatus</MenuItem>
              <MenuItem value="married">Married</MenuItem>
              <MenuItem value="single">Single</MenuItem>
            </Select>
            {formik.touched.maritalStatus && formik.errors.maritalStatus ? (
              <FormHelperText sx={{ color: "red", my: 1 }}>
                {formik.errors.maritalStatus}
              </FormHelperText>
            ) : null}
          </FormControl>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
          className="mt-10"
        >
          <FormControl
            variant="outlined"
            error={
              Boolean(formik.touched.Id_type) && Boolean(formik.errors?.Id_type)
            }
          >
            <FormLabel htmlFor="Id_type">Id Type</FormLabel>
            <Select
              required
              id="Id_type"
              value={formik.values.Id_type}
              onChange={(e) => {
                formik.setFieldValue("Id_type", e.target.value);
              }}
              className="w-48"
            >
              <MenuItem selected>Select Id Type</MenuItem>
              <MenuItem value="nrc">NRC</MenuItem>
              <MenuItem value="passport">Passport</MenuItem>
              <MenuItem value="drivers liscense">Driver's Lisence</MenuItem>
            </Select>
            {formik.touched.Id_type && formik.errors.Id_type ? (
              <FormHelperText sx={{ color: "red", my: 1 }}>
                {formik.errors.Id_type}
              </FormHelperText>
            ) : null}
          </FormControl>








          <FormControl
            variant="outlined"
            error={
              Boolean(formik.touched.Id_Number) &&
              Boolean(formik.errors?.Id_Number)
            }
            className="w-48"
          >
            <FormLabel htmlFor="Id_Number">ID Number</FormLabel>
            <OutlinedInputWrapper
              id="Id_Number"
              type="text"
              placeholder="1234/56/78"
              onChange={(e) => {
                formik.setFieldValue("Id_Number", e.target.value);
              }}
              value={formik.values.Id_Number}
            />
            {formik.touched.Id_Number && formik.errors.Id_Number ? (
              <FormHelperText sx={{ color: "red", my: 1 }}>
                {formik.errors.Id_Number}
              </FormHelperText>
            ) : null}
          </FormControl>



          
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "75%",
        }}
        className="mt-10"
      >
        <FormControl
          variant="outlined"
          error={
            Boolean(formik.touched.residentialAddress) &&
            Boolean(formik.errors?.residentialAddress)
          }
          className="w-48"
        >
          <FormLabel htmlFor="residentialAddress">
            Residential Address
          </FormLabel>
          <OutlinedInputWrapper
            id="residentialAddress"
            type="text"
            placeholder="Enter residential address"
            onChange={(e) => {
              formik.setFieldValue("residentialAddress", e.target.value);
            }}
            value={formik.values.residentialAddress}
          />
          {formik.touched.residentialAddress &&
          formik.errors.residentialAddress ? (
            <FormHelperText sx={{ color: "red", my: 1 }}>
              {formik.errors.residentialAddress}
            </FormHelperText>
          ) : null}
        </FormControl>

        <FormControl
          variant="outlined"
          error={
            Boolean(formik.touched.emailAddress) &&
            Boolean(formik.errors?.emailAddress)
          }
          className="w-48"
        >
          <FormLabel htmlFor="emailAddress">Email Address</FormLabel>
          <OutlinedInputWrapper
            id="emailAddress"
            type="text"
            placeholder="johndoe@gmail.com"
            onChange={(e) => {
              formik.setFieldValue("emailAddress", e.target.value);
            }}
            value={formik.values.emailAddress}
          />
          {formik.touched.emailAddress && formik.errors.emailAddress ? (
            <FormHelperText sx={{ color: "red", my: 1 }}>
              {formik.errors.emailAddress}
            </FormHelperText>
          ) : null}
        </FormControl>

        <FormControl
          variant="outlined"
          error={Boolean(formik.touched.file) && Boolean(formik.errors?.file)}
          className="w-48 first-letter:"
        >
          <FormLabel htmlFor="File" className="inline-block">
            Upload ID
          </FormLabel>
          <InputFileUpload />

          {formik.touched.file && formik.errors.file ? (
            <FormHelperText sx={{ color: "red", my: 1 }}>
              {formik.errors.file}
            </FormHelperText>
          ) : null}
        </FormControl>
      </Box>

      <Box
        component={"form"}
        onSubmit={formik.handleSubmit}
        className="flex mt-6 p-10"
      >
        <Box>
          <button
            type="submit"
            className=" border-2 h-10 w-24 rounded-lg bg-purple-700 text-white"
          >
            <div>
              <EditRoundedIcon className="h-4" />
              Update
            </div>
          </button>
        </Box>
        <Box className="ml-auto">
          <button
            type="submit"
            className="  border-2 h-10 w-24 rounded-lg bg-purple-700 text-white"
          >
            <div>
              <SaveRoundedIcon className="h-4" />
              save
            </div>
          </button>
        </Box>
      </Box>
    </>
  );
};

export default PersonalInfoForm;
