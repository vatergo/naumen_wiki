import express from 'express';
import * as storage from './request-store.js';

const app = express();

//app.set('view engine', 'html');

//app.use(express.static(__dirname.slice(0, -6) + '/public'));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'origin, content-type, accept, x-token');
    next();
});

/*app.get('/', (req, res) => {
    res.sendFile(__dirname.slice(0, -6) + 'public/index.html');
});*/

app.get('/requests', (req, res) => {
    let token = req.get('X-Token')
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(storage.getAllRequests(token)));
});

app.get('/requests/:name', (req, res) => {
    let token = req.get('X-Token')
    storage.addRequest(req.params.name, token).catch((msg) => console.log(msg)).then(data => res.send(data));
});

const server = app.listen(8080, () => console.log('Server is up and running on port 8080'));