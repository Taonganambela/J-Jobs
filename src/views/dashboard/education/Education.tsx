import {useState} from "react";
import { useFormik } from "formik";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import AddRounded from "@mui/icons-material/AddRounded";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import * as Yup from "yup";
import {
    Box,
    FormControl,
    FormHelperText,
    FormLabel,
    IconButton,
    MenuItem, Paper,
    Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from "@mui/material";


interface EducationData {
    level: string;
    qualification: string;
    institution: string;
    year: string;
}
const initialEducationData: EducationData[] = [];

const levels = [
  { level: "Junior", value: "junior" },
  { level: "Secondary", value: "secondary" },
  { level: "Tertiary", value: "tertiary" },
  { level: "Intermediate", value: "intermediate" },
  { level: "Expert", value: "expert" },
];
const Qualifications = [
  { qualification: "BE", value: "BE" },
  { qualification: "B.com", value: "B.com" },
  { qualification: "C.S", value: "C.S" },
  { qualification: "Bse", value: "Bse" },
  { qualification: "BBA", value: "BBA" },
];

const Institutions = [
  { institution: "DMI", value: "DMI" },
  { institution: "UNZA", value: "UNZA" },
  { institution: "UNILAS", value: "UNILAS" },
  { institution: "NIPA", value: "NIPA" },
];

const Years = [
  { year: "2000", value: "2000" },
  { year: "2001", value: "2001" },
  { year: "2002", value: "2002" },
  { year: "2003", value: "2003" },
];

const Education = () => {

    const [educationData, setEducationData] = useState<EducationData[]>(initialEducationData);
    const [editIndex, setEditIndex] = useState<number | null>(null);

    const handleEdit = (index: number) => {
        const itemToEdit = educationData[index];
        formik.setValues(itemToEdit);
        setEditIndex(index);
    };


    const handleDelete = (index: number) => {
        setEducationData((prevData) => {
            const newData = [...prevData];
            newData.splice(index, 1); // Remove the selected row from the data array
            return newData;
        });
    };

    const formik = useFormik({
    initialValues: {
      level: "",
      qualification: "",
      institution: "",
      year: "",
    },
    validationSchema: Yup.object().shape({
      level: Yup.string().required("level is required"),
      qualification: Yup.string().required("qualification is required"),
      institution: Yup.string().required("institution is required"),
      year: Yup.string().required("year is required"),
    }),
        onSubmit: (values, { resetForm }) => {
            if (editIndex !== null) {
                // Edit existing item
                const updatedData = [...educationData];
                updatedData[editIndex] = values;
                setEducationData(updatedData);
                setEditIndex(null); // Clear edit index
            } else {
                // Add new item
                setEducationData((prevData) => [...prevData, values]);
            }
            console.log('save button clicked', { values });
            resetForm();
        },
  });

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

{/*// 1st input*/}
          <FormControl
            variant="outlined"
            error={
              Boolean(formik.touched.level) && Boolean(formik.errors?.level)
            }
          >
            <FormLabel htmlFor="level">Level</FormLabel>
            <Select
              required
              id="level"
              value={formik.values.level}
              onChange={(e) => {
                formik.setFieldValue("level", e.target.value);
                console.log("Selected Level:", e.target.value);
              }}
              className="w-48"
              
            >
              {levels.map((item, i) => (
                <MenuItem key={i} value={item.value}> {item.level} </MenuItem>
              ))}
            </Select>
            {formik.touched.level && formik.errors.level ? (
              <FormHelperText sx={{ color: "red", my: 1 }}>
                {formik.errors.level}
              </FormHelperText>
            ) : null}
          </FormControl>

{/*// 2nd input*/}


          <FormControl
            variant="outlined"
            error={
              Boolean(formik.touched.qualification) &&
              Boolean(formik.errors?.qualification)
            }
          >
            <FormLabel htmlFor="qualification">Qualification</FormLabel>
            <Select
              required
              id="qualification"
              value={formik.values.qualification}
              onChange={(e) => {
                formik.setFieldValue("qualification", e.target.value);
                console.log("Selected qualification:", e.target.value);
              }}
              className="w-48"
            >
              <MenuItem selected>Select qualification</MenuItem>
              {Qualifications.map((item, i) => (
                <MenuItem key={i} value={item.value}>{item.qualification} </MenuItem>
              ))}
            </Select>
            {formik.touched.qualification && formik.errors.qualification ? (
              <FormHelperText sx={{ color: "red", my: 1 }}>
                {formik.errors.qualification}
              </FormHelperText>
            ) : null}
          </FormControl>
        </Box>

{/*// 3rd input*/}


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
              Boolean(formik.touched.institution) &&
              Boolean(formik.errors?.institution)
            }
          >
            <FormLabel htmlFor="institution">Institution</FormLabel>
            <Select
              required
              id="institution"
              value={formik.values.institution}
              onChange={(e) => {
                formik.setFieldValue("institution", e.target.value);
                console.log("Selected institution:", e.target.value);
              }}
              className="w-48"
            >
              <MenuItem selected>Select institution</MenuItem>
              {Institutions.map((item,i) => (
                <MenuItem key={i} value={item.value}>{item.institution} </MenuItem>
              ))}
            </Select>
            {formik.touched.institution && formik.errors.institution ? (
              <FormHelperText sx={{ color: "red", my: 1 }}>
                {formik.errors.institution}
              </FormHelperText>
            ) : null}
          </FormControl>


{/*// fourth input*/}
          <FormControl
            variant="outlined"
            error={Boolean(formik.touched.year) && Boolean(formik.errors?.year)}
          >
            <FormLabel htmlFor="year">Year</FormLabel>
            <Select
              required
              id="year"
              value={formik.values.year}
              onChange={(e) => {
                formik.setFieldValue("year", e.target.value);
                console.log("Selected year:", e.target.value);
              }}
              className="w-48"
            >
              {Years.map((item, i) => (
                <MenuItem key={i} value={item.value}>{item.year} </MenuItem>
              ))}
            </Select>
            {formik.touched.year && formik.errors.year ? (
              <FormHelperText sx={{ color: "red", my: 1 }}>
                {formik.errors.year}
              </FormHelperText>
            ) : null}
          </FormControl>
        </Box>
      </Box>

{/*TABLE */}

        <Box sx={{ mt: 4 }}>
            <TableContainer component={Paper}>
                <Table aria-label="education table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Level</TableCell>
                            <TableCell>Qualification</TableCell>
                            <TableCell>Institution</TableCell>
                            <TableCell>Year</TableCell>
                            <TableCell className="w-[150px]">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {educationData.map((data, index) => (
                            <TableRow key={index}>
                                <TableCell>{data.level}</TableCell>
                                <TableCell>{data.qualification}</TableCell>
                                <TableCell>{data.institution}</TableCell>
                                <TableCell>{data.year}</TableCell>
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
    </>
  );
};

export default Education;
