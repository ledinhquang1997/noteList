import React, { Component } from 'react';
import {connect} from 'react-redux';
class NoteItem extends Component {
    handleEditClick=()=>{
        this.props.changeEditStatus();
        const item = {
            id:this.props.id,
            title:this.props.title,
            content:this.props.content
        }
        this.props.getEditData(item);
    }
    deleteItem=()=>{
        this.props.deleteDataSource(this.props.id);
        this.props.alertOn({type:"DELETE",content:"Note with id "+this.props.id})

    }
    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id="note1">
                    <div className="row justify-content-between">
                        <h5 className="mb-0">
                            <a data-toggle="collapse" data-parent="#noteList" href={"#number"+this.props.number} aria-expanded="true" aria-controls="noteContent1">
                                {this.props.title} </a>
                        </h5>
                        <div className="btn-group float-right justify-content-end">
                            <button className="btn btn-outline-info" onClick={this.handleEditClick}>Edit</button>
                            <button className="btn btn-outline-danger" onClick={this.deleteItem}>Delete</button>
                        </div>
                    </div>

                </div>
                <div id={"number"+this.props.number} className="collapse in" role="tabpanel" aria-labelledby="note1">
                    <div className="card-body">
                        {this.props.content}</div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
      isEdit: state.isEdit
    }
  }
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      changeEditStatus: () => {
        dispatch({type:"CHANGE_EDIT_STATUS"})
      },
      getEditData: (editObject) => {
        dispatch({type:"GET_EDIT_DATA", editObject})
      },
      deleteDataSource: (idToDelete) => {
        dispatch({type:"DELETE", idToDelete})
      },
      alertOn: (alert) => {
          dispatch({ type: "ALERT_ON",alert})
      }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)
