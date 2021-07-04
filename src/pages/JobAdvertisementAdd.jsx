import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FormField, Button, Select } from "semantic-ui-react";

export default function JobAdvertisementAdd() {
  const initialValues = {
    applicationDeadline: "",
    creationDate: "",
    numberOfOpenPosition: 1,
    minSalary: 2900,
  };
  const schema = Yup.object({
    jobDescription: Yup.string().required("İş bilgisi girilmesi zorunludur."),
    maxSalary: Yup.number().required("Maksimum ücret girilmesi zorunludur."),
    minSalary: Yup.number().required("Minimum ücret girilmesi zorunludur."),
    numberOfOpenPosition: Yup.number().required(
      "Açık Pozisyon bilgisi girilmesi zorunludur."
    ),
    applicationDeadline: Yup.date().required(
      "Son Başvuru Tarihi girilmesi zorunludur."
    ),
    workingPlace: Yup.string(),
    workType: new Yup.StringSchema()
    
  });

  const workTypeOptions = [{ key:"yz", value:"yz", text: "Yarı Zamanlı" }, { key:"tm", value:"tm", text: "Tam Zamanlı" }];

  const workingPlaceOptions = [{ key:"ev", value:"ev", text: "Evden" }, { key:"iş", value:"iş", text: "İşyerinden" }];

  const WorkingPlace = () => (
    <Select
      name="workingPlace"
      placeholder="Çalışma Yeri"
      options={workingPlaceOptions}
    />
  );

 



  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="ui form">
          <FormField>
            <Field name="jobDescription" placeholder="İş Bilgisi"></Field>
          </FormField>
          <FormField>
            <Select
              name="workType"
              placeholder="Çalışma Şekli"
              options={workTypeOptions}
            />
          </FormField>

          <FormField>
            <WorkingPlace/>
          </FormField>

          <FormField>
            <Field
              name="numberOfOpenPosition"
              placeholder="Açık Pozisyon Adedi"
            ></Field>
          </FormField>
          <FormField>
            <Field name="maxSalary" placeholder="Maksimum Maaş"></Field>
          </FormField>
          <FormField>
            <Field name="minSalary" placeholder="Minimum Maaş"></Field>
          </FormField>
          <FormField>
            <Field
              name="applicationDeadline"
              placeholder="Son Başvuru Tarihi"
            ></Field>
          </FormField>

          <Button color="blue" type="submit">
            Kaydet
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
