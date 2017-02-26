import React from 'react';
import { Button } from 'react-bootstrap';


const OfficesFooter = props => (
  <div>
    <hr className="dotted" />
    <div className="offices__actions clearfix">
      <Button className="offices__back btn-default btn-default--bold btn-default--strong pull-left">Back</Button>
      <Button className="offices__continue btn-primary btn-primary--offices-continue pull-right">Continue</Button>
      <Button className="offices__skip btn-default btn-default--bold btn-default--strong pull-right">Skip this step</Button>
      <div className="offices__provide-comments pull-left">Provide additional comments</div>
    </div>
  </div>
);

export default OfficesFooter;
