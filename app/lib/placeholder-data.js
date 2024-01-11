const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
    role: 'user',
  },
];

const forms = [
  {
    user_id: users[0].id,
    positive: 3,
    good: 4,
    pleasant: 3,
    happy: 3,
    joyful: 3,
    contented: 5,
    negative: 3,
    bad: 2,
    unpleasant: 3,
    sad: 4,
    afraid: 2,
    angry: 3,
  },
];

module.exports = {
  users,
  forms,
};