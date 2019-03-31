import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import { connect } from 'react-redux';
import AlertInfo from './components/AlertInfo';

class App extends Component {
  renderNoteForm = () => {
    if (this.props.status.isEdit || this.props.status.isAdd) {
      return <NoteForm />
    }
  }
  render() {
    return (
      <div>
        <AlertInfo/>
        <Nav />
        <div className="container mt-4">
          <div className="row">
            <NoteList />
            {this.renderNoteForm()}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    status: state.status
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({ type: "CHANGE_EDIT_STATUS" })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

