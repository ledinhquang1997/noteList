import React, { Component } from 'react';
import { connect } from 'react-redux';
class NoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: ''
        }
    }

    componentWillMount() {
        if (this.props.editItem) {
            this.setState({
                id: this.props.editItem.id,
                noteTitle: this.props.editItem.title,
                noteContent: this.props.editItem.content
            });
        }
    }
    componentWillUpdate(nextProps, nextState) {

    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            noteTitle: '',
            noteContent: ''
        });
    }

    isChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = (title, content) => {
        var item = {};
        item.title = title;
        item.content = content;

        if (this.state.id) {
            item.id = this.props.editItem.id;
            this.props.editDataStore(item);
            this.props.changeEditStatus();
            this.props.alertOn({type:"EDIT",content:"Note with id "+item.id})
        }
        else {
            this.props.addDataStore(item);
            this.props.changeEditStatus();
            this.props.alertOn({type:"ADD",content:"Note with id "+item.id})

        }
        // this.props.getData(item);  
    }
    renderFormTitle = () => {
        if (this.props.status.isEdit && !this.props.status.isAdd) return "EDIT NOTE";
        return "ADD NEW NOTE";
    }
    render() {
        const { editItem } = this.props;
        return (
            <div className="col-lg-4 col-sm-12">
                <h3>{this.renderFormTitle()}</h3>
                <form>

                    <div className="form-group">
                        <label htmlFor="noteTitle">Title</label>
                        <input defaultValue={editItem.title} onChange={this.isChange} type="text" className="form-control" name="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Note title" />
                        <small id="helpIdNoteTitle" className="form-text text-muted">Fill the blank</small>
                        <br />
                        <label htmlFor="noteContent">Note content</label>
                        <textarea defaultValue={editItem.content} onChange={this.isChange} type="text" className="form-control" name="noteContent" aria-describedby="helpIdNoteContent" placeholder="Note content"></textarea>
                        <small id="helpIdNoteContent" className="form-text text-muted">Fill the blank</small>
                    </div>
                    <button type="reset" name="btnSummit" className="btn btn-primary btn-lg btn-block" onClick={() => this.handleSubmit(this.state.noteTitle, this.state.noteContent)}>Submit</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem,
        status: state.status
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (noteItem) => {
            dispatch({ type: "ADD_DATA", noteItem })
        },
        editDataStore: (itemToEdit) => {
            dispatch({ type: "EDIT", itemToEdit })
        },
        changeEditStatus: () => {
            dispatch({ type: "CHANGE_EDIT_STATUS" })
        },
        alertOn: (alert) => {
            dispatch({ type: "ALERT_ON", alert })
        },
        alertOff: () => {
            dispatch({ type: "ALERT_OFF"})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)