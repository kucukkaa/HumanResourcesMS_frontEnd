import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import JobAdvertisementService from "../services/jobAdvertisementService";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import jobDetailPic from "../images/jobdetail.jpg";
import ListGroup from "react-bootstrap/ListGroup";
import Alert from "react-bootstrap/Alert";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function JobAdvertisementDetails() {
  let { id } = useParams();

  const [jobAdvertisement, setJobAdvertisement] = useState({});

  const { userStatus } = useSelector((state) => state.user);

  var userName;
  var userType;
  var userId;

  userStatus.map(
    (user) => (
      (userName = user.userFirstName),
      (userType = user.userType),
      (userId = user.userId)
    )
  );

  let jobAdvertisementService = new JobAdvertisementService();

  useEffect(() => {
    jobAdvertisementService
      .getJobAdvertisementById(id)
      .then((result) => setJobAdvertisement(result.data.data));
  }, []);

  function approve() {
    jobAdvertisementService
      .jobAdvertisementApprove(userId, jobAdvertisement.id)
      .then((result) => {
        toast.success(`${result.data.message}`);
      });
  }

  return (
    <div>
      <Card style={{ width: "35rem" }}>
        <Card.Img variant="top" src={jobDetailPic} />
        <Card.Body>
          <Card.Title>{jobAdvertisement.position?.jobTitle}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item variant="primary">
              <p class="font-weight-bold">Firma</p>
            </ListGroup.Item>
            <ListGroup.Item>
              {jobAdvertisement.employer?.companyName}
            </ListGroup.Item>
            <ListGroup.Item variant="primary">
              <p class="font-weight-bold">Aranan Özellikler</p>
            </ListGroup.Item>
            <ListGroup.Item>{jobAdvertisement.jobDescription}</ListGroup.Item>
            <ListGroup.Item variant="primary">
              <p class="font-weight-bold">Minimum Maaş</p>
            </ListGroup.Item>
            <ListGroup.Item>{jobAdvertisement.minSalary}</ListGroup.Item>
            <ListGroup.Item variant="primary">
              <p class="font-weight-bold">Maksimum Maaş</p>
            </ListGroup.Item>
            <ListGroup.Item>{jobAdvertisement.maxSalary}</ListGroup.Item>
            {/* to-do tüm alanlar listelenecek */}
          </ListGroup>
          <Alert variant="danger">
            Tüm alanları kontrol etmeden onaylama yapmayınız!
          </Alert>
          <Link to={`/jobadvertisementapprove`}>
            <Button variant="primary" onClick={approve}>
              Onayla
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
