import React from "react";
import CandidateList from "../pages/CandidateList";
import EmployerList from "../pages/EmployerList";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import CandidateResumesList from "../pages/CandidateResumesList";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={12}>
            <CandidateList/>
            <EmployerList/>
            <JobAdvertisementList/>
            <CandidateResumesList/>
            
            {/* <Route exact path="/candidates" component={CandidateList} />
            <Route exact path="/employers" component={EmployerList} /> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
