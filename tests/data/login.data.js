export const USERS = [
    {   scenario: 'Successful login',
        username: 'test',
        password: 'password123',
        expectedMessage: 'User successfully logged in!'
    },
    {   scenario: 'Blocked account',
        username: 'testblock',
        password: 'password123',
        expectedMessage: 'User blocked!'
    },
    {   scenario: 'Invalid User',
        username: 'test123',
        password: 'password123',
        expectedMessage: 'User not found!'
    },
    {   scenario: 'Wrong Password',
        username: 'test',
        password: 'password1234',
        expectedMessage: 'Incorrect username or password!'
    },
    {   scenario: 'Wrong password 3 Times',
        username: 'test',
        password: 'password1234',
        expectedMessage: 'User temporarily blocked!',
        clickCount: 3
    }
]

