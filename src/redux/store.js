import {createStore} from "redux";

const initialState = {

    users: [
        {id: 1, avatar: 1, name: 'Sergey', age: 77, status: 'Активен'}
    ]
}


const reducer = (state = initialState, action) => {
    console.log('reducer > ', action);

    switch (action.type) {
        case 'ADD-USER' :
            return {
                ...state,
                users: [...state.users,
                    {
                        id: action.user.id,
                        avatar: action.user.avatar,
                        name: action.user.name,
                        age: action.user.age,
                        status: 'Активен'
                    }],
            }
        default :
            return state;
    }

}

const store = createStore(reducer);
window.store = store;

export default store;