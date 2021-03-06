import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { FormField, Button, Label } from "semantic-ui-react";
import { Select } from "formik-semantic-ui-react";
import CityService from "../services/cityService";
import PositionService from "../services/positionService";
import WorkingTypeService from "../services/workingTypeService";
import WorkingPlaceService from "../services/workingPlaceService";
import JobAdvertisementService from "../services/jobAdvertisementService";
import * as moment from "moment";

export default function JobAdvertisementAdd() {
  let jobAdvertisementService = new JobAdvertisementService();

  const { userStatus } = useSelector((state) => state.user);
  

  var userName;
  var userType;
  var userId;

  userStatus.map(
    (user) => (
      (userName = user.userFirstName,
      userType = user.userType,
      userId = user.userId
    ))
  )

  const [cities, setCity] = useState([]);
  const [positions, setPosition] = useState([]);
  const [workingTypes, setWorkingType] = useState([]);
  const [workingPlaces, setWorkingPlace] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCity(result.data.data));

    let positionService = new PositionService();
    positionService
      .getPositions()
      .then((result) => setPosition(result.data.data));

    let workingTypeService = new WorkingTypeService();
    workingTypeService
      .getWorkingTypes()
      .then((result) => setWorkingType(result.data.data));

    let workingPlaceService = new WorkingPlaceService();
    workingPlaceService
      .getWorkingPlaces()
      .then((result) => setWorkingPlace(result.data.data));
  }, []);

  const initialValues = {
    applicationDeadline: "",
    creationDate: moment().format("YYYY-MM-DD"),
    numberOfOpenPosition: 1,
    minSalary: 2900,
    employerId: userId,
    active: false
  };
  const schema = Yup.object({
    jobDescription: Yup.string().required("???? bilgisi girilmesi zorunludur."),
    maxSalary: Yup.number().required("Maksimum ??cret girilmesi zorunludur."),
    minSalary: Yup.number().required("Minimum ??cret girilmesi zorunludur."),
    numberOfOpenPosition: Yup.number().required(
      "A????k Pozisyon bilgisi girilmesi zorunludur."
    ),
    applicationDeadline: Yup.date().required(
      "Son Ba??vuru Tarihi girilmesi zorunludur."
    ),
    workingPlaceId: Yup.number().required("??al????ma Yeri Bilgisi Zorunludur."),
    workingTypeId: Yup.number().required("??al????ma ??ekli bilgisi zorunludur."),
    cityId: Yup.number().required("??ehir bilgisi zorunludur."),
    jobTitleId: Yup.number().required("Pozisyon bilgisi zorunludur."),
  });

  const workingTypeOptions = workingTypes.map((workingType, index) => ({
      key: index,
      value: workingType.id,
      text: workingType.workingType,
    }))

  const workingPlaceOptions = workingPlaces.map((workingPlace) => ({
      key: workingPlace.id,
      value: workingPlace.id,
      text: workingPlace.workingPlace,
    }))  

  const workingCityOptions = cities.map((city, index) => ({
      key: index,
      value: city.id,
      text: city.cityName,
    })); 

  const positionOptions = positions.map((position, index) => ({
      key: index,
      value: position.id,
      text: position.jobTitle,
    }))
  

  const WorkingType = () => (
    <Select
      name="workingTypeId"
      placeholder="??al????ma ??ekli"
      options={workingTypeOptions}
    />
  );

  const WorkingPlace = () => (
    <Select
      name="workingPlaceId"
      placeholder="??al????ma Yeri"
      options={workingPlaceOptions}
    />
  );

  const WorkingCity = () => (
    <Select name="cityId" placeholder="??ehir" options={workingCityOptions} />
  );

  const Position = () => (
    <Select
      name="jobTitleId"
      placeholder="Pozisyon"
      options={positionOptions}
    />
  );

  return (
    <div>
       <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          let jobAdvertisement = {
            active: values.active,
            applicationDeadline: values.applicationDeadline,
            city: {id: values.cityId},
            creationDate: values.creationDate,
            employer: {id: values.employerId},
            jobDescription: values.jobDescription,
            maxSalary: values.maxSalary,
            minSalary: values.minSalary,
            numberOfOpenPosition: values.numberOfOpenPosition,
            position: {id: values.jobTitleId},
            workingPlace: {id: values.workingPlaceId},
            workingType: {id: values.workingTypeId}
          };
          jobAdvertisementService.addJobAdvertisement(jobAdvertisement)
        } 
        }
      >
        {userType === 2 ? <Form className="ui form">
          <FormField>
            <Position />
          </FormField>

          <FormField>
            <Field name="jobDescription" placeholder="???? A????klamas??"></Field>
            <ErrorMessage
              name="jobDescription"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
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
              placeholder="A????k Pozisyon Adedi"
            ></Field>
          </FormField>
          <FormField>
            <Field name="maxSalary" placeholder="Maksimum Maa??"></Field>
          </FormField>
          <FormField>
            <Field name="minSalary" placeholder="Minimum Maa??"></Field>
          </FormField>
          <FormField>
            <Field
              name="applicationDeadline"
              placeholder="Son Ba??vuru Tarihi"
            ></Field>
          </FormField>

          <Button color="blue" type="submit">
            Kaydet
          </Button>
        </Form>:<h2>BU SAYFAYI G??R??NT??LEME YETK??N??Z YOK</h2>}
      </Formik>
    </div>
  );
}
