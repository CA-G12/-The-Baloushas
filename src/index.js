const app = require('./app');

app.listen(app.get('port'), () => {
    console.log(`App running at http://localhost:${app.get('port')}`);
  });