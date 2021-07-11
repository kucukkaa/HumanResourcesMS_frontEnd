import React from "react";
import CandidateList from "../pages/CandidateList";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import JobAdvertisementAdd from "../pages/JobAdvertisementAdd";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import { ToastContainer } from "react-toastify";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={12}>
            {/* <CandidateList/>
            <EmployerList/>            
            <CandidateResumesList/>
            <JobAdvertisementList/> 
            <JobAdvertisementAdd/>*/}
            {/* 
            <Route exact path="/employers" component={EmployerList} />
            
             */}
            <Route exact path="/" component={CandidateList} />
            <Route exact path="/candidates" component={CandidateList} />
            <Route exact path="/jobadvertisement/add" component={JobAdvertisementAdd}/>
            <Route exact path="/jobadvertisements" component={JobAdvertisementList} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
