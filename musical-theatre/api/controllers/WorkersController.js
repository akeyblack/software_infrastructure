module.exports = {
  list: function(req, res) {
    Workers.find({}).exec((err, workers) => {
      if (err) 
        res.send(500,  { error: 'Database error' });
      return res.view('pages/workers/list', { workers: workers })
    });
  },

  add: function(req, res) {
    return res.view('pages/workers/add');
  },
  
  create: function(req, res) {
    Workers.create(req.body).exec(err => {
      if (err)
        res.send(500, { error: 'Database error' });
      else
        res.redirect('/workers');
    })
  },

  delete: function(req, res) {
    Workers.destroy({id: req.params.id}).exec(err=> {
      if (err)
        res.send(500,  { error: 'Database error' });
      else
        res.redirect('/workers');
    })
  }
};

