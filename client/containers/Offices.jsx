import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import getUniqueID from '../utils/getUniqueID';
import OfficeActions from '../actions/office';
import OfficesActions from '../actions/offices';

import OfficesHeader from '../components/Offices/OfficesHeader';
import OfficesFooter from '../components/Offices/OfficesFooter';
import OfficeCard from '../components/Offices/OfficeCard';
import OfficeForm from '../components/Offices/OfficeForm';
import OfficeRemoveModal from '../components/Offices/OfficeRemoveModal';

class OfficesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowAddNewOfficeForm: false,
      isShowRemoveModal: false
    };
  }

  componentWillMount() {
    this.props.officesActions.getAllOffices();
  }

  componentWillReceiveProps(nextProps) {
    const nextOffice = nextProps.office.item;

    if (nextOffice && Object.keys(nextOffice).length &&
    JSON.stringify(nextOffice) !== JSON.stringify(this.props.office.item)) {
      this.props.officesActions.getAllOffices();
    }
  }

  toggleAddNewOfficeForm() {
    this.setState({
      isShowAddNewOfficeForm: !this.state.isShowAddNewOfficeForm
    });
  }

  handlerShowEditForm(officeID) {
    this.props.officeActions.officeEditStart(officeID);
  }

  handlerHideEditForm() {
    this.props.officeActions.officeEditFinish();
  }

  handlerCreateOffice(formData) {
    this.props.officeActions.createOffice(formData);
    this.toggleAddNewOfficeForm();
  }

  handlerUpdateOffice(formData) {
    this.props.officeActions.updateOffice(formData);
    this.handlerShowEditForm();
  }

  showRemoveModal(officeID) {
    this.setState({
      isShowRemoveModal: true,
      removeOfficeID: officeID
    });
  }

  handlerCloseRemoveModal() {
    this.setState({
      isShowRemoveModal: false,
      removeOfficeID: null
    });
  }

  handlerRemoveOffice(reasonOfDelete) {
    this.props.officeActions.deleteOffice(this.state.removeOfficeID, reasonOfDelete);
    this.handlerCloseRemoveModal();
  }

  render() {
    const { offices, office } = this.props;

    return (
      <div className="offices">
        <Grid fluid>
          <Row>
            <Col xs={12} sm={11} md={11} lg={11} className="no-padding-left no-padding-right">
              <OfficesHeader />
              <div className="clearfix">
                <div className="offices__add-action">
                  <Button
                    className="btn-default btn-default--bold"
                    onClick={::this.toggleAddNewOfficeForm}
                  >
                    Add New Office
                  </Button>
                </div>
                <div className="offices__amount">
                  {this.props.offices.length}
                  {
                    offices.length === 1
                    ? ' Office'
                    : ' Offices'
                  }
                </div>
              </div>
              <div className="offices__new-office-form">
                {
                  this.state.isShowAddNewOfficeForm
                  ?
                    <OfficeForm
                      handlerCancel={::this.toggleAddNewOfficeForm}
                      handlerSubmit={::this.handlerCreateOffice}
                    />
                  : null
                }
              </div>
              <div className="offices__items">
                {
                  offices.map((officeItem) => {
                    if (officeItem._id === office.editItemID) {
                      return (
                        <OfficeForm
                          key={getUniqueID()}
                          office={officeItem}
                          handlerCancel={::this.handlerHideEditForm}
                          handlerSubmit={::this.handlerUpdateOffice}
                        />
                      );
                    }

                    return (
                      <OfficeCard
                        key={getUniqueID()}
                        office={officeItem}
                        handlerShowEditForm={::this.handlerShowEditForm}
                        handlerRemove={::this.showRemoveModal}
                      />
                    );
                  }
                  )
                }
              </div>
              <OfficesFooter />
            </Col>
          </Row>
        </Grid>
        <OfficeRemoveModal
          isShowModal={this.state.isShowRemoveModal}
          handlerClose={::this.handlerCloseRemoveModal}
          handlerSubmit={::this.handlerRemoveOffice}
        />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { office, offices, errors } = state;

  return {
    offices: offices.items,
    office,
    errors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    officeActions: bindActionCreators(OfficeActions, dispatch),
    officesActions: bindActionCreators(OfficesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OfficesContainer);
