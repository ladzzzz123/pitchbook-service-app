import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

import './OfficeCard.less';

const Offices = props => (
  <div className="office">
    <Grid fluid>
      <Row>
        <Col xs={12} sm={12} md={5} lg={4} className="no-padding-left no-padding-right">
          <dl className="row">
            <dt className="col-sm-4">Address:</dt>
            <dd className="col-sm-8">
              <div className="office__primary-hq">Primary HQ</div>
              <div className="office__stree-address-1">901 Fifth Avenue</div>
              <div className="office__stree-address-2">Suite 1200</div>
              <div className="office__postal-data">Seattle, WA 98164</div>
              <div className="office__postal-data">United States</div>
            </dd>
          </dl>
        </Col>
        <Col xs={12} sm={12} md={5} lg={4} className="no-padding-left no-padding-right">
          <dl className="row">
            <dt className="col-sm-4">Phone:</dt>
            <dd className="col-sm-8">+1 (206) 623 - 1986</dd>
            <dt className="col-sm-4">Fax:</dt>
            <dd className="col-sm-8">+1 (206) 623 - 2708</dd>
            <dt className="col-sm-4">Email:</dt>
            <dd className="col-sm-8">info@pitchbook.com</dd>
          </dl>
        </Col>
        <Col xs={12} sm={12} md={2} lg={4} className="no-padding-left no-padding-right">
          <div className="office__actions">
            <Button className="btn-removeButton btn-removeButton--oficeCard">Remove</Button>
            <Button className="btn-editButton btn-editButton--oficeCard">Edit</Button>
          </div>
        </Col>
      </Row>
    </Grid>
    {/* <div className="row">
      <div className="col-sm-5">
        <dl className="row">
          <dt className="col-sm-4">Address:</dt>
          <dd className="col-sm-8">
            <div className="office__primary-hq">Primary HQ</div>
            <div className="office__stree-address-1">901 Fifth Avenue</div>
            <div className="office__stree-address-2">Suite 1200</div>
            <div className="office__postal-data">Seattle, WA 98164</div>
            <div className="office__postal-data">United States</div>
          </dd>
        </dl>
      </div>
      <div className="col-sm-5">
        <dl className="row">
          <dt className="col-sm-4">Phone:</dt>
          <dd className="col-sm-8">+1 (206) 623 - 1986</dd>
          <dt className="col-sm-4">Fax:</dt>
          <dd className="col-sm-8">+1 (206) 623 - 2708</dd>
          <dt className="col-sm-4">Email:</dt>
          <dd className="col-sm-8">info@pitchbook.com</dd>
        </dl>
      </div>
      <div className="col-sm-2">
        <Button className="btn-removeButton btn-removeButton--oficeCard">Remove</Button>
        <Button className="btn-editButton btn-editButton--oficeCard">Edit</Button>
      </div>
    </div> */}
  </div>
);

export default Offices;
