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

export function sortId(data) {
    return {
        type: 'SORT-ID-A-B',
        data

    }
}

export function deleteUser(id) {
    return {
        type: 'DELETE-USER',
        id

    }
}

export function editUser(id, name, age) {
    return {
        type: 'UPDATE-USER',
        data: {
            id,
            name,
            age
        }

    }
}

export function loadUsers(data) {
    return {
        type: 'LOAD-USERS',
        data
    }
}

