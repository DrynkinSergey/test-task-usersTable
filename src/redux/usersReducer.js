import {AddUser, SortByAge} from "./types";

const initialState = {
    users: [],
    index: 0
}

export const usersReducer = (state = initialState, action) => {
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
                        status: action.data.status,
                        index: state.index

                    }],
                index: state.index + 1
            }
        case SortByAge :
            return {
                ...state,
                users: action.data
            }


        default :
            return state;
    }
}