import React from 'react';
import { Form, FormGroup, FormControl, Checkbox, Col, Button } from 'react-bootstrap';
import getDataFromForm from '../../utils/getDataFromForm';
import validateFormData from '../../utils/validateFormData';

import './OfficeForm.less';

class OfficeCard extends React.Component {
  static defaultProps = {
    errors: {
      address_1: null,
      city: null,
      state: null,
      postal_code: null,
      country: null,
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      errors: {
      }
    };
  }

  handlerSubmit(e) {
    e.preventDefault();

    const formData = getDataFromForm(e.target);
    validateFormData(Object.keys(this.props.errors), formData,
      (hasErrors, errorState) => {
        if (hasErrors) {
          return this.setState({
            errors: errorState
          });
        }

        return this.props.handlerSubmit(formData);
      }
    );
  }

  render() {
    const office = this.props.office || {};

    return (
      <div className="office-form clearfix" onSubmit={::this.handlerSubmit}>
        <Form horizontal>
          <Col xs={6} sm={6} md={5} lg={4}>
            <FormGroup controlId="formHorizontalAddress1">
              <Col sm={5}>
                *Street Address
              </Col>
              <Col sm={7}>
                <FormControl
                  type="text"
                  name="address_1"
                  defaultValue={office.address_1}
                />
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalAddress2">
              <Col sm={5}>
                Address 2
              </Col>
              <Col sm={7}>
                <FormControl
                  type="text"
                  name="address_2"
                  defaultValue={office.address_2}
                />
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalCity">
              <Col sm={5}>
                *City
              </Col>
              <Col sm={7}>
                <FormControl
                  type="text"
                  name="city"
                  defaultValue={office.city}
                />
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalStateProvince">
              <Col sm={5}>
                *State/Province
              </Col>
              <Col sm={7}>
                <FormControl
                  type="text"
                  name="state"
                  defaultValue={office.state}
                />
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPostalCode">
              <Col sm={5}>
                *Postal Code
              </Col>
              <Col sm={7}>
                <FormControl
                  type="text"
                  name="postal_code"
                  defaultValue={office.postal_code}
                />
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalCountry">
              <Col sm={5}>
                *Country
              </Col>
              <Col sm={7}>
                <FormControl
                  name="country"
                  componentClass="select"
                  defaultValue={office.country}
                >
                  <option value="">Choose country</option>
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
                <FormControl
                  type="text"
                  name="phone"
                  defaultValue={office.phone}
                />
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalFax">
              <Col sm={5}>
                Fax
              </Col>
              <Col sm={7}>
                <FormControl
                  type="text"
                  name="fax"
                  defaultValue={office.fax}
                />
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalEmail">
              <Col sm={5}>
                Email
              </Col>
              <Col sm={7}>
                <FormControl
                  type="email"
                  name="email"
                  defaultValue={office.email}
                />
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
              <Col sm={5}>
                Office Type
              </Col>
              <Col sm={7}>
                <Checkbox
                  name="primary_hq"
                  defaultChecked={(office.primary_hq) ? 'checked' : ''}
                >
                  Primary HQ
                </Checkbox>
              </Col>
            </FormGroup>
          </Col>
          <Col xs={12} sm={12} md={2} lg={4} className="no-padding-left no-padding-right">
            <div className="box-actions">
              <Button
                className="btn-default--officeCard btn-default--small"
                onClick={this.props.handlerCancel}
              >Cancel</Button>
              <Button type="submit" bsStyle="primary" className="btn-primary--officeCard btn-default--small">Save</Button>
            </div>
          </Col>
        </Form>
      </div>
    );
  }
}

export default OfficeCard;
