import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import JobAdvertisementService from "../services/jobAdvertisementService";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import jobDetailPic from "../images/jobdetail.jpg";
import ListGroup from "react-bootstrap/ListGroup";
import Alert from 'react-bootstrap/Alert'

export default function JobAdvertisementDetails() {
  let { id } = useParams();

  const [jobAdvertisement, setJobAdvertisement] = useState({});

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisementById(id)
      .then((result) => setJobAdvertisement(result.data.data));
  }, []);

  return (
    <div>
      {/* <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="center"
              size="medium"
              src="https://st1.myideasoft.com/idea/ct/82/myassets/blogs/yazilimci-gibi-dusunmek.jpg"
            />
            <Card.Header>{jobAdvertisement.position?.jobTitle}</Card.Header>
            <Card.Meta>{jobAdvertisement.jobDescription}</Card.Meta>
            <Card.Description>
              Tüm alanların doğru olduğundan emin olduktan sonra <strong>onaylayınız!</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group> */}

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

            <Alert variant="danger">
              Tüm alanları kontrol etmeden onaylama yapmayınız!
            </Alert>
          </ListGroup>
          <Button variant="primary">Onayla</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
