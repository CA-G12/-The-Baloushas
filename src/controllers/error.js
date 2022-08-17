// handle client and server errors
const path = require('path');

const clientErrors = (req, res) => {
    res.status(404).sendFile(path.join(__dirname,'..', '..', 'public', '404.html'));
  };

  const serverErrors = (err, req, res, next) => {
    res.status(500).sendFile(path.join(__dirname,'..', '..', 'public', '500.html'));
  };

  module.exports = {clientErrors, serverErrors}