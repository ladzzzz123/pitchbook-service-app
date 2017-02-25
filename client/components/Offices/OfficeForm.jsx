import React from 'react';
import { Form, FormGroup, FormControl, Checkbox, Col, Button } from 'react-bootstrap';

import './OfficeForm.less';

const OfficeCard = props => (
  <div className="office-form clearfix" onSubmit={props.handlerSubmit}>
    <Form horizontal>
      <Col xs={6} sm={6} md={5} lg={4}>
        <FormGroup controlId="formHorizontalAddress1">
          <Col sm={5}>
            *Street Address
          </Col>
          <Col sm={7}>
            <FormControl type="text" placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalAddress2">
          <Col sm={5}>
            Address 2
          </Col>
          <Col sm={7}>
            <FormControl type="text" placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalCity">
          <Col sm={5}>
            *City
          </Col>
          <Col sm={7}>
            <FormControl type="text" placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalStateProvince">
          <Col sm={5}>
            *State.Province
          </Col>
          <Col sm={7}>
            <FormControl type="text" placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPostalCode">
          <Col sm={5}>
            *Postal Code
          </Col>
          <Col sm={7}>
            <FormControl type="text" placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalCountry">
          <Col sm={5}>
            *Country
          </Col>
          <Col sm={7}>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">Choose country</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
            </FormControl>
          </Col>
        </FormGroup>
      </Col>
      <Col xs={6} sm={6} md={5} lg={4}>
        <FormGroup controlId="formHorizontalPhone">
          <Col sm={5}>
            Phone
          </Col>
          <Col sm={7}>
            <FormControl type="text" placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalFax">
          <Col sm={5}>
            Fax
          </Col>
          <Col sm={7}>
            <FormControl type="text" placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalEmail">
          <Col sm={5}>
            Email
          </Col>
          <Col sm={7}>
            <FormControl type="email" placeholder="" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col sm={5}>
            Office Type
          </Col>
          <Col sm={7}>
            <Checkbox>
              Primary HQ
            </Checkbox>
          </Col>
        </FormGroup>
      </Col>
      <Col xs={12} sm={12} md={2} lg={4} className="no-padding-left no-padding-right">
        <div className="box-actions">
          <Button className="btn-default--officeCard btn-default--small">Cancel</Button>
          <Button type="submit" bsStyle="primary" className="btn-primary--officeCard btn-default--small">Save</Button>
        </div>
      </Col>
    </Form>
  </div>
);

export default OfficeCard;
