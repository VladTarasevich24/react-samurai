import profile from "../components/Profile/Profile";


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts: [
        {id: 1, message: "Hello World", likesCount: 1},
        {id: 2, message: "Hi all", likesCount: 100},
        {id: 3, message: "Yo Yo everybody", likesCount: 112}
    ],
    newPostText: 'blablabla',
    profile: null,
}
export const profileReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            }
    }
    case SET_USER_PROFILE:{
        return {
        ...state, profile: action.profile
        }
    }

        default:
    return state;
}
}
export const AddPostActionCreator =() => ({type: ADD_POST})
export const updateNewPostActionCreator =(text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile =(profile) => ({type: SET_USER_PROFILE, profile})
export default profileReducer;