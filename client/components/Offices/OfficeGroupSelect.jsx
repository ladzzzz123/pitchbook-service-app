import React from 'react';
import { FormGroup, FormControl, Col, HelpBlock } from 'react-bootstrap';

import getUniqueHashID from '../../utils/getUniqueHashID';

const FormGroupInput = props => (
  <FormGroup
    controlId={props.controlId}
    validationState={(props.error) ? 'error' : null}
  >
    <Col sm={5}>{props.labelName}</Col>
    <Col sm={7}>
      <FormControl
        name={props.name}
        componentClass="select"
        defaultValue={props.defaultValue}
      >
        <option value="">Choose country</option>
        <option value="United Arab Emirates">United Arab Emirates</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="United States">United States</option>
      </FormControl>
      {
        props.error
          ? <HelpBlock>{props.error}</HelpBlock>
          : null
      }
    </Col>
  </FormGroup>
);

FormGroupInput.defaultProps = {
  type: 'text',
  name: '',
  controlId: getUniqueHashID(),
  defaultValue: '',
  labelName: '',
  handlerChange: () => {},
  error: ''
};

FormGroupInput.propTypes = {
  type: React.PropTypes.string,
  name: React.PropTypes.string,
  controlId: React.PropTypes.string,
  defaultValue: React.PropTypes.string,
  labelName: React.PropTypes.string.isRequired,
  handlerChange: React.PropTypes.func,
  error: React.PropTypes.string
};


export default FormGroupInput;
