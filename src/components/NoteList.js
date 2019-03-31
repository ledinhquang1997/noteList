import React, { Component } from 'react';
import {noteData} from '../firebaseConfig';
import NoteItem from './NoteItem';

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state={
            dataFirebase:[]
        }
    }
    
    componentWillMount() {
        this.getData();
    }
    
    
    getData=()=>{
        noteData.on('value',(notes)=>{
            noteData.on('value',(notes)=>{
                var arrData= [];
                notes.forEach(note=>{
                    arrData.push({
                        id: note.key,
                        title:note.val().title,
                        content:note.val().content
                    })
                })

                this.setState({
                    dataFirebase:arrData
                })
            })
        })
    }

    renderNoteItem = ()=>{
        if(this.state.dataFirebase){
            return this.state.dataFirebase.map((value,key)=>{
                return (
                    <NoteItem key={key} number={key} id={value.id} title={value.title} content={value.content}/>
                )
            })
        }
    }
    render() {
        return (
            <div className="col-lg col-sm-12">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    {this.renderNoteItem()}
                </div>
            </div>

        );
    }
}

export default NoteList;