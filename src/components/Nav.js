import React, { Component } from 'react';
import {connect} from "react-redux"
class Nav extends Component {
    handleAdd = (e) => {
        e.preventDefault();
        this.props.changeEditStatus();
        this.props.reset();
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <a className="navbar-brand" href="/">Fedu</a>
                <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="" onClick={(e)=>this.handleAdd(e)}>Add new note</a>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({type:"CHANGE_ADD_STATUS"});
        },
        reset: () => {
            dispatch({type:"RESET"});
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)
