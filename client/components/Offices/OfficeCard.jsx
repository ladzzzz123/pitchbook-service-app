import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

import './OfficeCard.less';

const OfficeCard = (props) => {
  const { office } = props;

  function handlerEdit() {
    props.handlerShowEditForm(office._id);
  }

  return (
    <div className="office-card">
      <Grid fluid>
        <Row>
          <Col xs={6} sm={6} md={5} lg={4}>
            <dl className="row">
              <dt className="col-sm-4">Address:</dt>
              <dd className="col-sm-8">
                {
                  office.primary_hq
                    ? <div className="office-card__primary-hq">
                      <span className="glyphicon glyphicon-ok" />
                      &nbsp;Primary HQ
                    </div>
                  : null
                }
                <div>{office.address_1}</div>
                <div>{office.address_2}</div>
                <div>{office.city}, {office.state} {office.postal_code}</div>
                <div>{office.country}</div>
              </dd>
            </dl>
          </Col>
          <Col xs={6} sm={6} md={5} lg={4}>
            <dl className="row">
              <dt className="col-sm-4">Phone:</dt>
              <dd className="col-sm-8">{office.phone}</dd>
              <dt className="col-sm-4">Fax:</dt>
              <dd className="col-sm-8">{office.fax}</dd>
              <dt className="col-sm-4">Email:</dt>
              <dd className="col-sm-8">{office.email}</dd>
            </dl>
          </Col>
          <Col xs={12} sm={12} md={2} lg={4} className="no-padding-left no-padding-right">
            <div className="box-actions">
              <Button className="btn-default--officeCard btn-default--small">Remove</Button>
              <Button
                bsStyle="primary"
                className="btn-primary--officeCard btn-default--small"
                onClick={handlerEdit}
              >
                Edit
              </Button>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default OfficeCard;
