import React from "react";
import { Header, Segment, Grid, Image, Breadcrumb } from "semantic-ui-react";
import logo from "../assets/images/logo.svg";

const HeaderWithLogo = ({breadcrumbSection}) => (
  <>
    <Grid columns={2} textAlign="center" verticalAlign="middle" className="header-main" padded>
      <Grid.Row>
        <Grid.Column>
          <Image
            verticalAlign="middle"
            src={logo}
            alt="Rick and Morty"
            className="logo"
          />
        </Grid.Column>
        <Grid.Column>
          <Breadcrumb size="big">
            <Breadcrumb.Section active>{breadcrumbSection}</Breadcrumb.Section>
          </Breadcrumb>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Segment vertical padded='very'>
      <Header
        as="h1"
        content="Rick and Morty"
        textAlign="center"
        style={{ textTransform: "uppercase" }}
      />
    </Segment>
  </>
);

export default HeaderWithLogo;
