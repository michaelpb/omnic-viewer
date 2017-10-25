const express = require('express');
const app = express();

app.use(express.static(__dirname));

let cached = {};

app.get('/mock-omnic/clear-cache/', (req, res) => {
    cached = {};
    res.json({});
});

app.get('/media/:filename', (req, res) => {
    const { filename } = req.params;

    if (filename in cached) {
        console.log('-- Mock Omnic -- serving cached: ', filename);

        if (req.query.just_checking) {
            res.json({ ready: true });
        } else {
            res.sendFile(__dirname + '/test-media/' + filename);
        }

    } else {
        // Mark as cached in 2.5 seconds
        console.log('-- Mock Omnic -- started: ', filename);
        setTimeout(() => {
            console.log('-- Mock Omnic -- finished: ', filename);
            cached[filename] = true;
        }, 2500);

        // Send back JSON of only if cached or not
        if (req.query.just_checking) {
            res.json({ ready: false });
        } else {
            res.sendFile(__dirname + '/placeholder.png');
        }
    }
});


app.listen(3030, err => {
    if (err) { throw err; }
    console.log('Mock OmniC server listening at 3030');
});

