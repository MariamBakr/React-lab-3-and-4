import { useFormik } from "formik";
import * as yup from "yup";

function Login() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      city: "",
    },
    validationSchema: yup.object({
      fullName: yup
        .string("Full name must be string")
        .min(5, "min length is 5 chars")
        .max(10, "max chars is 10")
        .required("This field is req"),
      password: yup
        .string()
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          "your password must contain at least: one uppercase, one lowercase, one special character and one number"
        ),
      email: yup
        .string()
        .email("Enter a valid email address")
        .required("This field is req"),
      city: yup
        .string()
        .oneOf(["Cairo", "Alexandria", "Aswan", "Qena"])
        .required("This field is req"),
    }),
  });

  return (
    <div>
      <div className="background">
        <div className="shape" />
        <div className="shape" />
      </div>
      <form onSubmit={formik.handleSubmit}>
        <h3>Register Here</h3>
        <label htmlFor="FullName">FullName</label>
        <input
          type="text"
          placeholder="FullName"
          name="fullname"
          onChange={formik.handleChange}
        />
        <small style={{ color: "red" }}>{formik.errors.fullName}</small>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={formik.handleChange}
        />
        <small style={{ color: "red" }}>{formik.errors.password}</small>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={formik.handleChange}
        />
        <small style={{ color: "red" }}>{formik.errors.email}</small>
        <select
          class="form-select"
          aria-label="Default select example"
          onChange={formik.handleChange}
        >
          <option selected>Select your City</option>
          <option value="cairo">Cairo</option>
          <option value="Alexandria">Alexandria</option>
          <option value="Aswan">Aswan</option>
          <option value="Qena">Qena</option>
        </select>
        <small style={{ color: "red" }}>{formik.errors.city}</small>
        <button className="mt-2">Register</button>
      </form>
    </div>
  );
}

export default Login;
