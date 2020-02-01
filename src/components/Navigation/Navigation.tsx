import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Button, ButtonBlue } from 'styles/components/Button';

export class Navigation extends React.PureComponent {
  render() {
    return (
      <Grid columns={16}>
        <Grid.Column width={7} />
        <Grid.Column width={1} stretched>
          <Button content={'green button'} />
        </Grid.Column>
        <Grid.Column width={1} stretched>
          <ButtonBlue content={'blue button'} />
        </Grid.Column>
        <Grid.Column />
      </Grid>
    );
  }
}