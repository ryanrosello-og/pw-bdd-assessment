import process from 'node:process'

export const config = {
  users: {
    standard: {
      username: 'standard_user',
      password: process.env.PASSWORD!,
    },
    invalid: {
      username: 'invalid_user',
      password: 'password123',
    },
  },
}
