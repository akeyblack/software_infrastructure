module.exports = {

  attributes: {
    id: {
      type: 'number',
      autoIncrement: true
    },
    name: {
      type: 'string'
    },
    genre: {
      model: 'Genres'
    },
    duration: {
      type: 'number'
    },
    description: {
      type: 'string'
    }
  },

};

