function index(req, res) {
    res.json({
      message: 'Welcome to Tripper Api!',
      documentation_url: 'NA',
      base_url: 'localhost:3090',
      endpoints: [
        {
          method: 'GET', path: '/api', description: 'Describes available endpoints'
        }
      ]
    });
  }
  
  // exports above funciton index 
  module.exports = { index: index }