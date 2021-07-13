import React, { useState, useEffect } from "react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { Icon, Menu, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function JobAdvertisementApprove() {
    const [jobAdvertisements, setJobAdvertisement] = useState([]);

    useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getJobAdvertisementByIsActive(false)
      .then((result) => setJobAdvertisement(result.data.data))
  }, []);
    
    return (
        
            <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell> 
            <Table.HeaderCell>İş Açıklaması</Table.HeaderCell>            
            <Table.HeaderCell>En Düşük Ücret</Table.HeaderCell>
            <Table.HeaderCell>En Yüksek Ücret</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon Sayısı</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Aktivasyon Durumu</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row>
              <Table.Cell>{jobAdvertisement.position.jobTitle}</Table.Cell>    
              <Table.Cell>{jobAdvertisement.jobDescription}</Table.Cell>              
              <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
              <Table.Cell>{jobAdvertisement.maxSalary}</Table.Cell>
              <Table.Cell>{jobAdvertisement.numberOfOpenPositions}</Table.Cell>
              <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
              <Table.Cell>{jobAdvertisement.city.cityName}</Table.Cell>
              {!jobAdvertisement.active && <Table.Cell><Link  to={`/showjobadvertisement/${jobAdvertisement.id}`}>Onayla!</Link></Table.Cell>}
              
              
              
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
    
    )
}
