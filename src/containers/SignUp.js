import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignUpComponent from '../components/SingUp';
import { signUp } from '../actions/Member';

const SignUp = ({
  member,
  isLoading,
  infoMessage,
  errorMessage,
  successMessage,
  onFormSubmit,
}) => (
  <SignUpComponent
    member={member}
    loading={isLoading}
    info={infoMessage}
    error={errorMessage}
    success={successMessage}
    onFormSubmit={onFormSubmit}
  />
);

SignUp.propTypes = {
  member: PropTypes.shape({}).isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  infoMessage: PropTypes.string,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
};

SignUp.defaultProps = {
  infoMessage: null,
  errorMessage: null,
  successMessage: null,
};

const mapStateToProps = (state) => {
  console.log('');
  return ({
    member: state.member || {},
    isLoading: state.status.loading || false,
    infoMessage: state.status.infor || null,
    errorMessage: state.status.error || null,
    successMessage: state.status.success || null,
  });
};

const mapDispatchToProps = {
  onFormSubmit: signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
