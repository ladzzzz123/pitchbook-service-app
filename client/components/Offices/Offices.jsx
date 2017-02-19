import React from 'react';
import { Button } from 'react-bootstrap';
import OfficeCard from './OfficeCard.jsx';

import './Offices.less';

const Offices = props => (
  <div className="offices">
    <h1 className="offices__header">Offices <span className="offices__header--grey">| Company Info</span></h1>
    <div className="offices_description">
      Updating your location and contact informationhelps you appeal to
      regional investorsand service providers
    </div>
    <hr className="dotted" />
    <div className="clearfix">
      <div className="offices__add-action">
        <Button className="btn-addButton">Add New Office</Button>
      </div>
      <div className="offices__amount">3 Offices</div>
    </div>
    <div className="offices__items">
      <OfficeCard />
    </div>
  </div>
);

export default Offices;