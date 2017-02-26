import React from 'react';
import { FormGroup, FormControl, Col, HelpBlock } from 'react-bootstrap';

import getUniqueHashID from '../../utils/getUniqueHashID';

import './FormGroupInput.less';

const FormGroupInput = props => (
  <FormGroup
    controlId={props.controlId}
    validationState={(props.error) ? 'error' : null}
  >
    <Col sm={5}>{props.labelName}</Col>
    <Col sm={7}>
      <FormControl
        type={props.type}
        name={props.name}
        defaultValue={props.defaultValue}
        onChange={props.handlerChange}
      />
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
