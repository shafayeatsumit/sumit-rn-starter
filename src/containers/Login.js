import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginComponent from '../components/Login';
import { login } from '../actions/Member';

const Login = ({
  onFormSubmit,
  member,
  isLoading,
  infoMessage,
  errorMessage,
  successMessage,
}) => (
  <LoginComponent
    onFormSubmit={onFormSubmit}
    member={member}
    loading={isLoading}
    info={infoMessage}
    error={errorMessage}
    success={successMessage}
  />
);

Login.propTypes = {
  member: PropTypes.shape({}).isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  infoMessage: PropTypes.string,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
};

Login.defaultProps = {
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
  onFormSubmit: login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
