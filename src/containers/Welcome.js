import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import WelcomeComponent from '../components/Welcome';
import { Login } from '../actions/Auth';

const Welcome = ({
  onFormSubmit,
  member,
  isLoading,
  infoMessage,
  errorMessage,
  successMessage,
}) => (
  <WelcomeComponent
    onFormSubmit={onFormSubmit}
    member={member}
    loading={isLoading}
    info={infoMessage}
    error={errorMessage}
    success={successMessage}
  />
);

Welcome.propTypes = {
  member: PropTypes.shape({}).isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  infoMessage: PropTypes.string,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
};

Welcome.defaultProps = {
  infoMessage: null,
  errorMessage: null,
  successMessage: null,
};

const mapStateToProps = state => ({
  member: {},
  isLoading: false,
  infoMessage: null,
  errorMessage: null,
  successMessage: null,
});

const mapDispatchToProps = {
  onFormSubmit: Login,
};
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
