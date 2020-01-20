const express =  require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const routes = require('./routes');

const {setupWebsocket} = require('./websocket');

const app = express();
const server = http.Server(app); //Servidor http para usar WebSocket

setupWebsocket(server);

mongoose.connect('mongodb+srv://hbenvenutti:L551rp4r1vPIX03CLRd9@cluster0-re0yq.mongodb.net/week10?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(routes);

server.listen(3333);    //substitui o app.listen(3333)