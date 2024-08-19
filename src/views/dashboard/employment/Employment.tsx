import { useFormik } from "formik";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import * as Yup from "yup";
import {
    Box,
    FormControl,
    FormHelperText,
    FormLabel, IconButton,
    MenuItem,
    OutlinedInput, Paper,
    Select,
    styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from "@mui/material";
import {useState} from "react";
import AddRounded from "@mui/icons-material/AddRounded";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
        margin-bottom: 15px;
        background-color:${theme.colors.alpha.white[100]}
     `
);

interface EmploymentData {
    positionHeld: string;
    nameOfCompany: string;
    address: string;
    start:string;
    endDate:string;
}
const initialEmploymentData: EmploymentData[] = [];

const POSITIONHELD =[
    { positionHeld: "accountant", value: "accountant" },
    { positionHeld: "Manager", value: "Manager" },
    { positionHeld: "senior manager", value: "Senior Manager" },
    { positionHeld: "software developer", value: "software developer" },
    { positionHeld: "senior Software developer", value: "senior Software developer" },
  ]


  const COMPANYNAME =[
 
    { nameOfCompany: "Zesco", value: "zesco" },
    { nameOfCompany: "Zamtel", value: "zamtel" },
    { nameOfCompany: "MTN", value: "MTN" },
    { nameOfCompany: "ZSA", value: "ZSA" },
    { nameOfCompany: "Other", value: "other" },
  ]



const Employment = () => {
    const [employmentData, setEmploymentData] = useState<EmploymentData[]>(initialEmploymentData);
    const [editIndex, setEditIndex] = useState<number | null>(null);

    const handleEdit = (index: number) => {
        const itemToEdit = employmentData[index];
        formik.setValues(itemToEdit);
        setEditIndex(index);
    };


    const handleDelete = (index: number) => {
        setEmploymentData((prevData) => {
            const newData = [...prevData];
            newData.splice(index, 1); // Remove the selected row from the data array
            return newData;
        });
    };

  const formik = useFormik({
    initialValues: {
      positionHeld: "",
      nameOfCompany: "",
      address: "",
      start: "",
      endDate: "",
    },
    validationSchema: Yup.object().shape({
      positionHeld: Yup.string().required("position held is required"),
      nameOfCompany: Yup.string().required("company name is required"),
      address: Yup.string().required("address is required"),
      start: Yup.string().required("start is required"),
      endDate: Yup.string().required("end is required")
    }),
      onSubmit: (values, { resetForm }) => {
          if (editIndex !== null) {
              // Edit existing item
              const updatedData = [...employmentData];
              updatedData[editIndex] = values;
              setEmploymentData(updatedData);
              setEditIndex(null); // Clear edit index
          } else {
              // Add new item
              setEmploymentData((prevData) => [...prevData, values]);
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
              Boolean(formik.touched.positionHeld) && Boolean(formik.errors?.positionHeld)
            }
          >
            <FormLabel htmlFor="positionHeld">Position Held</FormLabel>
            <Select
              required
              id="positionHeld"
              value={formik.values.positionHeld}
              onChange={(e) => {
                formik.setFieldValue("positionHeld", e.target.value);
              }}
              className="w-48"
            >
              {POSITIONHELD.map((item) => (
                <MenuItem value={item.value}>
                  {item.positionHeld}{" "}
                </MenuItem>
              ))}
            </Select>
            {formik.touched.positionHeld && formik.errors.positionHeld ? (
              <FormHelperText sx={{ color: "red", my: 3 }}>
                {formik.errors.positionHeld}
              </FormHelperText>
            ) : null}
          </FormControl>


          <FormControl
            variant="outlined"
            error={
              Boolean(formik.touched.nameOfCompany) && Boolean(formik.errors?.nameOfCompany)
            }
          >
            <FormLabel htmlFor="positionHeld">Name of Employer/Company</FormLabel>
            <Select
              required
              id="nameOfCompany"
              value={formik.values.nameOfCompany}
              onChange={(e) => {
                formik.setFieldValue("nameOfCompany", e.target.value);
              }}
              className="w-48"
            >
              {COMPANYNAME.map((item) => (
                <MenuItem value={item.value}>
                  {item.nameOfCompany}{" "}
                </MenuItem>
              ))}
            </Select>
            {formik.touched.nameOfCompany && formik.errors.nameOfCompany ? (
              <FormHelperText sx={{ color: "red", my: 3 }}>
                {formik.errors.nameOfCompany}
              </FormHelperText>
            ) : null}
          </FormControl>
        </Box>

        {/*  form*/}

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
              Boolean(formik.touched.address) &&
              Boolean(formik.errors?.address)
            }
            className="w-48"
          >
            <FormLabel htmlFor="address">address</FormLabel>
            <OutlinedInputWrapper
              id="address"
              type="text"
              placeholder="enter address"
              onChange={(e) => {
                formik.setFieldValue("address", e.target.value);
              }}
              value={formik.values.address}
            />
            {formik.touched.address && formik.errors.address ? (
              <FormHelperText sx={{ color: "red", my: 1 }}>
                {formik.errors.address}
              </FormHelperText>
            ) : null}
          </FormControl>

          <FormControl
            variant="outlined"
            error={
              Boolean(formik.touched.start) &&
              Boolean(formik.errors?.start)
            }
            className="w-48"
          >
            <FormLabel htmlFor="start">
              Start Date
            </FormLabel>
            <OutlinedInputWrapper
              id="start"
              type="Date"
              placeholder=""
              onChange={(e) => {
                formik.setFieldValue("start", e.target.value);
              }}
              value={formik.values.start}
            />
            {formik.touched.start &&
            formik.errors.start ? (
              <FormHelperText sx={{ color: "red", my: 1 }}>
                {formik.errors.start}
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
          error={Boolean(formik.touched.endDate) && Boolean(formik.errors?.endDate)}
          className="w-48"
        >
          <FormLabel htmlFor="endDate">End Date</FormLabel>
          <OutlinedInputWrapper
            id="endDate"
            type="date"
            placeholder=""
            onChange={(e) => {
              formik.setFieldValue("endDate", e.target.value);
            }}
            value={formik.values.endDate}
          />
          {formik.touched.endDate && formik.errors.endDate ? (
            <FormHelperText sx={{ color: "red", my: 1 }}>
              {formik.errors.endDate}
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
                            <TableCell>Position Held</TableCell>
                            <TableCell>Name Of Company</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Start Date</TableCell>
                            <TableCell>End Date</TableCell>
                            <TableCell className="w-[150px]">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employmentData.map((data, index) => (
                            <TableRow key={index}>
                                <TableCell>{data.positionHeld}</TableCell>
                                <TableCell>{data.nameOfCompany}</TableCell>
                                <TableCell>{data.address}</TableCell>
                                <TableCell>{data.start}</TableCell>
                                <TableCell>{data.endDate}</TableCell>

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

export default Employment;
