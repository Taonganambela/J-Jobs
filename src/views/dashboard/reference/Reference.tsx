import { useFormik } from "formik";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import * as Yup from "yup";
import {
    Box,
    FormControl,
    FormHelperText,
    FormLabel, IconButton,
    OutlinedInput, Paper,
    styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from "@mui/material";
import {useState} from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddRounded from "@mui/icons-material/AddRounded";

const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
        margin-bottom: 15px;
        background-color:${theme.colors.alpha.white[100]}
     `
);

interface ReferenceData {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    residentialAddress:string;
    email:string;
}
const initialReferenceData: ReferenceData[] = [];

const Reference = () => {
    const [referenceData, setReferenceData] = useState<ReferenceData[]>(initialReferenceData);
    const [editIndex, setEditIndex] = useState<number | null>(null);

    const handleEdit = (index: number) => {
        const itemToEdit = referenceData[index];
        formik.setValues(itemToEdit);
        setEditIndex(index);
    };

    const handleDelete = (index: number) => {
        setReferenceData((prevData) => {
            const newData = [...prevData];
            newData.splice(index, 1); // Remove the selected row from the data array
            return newData;
        });
    };

  const formik = useFormik({
      initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      residentialAddress: "",
      email: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("first name is required"),
      lastName: Yup.string().required("last Name is required"),
      phoneNumber: Yup.string().required("number is required"),
      residentialAddress: Yup.string().required("address is required"),
      email: Yup.string().required("email is required"),
    }),
      onSubmit: (values, { resetForm }) => {
          if (editIndex !== null) {
              // Edit existing item
              const updatedData = [...referenceData];
              updatedData[editIndex] = values;
              setReferenceData(updatedData);
              setEditIndex(null); // Clear edit index
          } else {
              // Add new item
              setReferenceData((prevData) => [...prevData, values]);
          }
          console.log("Form submitted with values:", values);
          resetForm();
      },
  });

  return (
    <Box>
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
              Boolean(formik.touched.firstName) &&
              Boolean(formik.errors?.firstName)
            }
            className="w-48"
          >
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <OutlinedInputWrapper
              id="firstName"
              type="text"
              placeholder="Enter first name"
              onChange={(e) => {
                formik.setFieldValue("firstName", e.target.value);
                // console.log(formik.touched.firstName);
              }}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <FormHelperText sx={{ color: "red", my: 1 }}>
                {formik.errors.firstName}
              </FormHelperText>
            ) : null}
          </FormControl>

          <FormControl
            variant="outlined"
            error={
              Boolean(formik.touched.lastName) &&
              Boolean(formik.errors?.lastName)
            }
            className="w-48"
          >
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <OutlinedInputWrapper
              id="lastName"
              type="text"
              placeholder="Enter last name"
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
        </Box>

        <Box
          component={"form"}
          onSubmit={formik.handleSubmit}
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
              Boolean(formik.touched.phoneNumber) &&
              Boolean(formik.errors?.phoneNumber)
            }
            className="w-48"
          >
            <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
            <OutlinedInputWrapper
              id="phoneNumber"
              type="text"
              placeholder="+260"
              onChange={(e) => {
                formik.setFieldValue("phoneNumber", e.target.value);
              }}
              value={formik.values.phoneNumber}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <FormHelperText sx={{ color: "red", my: 1 }}>
                {formik.errors.phoneNumber}
              </FormHelperText>
            ) : null}
          </FormControl>

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
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "25%",
        }}
        className="mt-6"
      >
        <FormControl
          variant="outlined"
          error={Boolean(formik.touched.email) && Boolean(formik.errors?.email)}
          className="w-48"
        >
          <FormLabel htmlFor="email">Email Address</FormLabel>
          <OutlinedInputWrapper
            id="email"
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              formik.setFieldValue("email", e.target.value);
            }}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <FormHelperText sx={{ color: "red", my: 1 }}>
              {formik.errors.email}
            </FormHelperText>
          ) : null}
        </FormControl>
      </Box>

        {/*TABLE */}

        <Box sx={{ mt: 4 }}>
            <TableContainer component={Paper}>
                <Table aria-label="education table">
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Residential Address</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell className="w-[150px]">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {referenceData.map((data, index) => (
                            <TableRow key={index}>
                                <TableCell>{data.firstName}</TableCell>
                                <TableCell>{data.lastName}</TableCell>
                                <TableCell>{data.phoneNumber}</TableCell>
                                <TableCell>{data.residentialAddress}</TableCell>
                                <TableCell>{data.email}</TableCell>

                                <TableCell> {/* Add this TableCell for the actions */}
                                    <IconButton onClick={() => handleEdit(index)}>
                                        <EditIcon />
                                    </IconButton> {/* Edit button */}
                                    <IconButton onClick={() => handleDelete(index)}>
                                        <DeleteIcon />
                                    </IconButton> {/* Delete button */}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
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
          <Box className="flex mt-6 p-10">
              <Box>
                  <button
                      type="submit"
                      className=" border-2 h-10 w-24 rounded-lg bg-purple-700 text-white"
                  >
                      <div>
                          {editIndex !== null ? <EditRoundedIcon className="h-4"/> : <AddRounded className="h-4"/>}
                          {editIndex !== null ? "Save" : "Add"}
                      </div>
                  </button>
                  {editIndex !== null && ( // Only render the cancel button when editIndex is not null
                      <button
                          type="button"
                          className="border-2 h-10 w-24 rounded-lg bg-red-700 text-white ml-2"
                          onClick={() => {
                              setEditIndex(null);
                              formik.resetForm();
                          }}
                      >
                          Cancel
                      </button>
                  )}
              </Box>
          </Box>
      </Box>
    </Box>
  );
};

export default Reference;
