import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WelcomeComponent from '../components/Welcome';
import { getMemberData } from '../actions/Member';

class Welcome extends Component {
  static propTypes = {
    getMemberData: PropTypes.func.isRequired,
    member: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      error: PropTypes.string,
    }).isRequired,
  }

  componentDidMount = () => this.props.getMemberData();

  render = () => {
    const { member } = this.props;
    return <WelcomeComponent member={member} />;
  }
}

const mapStateToProps = state => ({
  member: state.member || {},
});

const mapDispatchToProps = {
  getMemberData,
};
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

