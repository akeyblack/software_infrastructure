module.exports = {
  list: function(req, res) {
    Shows.find({}).populate('genre').exec((err, shows) => {
      if (err) {
        res.send(500,  {error: 'Database error' });
      }
      return res.view('pages/shows/list', { shows: shows });
    });
  },

  add: function(req, res) {
    Genres.find({}).exec((err, genres) => {
      if (err) {
        res.send(500,  {error: 'Database error' });
      }
      return res.view('pages/shows/add', { genres: genres });
    });
  },

  create: function(req, res) {
    Shows.create(req.body).exec(err => {
      if (err)
        res.send(500,   { error: 'Database error' });
      res.redirect('/shows');
    })
  }, 
  
  delete: function(req, res) {
    Shows.destroy({id: req.params.id}).exec(err=> {
      if (err)
        res.send(500,  { error: 'Database error' });
      else
        res.redirect('/shows');
    })
  }
};

