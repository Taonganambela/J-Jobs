import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  OutlinedInput,
  styled,
} from "@mui/material";
import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
        margin-bottom: 15px;
        background-color:${theme.colors.alpha.white[100]}
     `
);
function MembershipComp() {
  const [visible, setVisible] = useState(false);
  const formik = useFormik({
    initialValues: {
      professionalName: "",
      membershipType: "",
    },
    validationSchema: Yup.object().shape({
      professionalName: Yup.string().required("Professional body is required"),
      membershipType: Yup.string().required("Membership type is required"),
    }),
    onSubmit: (values) => {
      console.log("====================================");
      console.log(values);
      console.log("====================================");
    },
  });

  return (
    <>
      <Box
        component={"form"}
        onSubmit={formik.handleSubmit}
        sx={{
          width: "100%",
        }}
      >
        <Box>
          <Box className=" ml-10 inline-block font-semibold">
            <h1>Are you part of a Professtional body </h1>
          </Box>

          <Box className="inline-block pl-6 font-semibold">
            <input
              type="radio"
              name="isyes"
              value="1"
              onClick={() => setVisible(true)}
            />
            Yes
          </Box>
          <Box className="inline-block font-semibold p-4">
            <input
              type="radio"
              name="isyes"
              value="0"
              onClick={() => setVisible(false)}
            />
            No
          </Box>
        </Box>

        {visible && (
          <Box className="mt-8 flex gap-14 pl-10">
            <FormControl
              variant="outlined"
              error={
                Boolean(formik.touched.professionalName) &&
                Boolean(formik.errors?.professionalName)
              }
            >
              <FormLabel htmlFor="">
                Name of professional Body
                <br />
                <OutlinedInputWrapper
                  type="text"
                  placeholder="Enter name of professional body"
                  className="w-[350px]"
                  onChange={(e) => {
                    formik.setFieldValue("professionalName", e.target.value);
                  }}
                  value={formik.values.professionalName}
                />
                {formik.touched.professionalName &&
                formik.errors.professionalName ? (
                  <FormHelperText sx={{ color: "red", my: 1 }}>
                    {formik.errors.professionalName}
                  </FormHelperText>
                ) : null}
              </FormLabel>
            </FormControl>

            <FormControl
              variant="outlined"
              error={
                Boolean(formik.touched.membershipType) &&
                Boolean(formik.errors?.membershipType)
              }
            >
              <FormLabel htmlFor="">
                Type of Membership
                <br />
                <OutlinedInputWrapper
                  type="text"
                  placeholder="Enter type of membership"
                  className="w-[350px]"
                  onChange={(e) => {
                    formik.setFieldValue("membershipType", e.target.value);
                  }}
                  value={formik.values.membershipType}
                />
                {formik.touched.membershipType &&
                formik.errors.membershipType ? (
                  <FormHelperText sx={{ color: "red", my: 1 }}>
                    {formik.errors.membershipType}
                  </FormHelperText>
                ) : null}
              </FormLabel>
            </FormControl>
          </Box>
        )}
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
}

export default MembershipComp;
