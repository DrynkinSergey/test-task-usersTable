export function addUser(id, name, age, avatar, status) {
    return {
        type: 'ADD-USER',
        data: {
            id, name, age, avatar, status
        }
    }
}

export function sortAge(data) {
    return {
        type: 'SORT-AGE-A-B',
        data

    }
}