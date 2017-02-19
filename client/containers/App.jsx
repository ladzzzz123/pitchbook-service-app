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
          <Row className="show-grid">
            <Col xs={3} sm={3} md={3} className="no-padding-left no-padding-right show-grid__sidebar">
              <Sidebar />
            </Col>
            <Col xs={9} sm={9} md={9} className="show-grid__content">
              <div>{this.props.children}</div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
