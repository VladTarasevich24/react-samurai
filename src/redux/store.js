import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: "Hello World", likesCount: 1},
                {id: 2, message: "Hi all", likesCount: 100},
                {id: 3, message: "Yo Yo everybody", likesCount: 112}
            ],
            newPostText: 'blablabla'

        },
        dialogsPage:{
            dialogs:[
                {id: 1, name: "Vlad"},
                {id: 2, name: "Sasha"},
                {id: 3, name: "Dima"},
                {id: 4, name: "Denis"},
                {id: 5, name: "Petr"},
                {id: 6, name: "Ivan"},
            ],
            messages:[
                {message: "Hi"},
                {message: "Hello"},
                {message: "How are you?"},
                {message: "Yo Yo"},
                {message: "Where are you?"},
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber(){
        console.log("fjhfjfj");
    },

    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);

    }

}
export const addPostActionCreator = () => {
    return {
        type : ADD_POST,
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export const sendMessageCreator = () => {
    return {
        type : SEND_MESSAGE,
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body,
    }
}





window.store = store;

export default store;