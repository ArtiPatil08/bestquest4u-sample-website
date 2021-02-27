
const Udemy = require('udemy-api');
udemyApiClient = new Udemy('ClientId', 'ClientSecret');
udemyApiClient.get('courses?language=en', function(err, res, body) {
    if(err) return console.error(err);
    return body;
});




