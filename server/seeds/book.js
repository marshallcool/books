// title - text
// list_author - object
// total_pages - integer
// name_publishing - text
// year - text
// date - datetime
// img - string

exports.seed = function(knex, Promise) {
  return knex('book').del()
    .then(function () {
      const books = [
        {
          title: 'Apple',
          list_author: {
            first_name: 'Steve',
            last_name: 'Jobs'
          },
          total_pages: 10,
          name_publishing: 'Mozaika',
          year: '1994',
          date: '12.12.1994'
        },
        {
          title: 'Nike',
          list_author: {
            first_name: 'Nike 1',
            last_name: 'Nike 2'
          },
          total_pages: 10,
          name_publishing: 'Mozaika',
          year: '1994',
          date: '12.12.1994'
        }
      ];
      return knex('book').insert(books);
    });
};
