import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Grid fluid>
          <Row className="show-grid app-grid row-offcanvas row-offcanvas-left">
            <Row className="row-offcanvas row-offcanvas-right">
              <Col
                xs={4} sm={2}
                className="no-padding-left no-padding-right app-grid__sidebar"
              >
                <Sidebar />
              </Col>
              <Col xs={11} sm={8} className="app-grid__content">
                <div>{this.props.children}</div>
              </Col>
            </Row>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
