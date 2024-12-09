const resolvers = require('../resolvers/user.resolver');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

// Mock the User model methods
jest.mock('../models/user.model');

// Mock JWT and bcrypt methods
jest.mock('bcrypt');
jest.mock('jsonwebtoken');

describe('signOut Mutation', () => {
  it('should sign out a user and clear the cookie', async () => {
    // Mock req and res objects
    const req = { cookies: { token: 'mocked_token' } };  // Mock req object with token cookie
    const res = { clearCookie: jest.fn() };  // Mock res object with clearCookie method

    const args = {};
    const context = { req, res };  // Pass mocked req and res to context

    // Call the signOut mutation
    const result = await resolvers.Mutation.signOut(null, args, context);

    // Assertions
    expect(result).toBe(true);  // Ensure that the result is true, indicating successful sign-out
    expect(res.clearCookie).toHaveBeenCalledWith('token');  // Ensure the cookie is cleared
  });
});
