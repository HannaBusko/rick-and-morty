import { Header, Segment, Grid, Image, Breadcrumb } from "semantic-ui-react";
import logo from "../assets/images/logo.svg";

import { main_header } from "../assets/service/locale";

const HeaderWithLogo = ({breadcrumbSection}:any) => (
  <>
    <Grid columns={2} textAlign="center" verticalAlign="middle" className="header-main" padded>
      <Grid.Row>
        <Grid.Column>
          <Image
            verticalAlign="middle"
            src={logo}
            alt={main_header}
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
    <Segment vertical padded='very' className="header-title">
      <Header
        as="h1"
        content={main_header}
        textAlign="center"
        style={{ textTransform: "uppercase" }}
      />
    </Segment>
  </>
);

export default HeaderWithLogo;
