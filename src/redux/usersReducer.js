import {AddUser, DeleteUser, SortByAge, SortById} from "./types";

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
                        index: state.users.length+1,
                        avatar: action.data.avatar,
                        name: action.data.name,
                        age: action.data.age,
                        status: action.data.status,

                    }],
                index: state.index + 1
            }
        case SortByAge :
            return {
                ...state,
                users: action.data
            }
        case SortById :
            return {
                ...state,
                users: action.data
            }
        case DeleteUser:
            return (() => {
                const { id } = action;
                const { users } = state;
                const itemIndex = users.findIndex(res => res.id === id);

                const nextUsers = [
                    ...users.slice(0, itemIndex),
                    ...users.slice(itemIndex + 1)
                ];

                return {
                    ...state,
                    users: nextUsers,


                }
            })();



        default :
            return state;
    }
}