import React from 'react';
import { Form, FormGroup, FormControl, Checkbox, Col, Button } from 'react-bootstrap';
import FormGroupInput from '../common/FormGroupInput';
import OfficeGroupSelect from './OfficeGroupSelect';

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

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    const newState = { ...this.state };
    newState.errors[name] = null;

    this.setState(newState);
  }

  render() {
    const office = this.props.office || {};

    return (
      <div className="office-form clearfix" onSubmit={::this.handlerSubmit}>
        <Form horizontal>
          <Col xs={6} sm={6} md={5} lg={4}>
            <FormGroupInput
              labelName="*Street Address"
              name="address_1"
              defaultValue={office.address_1}
              handlerChange={::this.handleInputChange}
              error={this.state.errors.address_1}
            />
            <FormGroupInput
              labelName="Address 2"
              name="address_2"
              defaultValue={office.address_2}
            />
            <FormGroupInput
              labelName="*City"
              name="city"
              defaultValue={office.city}
              handlerChange={::this.handleInputChange}
              error={this.state.errors.city}
            />
            <FormGroupInput
              labelName="*State/Province"
              name="state"
              defaultValue={office.state}
              handlerChange={::this.handleInputChange}
              error={this.state.errors.state}
            />
            <FormGroupInput
              labelName="*Postal Code"
              name="postal_code"
              defaultValue={office.postal_code}
              handlerChange={::this.handleInputChange}
              error={this.state.errors.postal_code}
            />
            <OfficeGroupSelect
              labelName="*Country"
              name="country"
              defaultValue={office.country}
              handlerChange={::this.handleInputChange}
              error={this.state.errors.country}
            />
          </Col>
          <Col xs={6} sm={6} md={5} lg={4}>
            <FormGroupInput
              labelName="Phone"
              name="phone"
              defaultValue={office.phone}
            />
            <FormGroupInput
              labelName="Fax"
              name="fax"
              defaultValue={office.fax}
            />
            <FormGroupInput
              labelName="Email"
              type="email"
              name="email"
              defaultValue={office.email}
            />
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
