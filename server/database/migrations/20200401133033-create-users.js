'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeConstraint(
        "Users",
        'emailUnique'
      ),
      queryInterface.removeConstraint(
        "Users",
        'userNameUnique'
      ),
    ])
  }
};

'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addConstraint(
        "Users",
        ["email"],
        {
          type: "unique",
          name: 'emailUnique'
        }),
      queryInterface.addConstraint(
        "Users",
        ["userName"],
        {
          type: "unique",
          name: 'userNameUnique'
        })
      ]);
  },
down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeConstraint(
        "Users",
        'emailUnique'
      ),
      queryInterface.removeConstraint(
        "Users",
        'userNameUnique'
      ),
    ])
  }
};