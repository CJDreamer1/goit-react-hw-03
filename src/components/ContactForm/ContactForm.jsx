import { useId } from "react";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "../ContactForm/ContactForm.module.css";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Занадто коротке ім`я, мінімум 3 символи!")
    .required("Це обов`язкове поле!"),
  number: Yup.string()
    .max(50, "Занадто велике число!")
    .required("Це обов`язкове поле!"),
});

export default function ContactForm({ onAdd }) {
  const fieldId = useId();
  //   const objId = nanoid();

  const handleSubmit = (values, actions) => {
    const newContact = {
      ...values,
      id: nanoid(),
    };
    onAdd(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        id: "",
        name: "",
        number: "",
      }}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor={`${fieldId}-name`}>Name</label>
        <Field
          className={css.input}
          type="text"
          name="name"
          id={`${fieldId}-name`}
        />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label htmlFor={`${fieldId}-number`}>Number</label>
        <Field
          className={css.input}
          type="text"
          name="number"
          id={`${fieldId}-number`}
        />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button type="submit">Add contant</button>
      </Form>
    </Formik>
  );
}
