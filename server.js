const app = require('./config/express')();

require('./config/database')('mongodb://localhost/agenda');

app.listen('3000', function() {
    console.log('Server running..');
});
