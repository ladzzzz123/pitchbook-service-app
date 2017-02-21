import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import getUniqueID from '../../utils/getUniqueID';
import OfficeCard from './OfficeCard.jsx';

import './Offices.less';

const Offices = props => (
  <div className="offices">
    <Grid fluid>
      <Row>
        <Col xs={12} sm={12} md={12} lg={10} className="no-padding-left no-padding-right">
          <h1 className="offices__header">Offices <span className="offices__header--grey">| Company Info</span></h1>
          <div className="offices_description">
            Updating your location and contact informationhelps you appeal to
            regional investorsand service providers
          </div>
          <hr className="dotted" />
          <div className="clearfix">
            <div className="offices__add-action">
              <Button className="btn-default btn-default--bold">Add New Office</Button>
            </div>
            <div className="offices__amount">
              {props.offices.length}
              {
                props.offices.length === 1
                ? ' Office'
                : ' Offices'
              }
            </div>
          </div>
          <div className="offices__items">
            {
              props.offices.map(office =>
                <OfficeCard
                  key={getUniqueID()}
                  office={office}
                />
              )
            }
          </div>
          <hr className="dotted" />
          <div className="offices__actions clearfix">
            <Button className="offices__back btn-default btn-default--bold btn-default--strong pull-left">Back</Button>
            <Button className="offices__continue btn-primary btn-primary--offices-continue pull-right">Continue</Button>
            <Button className="offices__skip btn-default btn-default--bold btn-default--strong pull-right">Skip this step</Button>
            <div className="offices__provide-comments pull-left">Provide additional comments</div>
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Offices;
