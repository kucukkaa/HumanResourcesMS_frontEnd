import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import EmployerService from "../services/employerService";
import * as Yup from "yup";
import { FormField, Button, Label } from "semantic-ui-react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function EmployerUpdate() {
  const { userStatus } = useSelector((state) => state.user);

  var userFirstName;
  var userType;
  var userId;

  userStatus.map(
    (user) => (
      (userFirstName = user.userFirstName),
      (userType = user.userType),
      (userId = user.userId)
    )
  );

  const [employer, setEmployer] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployerById(userId)
      .then((result) => setEmployer(result.data.data));
  }, []);

  const initialValues = {
    email: employer.email,
    companyName: employer.companyName,
    website: employer.website,
    phoneNumber: employer.phoneNumber,
  };

  const schema = Yup.object({
    email: Yup.string().required(" zorunludur."),
    companyName: Yup.string().required("zorunludur."),
    website: Yup.string().required("zorunludur."),
    phoneNumber: Yup.string().required("zorunludur."),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        
      >
        <Form className="ui form">
          <FormField>
            <Field name="email" placeholder={initialValues.email}></Field>
          </FormField>
          <FormField>
            <Field name="companyName" placeholder={initialValues.companyName}></Field>
          </FormField>
          <FormField>
            <Field name="website" placeholder={initialValues.website}></Field>
          </FormField>
          <FormField>
            <Field name="phoneNumber" placeholder={initialValues.phoneNumber}></Field>
          </FormField>
          <Button color="blue" type="submit">
            Güncelle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
