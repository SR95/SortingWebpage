module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert
  (
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */  
    "Posts",
    [
      {
        userId: 1,
        title: "hispotan de nu",
        context:
          "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        userId: 2,
        title: 'some dummy title',
        context:
          "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],

    {}
  ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Posts", null, {})
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
};   