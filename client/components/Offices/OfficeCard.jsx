import React from 'react';
import { Button } from 'react-bootstrap';

import './OfficeCard.less';

const Offices = props => (
  <div className="office">
    <div className="row">
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
    </div>
  </div>
);

export default Offices;
