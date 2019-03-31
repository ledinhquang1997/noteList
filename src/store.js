import { noteData } from './firebaseConfig';
import { combineReducers } from 'redux';

var redux = require('redux');


const editStatusReducer = (state = { isEdit: false, isAdd: false }, action) => {
    switch (action.type) {
        case "CHANGE_EDIT_STATUS":
            return { ...state, isEdit: !state.isEdit, isAdd: false };
        case "CHANGE_ADD_STATUS":
            return { ...state, isEdit: false, isAdd: !state.isAdd };
        default:
            return state
    }
}

const noteInitialState = {}
const noteReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            noteData.push(action.noteItem);
            console.log("Ket noi thanh cong voi database: " + action.noteItem);
            return state
        case "GET_EDIT_DATA":
            return action.editObject
        case "EDIT":
            noteData.child(action.itemToEdit.id).update({
                title: action.itemToEdit.title,
                content: action.itemToEdit.content
            })
            console.log("Updated sucessfully");
            return {}
        case "RESET":
            return {}
        case "DELETE":
            console.log("id to delete: " + action.idToDelete);
            noteData.child(action.idToDelete).remove();
            return state;
        default:
            return state
    }
}

const alertInitialState = {
    status:false,
    content:"",
    type:""
}
const alertReducer = (state = alertInitialState, action) => {
    switch (action.type) {
        case "ALERT_ON":
            return {...state,status:true,content:action.alert.content,type:action.alert.type}
        case "ALERT_OFF":
            return {...state,status:false}
        default:
            return state
    }
}

const allReducers = combineReducers({
    status: editStatusReducer,
    editItem: noteReducer,
    alert:alertReducer
})
var store = redux.createStore(allReducers);
store.subscribe(() => {
    console.log(store.getState());
})
export default store;