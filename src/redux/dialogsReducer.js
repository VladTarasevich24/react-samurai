const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
}
const dialogsReducer = (state = initialState,action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return{
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 6, message: body}]
            };


    }
    return state;
}
export default dialogsReducer;