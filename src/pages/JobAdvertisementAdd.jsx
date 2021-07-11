import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { FormField, Button, Label } from "semantic-ui-react";
import { Select } from "formik-semantic-ui-react";
import CityService from "../services/cityService";
import PositionService from "../services/positionService";
import WorkingTypeService from "../services/workingTypeService";
import WorkingPlaceService from "../services/workingPlaceService";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisementAdd() {
  let jobAdvertisementService = new JobAdvertisementService()
  
  const {userStatus} = useSelector(state => state.user)
  const dispatch = useDispatch()

  var userName;
  var userType;
  var userId

  userStatus.map(
    (user) => ((userName = user.userFirstName), (userType = user.userType), (userId=user.userId))
  );

  
  
  
  const [cities, setCity] = useState([]);
  const [positions, setPosition] = useState([]);
  const [workingTypes, setWorkingType] = useState([]);
  const [workingPlaces, setWorkingPlace] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCity(result.data.data));
  }, []);

  useEffect(() => {
    let positionService = new PositionService();
    positionService
      .getPositions()
      .then((result) => setPosition(result.data.data));
  }, []);

  useEffect(() => {
    let workingTypeService = new WorkingTypeService();
    workingTypeService
      .getWorkingTypes()
      .then((result) => setWorkingType(result.data.data));
  }, []);

  useEffect(() => {
    let workingPlaceService = new WorkingPlaceService();
    workingPlaceService
      .getWorkingPlaces()
      .then((result) => setWorkingPlace(result.data.data));
  }, []);

  const initialValues = {
    applicationDeadline: "",
    creationDate: "",
    numberOfOpenPosition: 1,
    minSalary: 2900,
    id: userId
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
    workingPlace: Yup.string().required("Çalışma Yeri Bilgisi Zorunludur."),
    workType: Yup.string().required("Çalışma Şekli bilgisi zorunludur."),
    city: Yup.string().required("Şehir bilgisi zorunludur."),
    position: Yup.string().required("Pozisyon bilgisi zorunludur."),
  });

  const workingTypeOptions = [];
  workingTypeOptions.push(
    workingTypes.map((workingType) => ({
      key: workingType.id,
      value: workingType.id,
      text: workingType.workingType,
    }))
  );

  const workingPlaceOptions = [];
  workingPlaceOptions.push(
    workingPlaces.map((workingPlace) => ({
      key: workingPlace.id,
      value: workingPlace.id,
      text: workingPlace.workingPlace,
    }))
  );

  const workingCityOptions = [];
  workingCityOptions.push(
    cities.map((city) => ({
      key: city.id,
      value: city.id,
      text: city.cityName,
    }))
  );

  const positionOptions = [];
  positionOptions.push(
    positions.map((position) => ({
      key: position.id,
      value: position.id,
      text: position.jobTitle,
    }))
  );

  const WorkingType = () => (
    <Select
      name="workType"
      placeholder="Çalışma Şekli"
      options={workingTypeOptions[0]}
    />
  );

  const WorkingPlace = () => (
    <Select
      name="workingPlace"
      placeholder="Çalışma Yeri"
      options={workingPlaceOptions[0]}
    />
  );

  const WorkingCity = () => (
    <Select name="city" placeholder="Şehir" options={workingCityOptions[0]} />
  );

  const Position = () => (
    <Select
      name="position"
      placeholder="Pozisyon"
      options={positionOptions[0]}
    />
  );

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => jobAdvertisementService.postJobAdvertisement(values)
        }
      >
        <Form className="ui form">
          <FormField>
            <Position/>
          </FormField>

          <FormField>
            <Field name="jobDescription" placeholder="İş Açıklaması"></Field>
            <ErrorMessage name ="jobDescription" render={error=>
              <Label pointing basic color="red" content={error}></Label>
            }></ErrorMessage>
          </FormField>
          <FormField>
            <WorkingCity />
          </FormField>
          <FormField>
            <WorkingType />
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
