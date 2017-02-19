import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Offices from '../components/Offices/Offices';
import OfficesActions from '../actions/offices';

class OfficesContainer extends React.Component {
  componentWillMount() {
    this.props.actions.getAllOffices();
  }

  render() {
    console.log(this.props);
    return (
      <Offices
        offices={this.props.offices}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { offices, errors } = state;

  return {
    offices: offices.items,
    errors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(OfficesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OfficesContainer);
