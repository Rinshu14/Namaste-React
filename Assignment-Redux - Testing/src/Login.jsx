import { useFormik } from "formik";

export default Login = () => {
  
  const validate = (values) => {
    const errors = {};
    if (!values.userName) {
      errors.userName = "Required";
    } else if (values.userName.length > 15) {
      errors.userName = "Must be 15 characters or less";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length > 20) {
      errors.password = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      userName: "",
      password: ""
    },
validate,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      alert("hii");
    },
  });

  return (
    <div

      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        height: "20rem",
        width: "27rem",
        backgroundColor: "#F3E8EA",
        marginTop: "8rem",
        padding: "1rem",
      }}
    >
    <form style={{display: "flex",
        flexDirection: "column", height: "20rem",
        width: "27rem"}}  onSubmit={formik.handleSubmit}>
      <input className="input_login"
       name="userName"
        type="text"
        placeholder="UserName"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.userName}
      ></input>
      {formik.touched.userName && formik.errors.userName ? <div>{formik.errors.userName}</div> : null}
      <input className="input_login"
    name="password"
        type="Password"
        placeholder="Password"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.password}
      ></input>
      {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
      <input className="input_login"
      name="email"
        type="email"
        placeholder="Email"
        onBlur={formik.handleBlur}
        value={formik.values.email}
        onChange={formik.handleChange}
      
      ></input>
       {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <button  className="lgn_btn" type="submit">Login</button>
      </form>
    </div>
  );
};
