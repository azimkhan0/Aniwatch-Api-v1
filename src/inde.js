const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const genre = require('./routes/genre.js'); // Use require for CommonJS modules
const info = require('./routes/info.js');
const app = require('./routes/app.js');
const search = require('./routes/search.js');
const random = require('./routes/random.js');
const mix = require('./routes/mix.js');
const episode = require('./routes/episode.js');
const shedule = require('./routes/shedule.js');
const server = require('./routes/server.js');
const src = require('./routes/server-src.js');

const inde = express();
const port = 3002;
const cors = require('cors');

const corsConfig = {
  origin: "*",
  methods: "GET",
  credentials: true,
  optionsSuccessStatus: 200,
};


try {
    inde.use('/api', genre);
inde.use('/api', info);
inde.use('/api', app);
inde.use('/api', search);
inde.use('/api', random);
inde.use('/api', mix);
inde.use('/api', episode);
inde.use('/api', shedule);
inde.use('/api', server);
inde.use('/api', src);
    inde.use(cors(CorsConfig));

  inde.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://aniwatch-api-v1-0.onrender.com/');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


inde.get('/', (req, res) =>{
    res.send("Api Is ON SERVICE !");
});


} catch (error) {
    // res.send('Back To Home');
}

inde.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
