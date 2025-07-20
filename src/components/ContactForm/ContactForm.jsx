import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";

const ContactForm = ({ addContact }) => {
  const dispatch = useDispatch();

  const initialValues = { name: "", phone: "" };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Minimum 3 characters required")
      .max(50, "Maximum 50 characters required")
      .required("*Required"),
    phone: Yup.string()
      .matches(/^[0-9-]+$/, "Only numbers and hyphens are allowed")
      .min(3, "Minimum 3 characters required")
      .max(50, "Maximum 50 characters required")
      .required("*Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    resetForm();
  };


  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      <Form className={css.contactForm}>
        <label>Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" component="div" />

        <label>Phone</label>
        <Field name="phone" type="text" />
        <ErrorMessage name="phone" component="div" />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
