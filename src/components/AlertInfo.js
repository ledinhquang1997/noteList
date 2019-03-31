import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Alert, AlertContainer } from "react-bs-notifier";

class AlertInfo extends Component {
    handleDismiss = () => {
        this.props.alertOff();
    }
    render() {
        return (
            <AlertContainer position="bottom-right">
            {this.props.alert.status?
                <Alert type={this.props.alert.type==="ADD"||this.props.alert.type==="EDIT"?"info":"danger"} timeout={1000} onDismiss={this.handleDismiss}>{this.props.alert.content}</Alert>
                :""}
            </AlertContainer>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        alert: state.alert
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOff: () => {
            dispatch({type:"ALERT_OFF"})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AlertInfo)