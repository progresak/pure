import express from 'express';
import * as path from 'path';

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is listening on port ${PORT}!`);
});
