import React from "react";
import CandidateList from "../pages/CandidateList";
import EmployerList from "../pages/EmployerList";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import JobAdvertisementAdd from "../pages/JobAdvertisementAdd";
import CandidateResumesList from "../pages/CandidateResumesList";
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
            <JobAdvertisementList/> */}
            <JobAdvertisementAdd/>
            {/* <Route exact path="/candidates" component={CandidateList} />
            <Route exact path="/employers" component={EmployerList} />
            <Route exact path="/jobadvertisementadd" componet={JobAdvertisementAdd} />
            <Route exact path="/jobadvertisementlist" componet={JobAdvertisementList} /> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
