const express =  require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://hbenvenutti:L551rp4r1vPIX03CLRd9@cluster0-re0yq.mongodb.net/week10?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(routes);

app.listen(3333);