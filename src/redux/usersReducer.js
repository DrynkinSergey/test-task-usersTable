import {AddUser} from "./types";

const initialState = {
    users: [
        {id: 1, avatar: 1, name: 'Sergey', age: 77, status: 'Активен'}
    ]
}

export const usersReducer = (state = initialState, action) => {
    console.log('UsersReducer > ', action)
    switch (action.type) {
        case AddUser :
            return {
                ...state,
                users: [...state.users,
                    {
                        id: action.data.id,
                        avatar: action.data.avatar,
                        name: action.data.name,
                        age: action.data.age,
                        status: 'Активен'
                    }],
            }
        default :
            return state;
    }
}