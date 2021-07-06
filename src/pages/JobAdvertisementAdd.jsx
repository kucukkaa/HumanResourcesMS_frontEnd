import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FormField, Button } from "semantic-ui-react";
import { Select } from "formik-semantic-ui-react";
import CityService from "../services/cityService";

export default function JobAdvertisementAdd() {
  const [cities, setCity] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCity(result.data.data));
  }, []);

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
    workType: Yup.string(),
    city: Yup.string()
  });

  const workTypeOptions = [
    { key: "yz", value: "yz", text: "Yarı Zamanlı" },
    { key: "tm", value: "tm", text: "Tam Zamanlı" },
  ];

  const workingPlaceOptions = [
    { key: "ev", value: "ev", text: "Evden" },
    { key: "iş", value: "iş", text: "İşyerinden" },
  ];

  const workingCityOptions = []

  workingCityOptions.push(cities.map((city)=>({key: city.id, value:city.id, text: city.cityName})))
  console.log(workingCityOptions)

  const WorkingPlace = () => (
    <Select
      name="workingPlace"
      placeholder="Çalışma Yeri"
      options={workingPlaceOptions}
    />
  );

  const WorkingCity = () => (
    <Select name="city" placeholder="Şehir" options={workingCityOptions[0]}/>
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
            <WorkingCity/>
          </FormField>

          <FormField>
            <Select
              name="workType"
              placeholder="Çalışma Şekli"
              options={workTypeOptions}
            />
          </FormField>

          <FormField>
            <WorkingPlace />
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
