const bcrypt = require('bcryptjs');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Mateus Provider',
          email: 'mateus.provider@gmail.com',
          password_hash: bcrypt.hashSync('123321', 8),
          provider: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Mateus User',
          email: 'mateus.user@gmail.com',
          provider:false,
          password_hash: bcrypt.hashSync('123321', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => { },
};