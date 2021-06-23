import React from "react";
import CandidateList from "../pages/CandidateList";
import { Grid, GridColumn } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={12}>
            <CandidateList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
