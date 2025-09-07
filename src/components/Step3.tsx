import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Step3 = () => {
  const REQUIRED_TXT = "This field is required";
  // const VALID_EMAIL_TXT = "Please enter a valid email address";
  // const CONSENT_TXT = "To submit this form, please consent to being contacted";
  // const QUERY_TYPE_TXT = "Please select a query type";

  const SignupSchema = Yup.object({
    firstName: Yup.string().required(REQUIRED_TXT),
  });

  const navigate = useNavigate();

  return (
    <div className="form-container">
      <h1 className="form-container__heading">Contact Us</h1>
      <Formik
        initialValues={{
          firstName: "",
        }}
        validateOnMount
        validationSchema={SignupSchema}
        onSubmit={() => {
          navigate("/result");
        }}>
        {({ errors, touched, isSubmitting }) => (
          <Form
            className="form"
            noValidate>
            <div
              aria-live="polite"
              className="sr-only"></div>
            <div
              className={`form-control ${
                errors.firstName && touched.firstName
                  ? "form-control--error"
                  : ""
              }`}>
              <Field
                type="text"
                id="firstName"
                name="firstName"
                className="input"
                required
                autoComplete="given-name"
                aria-invalid={Boolean(errors.firstName && touched.firstName)}
                aria-describedby={
                  errors.firstName && touched.firstName
                    ? "firstName-error"
                    : undefined
                }
              />
              <ErrorMessage name="firstName">
                {(msg) => (
                  <div
                    id="firstName-error"
                    className="error"
                    role="alert">
                    {msg}
                  </div>
                )}
              </ErrorMessage>
            </div>
            <button
              type="submit"
              className="btn"
              // disabled={!(isValid && dirty) || isSubmitting}
              aria-busy={isSubmitting}>
              {isSubmitting ? <div className="loader"></div> : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Step3;
