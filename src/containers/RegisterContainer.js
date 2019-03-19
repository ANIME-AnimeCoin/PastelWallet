import {connect} from 'react-redux';

import {Register, Register2} from '../components/RegisterComponent';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    dispatch
});


export const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);
export const Register2Container = connect(mapStateToProps, mapDispatchToProps)(Register2);