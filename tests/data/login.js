export const USERS = {
    validUser:{
        username: 'test',
        password: 'password123',
        expectedMessage: 'User successfully logged in!'
    },
    blockedUser: {
        username: 'testblock',
        password: 'password123',
        expectedMessage: 'User blocked!'
    },
    invalidUser: {
        username: 'test123',
        password: 'password123',
        expectedMessage: 'User not found!'
    },
    wrongPassword: {
        username: 'test',
        password: 'password1234',
        expectedMessage: 'Incorrect username or password!'
    },
    wrong3Times: {
        username: 'test',
        password: 'password1234',
        expectedMessage: 'User temporarily blocked!'
    }
}